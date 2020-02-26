import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Content } from './Content'
import { Movie } from './Movie'
import { Image } from './Image'

export class Link {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	type: string

	@Column({ nullable: false })
	url: string

	@Column({ nullable: false })
	sourceUrl: string

	@Column({ nullable: false })
	sourceName: string

	@Column({ nullable: false })
	@OneToOne(type => Content)
	@JoinColumn()
	content: Content

	@OneToOne(type => Movie, movie => movie.link)
	movie: Movie

	@OneToOne(type => Image, image => image.link)
	image: Image

}