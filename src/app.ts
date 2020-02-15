import 'reflect-metadata'
import './config'
import dotenv from 'dotenv-safe'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'

const app = express()

dotenv.config()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded( { extended: false } ))
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (_, res) => {
	res.write('wellcome')
	res.end()
})

export default app