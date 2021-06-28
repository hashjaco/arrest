import * as fs from 'fs';
import * as path from 'path';

export const getCurrentDirectoryBase = () => path.basename(process.cwd());

export const directoryExists = (filePath) => fs.existsSync(filePath);
