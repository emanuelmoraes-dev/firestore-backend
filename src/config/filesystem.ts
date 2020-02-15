import { resolve } from 'path'
import mkdirp from 'mkdirp'

const FOLDERS: string[] = [
	'DATA'
]

for (let folder of FOLDERS) {
	mkdirp(resolve(__dirname, '..', '..', folder))
}