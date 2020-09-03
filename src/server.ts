import app from './app'
import ormconfig from '../ormconfig.json'
import { createConnection, ConnectionOptions } from 'typeorm'
import ormGlobal from './orm-global'
import www from 'www-express'
import Debug from 'debug'

const debug = Debug('firegallery-backend:server')

createConnection(ormconfig as ConnectionOptions)
	.then(async connection => {
		ormGlobal.connection = connection
		await www(app, debug)
	}).catch(console.error)
