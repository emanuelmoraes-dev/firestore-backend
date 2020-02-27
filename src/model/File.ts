import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'
import { Movie } from './Movie'
import { Content } from './Content'
import { Image } from './Image'
import { BaseModel } from './BaseModel'
import { Document } from './Document'

@Entity()
export class File extends BaseModel {

	@Column({ nullable: false })
	filename: string

	@Column({ nullable: false })
	type: string

	@OneToOne(type => Content, { nullable: false })
	@JoinColumn()
	content: Content

	@OneToOne(type => Movie, movie => movie.file)
	movie: Movie

	@OneToOne(type => Image, image => image.file)
	image: Image

	@OneToOne(type => Document, document => document.file)
	document: Document

}