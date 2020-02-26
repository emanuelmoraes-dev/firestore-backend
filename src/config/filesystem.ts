import { resolve } from 'path'
import mkdirp from 'mkdirp'
import os from 'os'

// HOME FOLDERS

export const ROOT = resolve(os.homedir(), '.firegallery')
export const FILES = resolve(ROOT, 'files')

mkdirp(FILES)