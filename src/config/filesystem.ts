import { resolve } from 'path'
import mkdirp from 'mkdirp'

const FOLDERS: string[] = []

for (let folder of FOLDERS) {
	if (folder) {
		mkdirp(resolve(__dirname, '..', '..', folder))
	}
}