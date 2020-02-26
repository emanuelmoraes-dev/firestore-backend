import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm'
import { Person } from './Person'
import { Movie } from './Movie'
import { Image } from './Image'
import { Profile } from './Profile'

@Entity()
export class Actor {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: true })
	stars: number

	@Column({ default: false })
	preferred: boolean

	@ManyToMany(type => Movie, movie => movie.actors)
	movies: Movie[]

	@ManyToMany(type => Image, image => image.actors)
	images: Image[]

	@Column({ nullable: false })
	@OneToOne(type => Person)
	@JoinColumn()
	person: Person

	@Column({ nullable: false })
	@ManyToOne(type => Profile)
	@JoinColumn()
	profile: Profile

}