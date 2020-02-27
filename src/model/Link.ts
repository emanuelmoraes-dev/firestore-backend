import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'
import { Content } from './Content'
import { Movie } from './Movie'
import { Image } from './Image'
import { BaseModel } from './BaseModel'

@Entity()
export class Link extends BaseModel {

	@Column({ nullable: false })
	url: string

	@Column({ nullable: false })
	sourceUrl: string

	@Column({ nullable: false })
	sourceName: string

	@OneToOne(type => Content, { nullable: false })
	@JoinColumn()
	content: Content

	@OneToOne(type => Movie, movie => movie.link)
	movie: Movie

	@OneToOne(type => Image, image => image.link)
	image: Image

}