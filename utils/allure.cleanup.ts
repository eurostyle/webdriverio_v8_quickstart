import * as fs from 'fs';
import * as path from 'path';

const reportsPath = process.env.ALLURE_RESULTS_PATH as string;

/**
 * Deletes old reports from the specified reports directory.
 *
 * @param minutes The number of minutes to keep old reports before deleting.
 */
export function deleteOldReports(minutes: number = 10): void {
  const currentTime: number = Date.now();
  const minutesInMilliseconds: number = minutes * 60 * 1000;
  
  fs.readdir(reportsPath, (err: NodeJS.ErrnoException | null, files: string[]): void => {
    if (err) {
      console.error('Error reading reports directory:', err);
      return;
    }
    
    files.forEach((file: string): void => {
      const filePath: string = path.join(reportsPath, file);
      fs.stat(filePath, (err: NodeJS.ErrnoException | null, stats: fs.Stats): void => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }
        
        const fileAge: number = currentTime - stats.mtimeMs;
        
        if (fileAge > minutesInMilliseconds) {
          fs.unlink(filePath, (err: NodeJS.ErrnoException | null): void => {
            if (err) {
              console.error('Error deleting file:', err);
              return;
            }
            
            console.log('Deleted old report:', filePath);
          });
        }
      });
    });
  });
}