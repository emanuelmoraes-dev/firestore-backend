import { Entity, Column, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm'
import { Person } from './Person'
import { Movie } from './Movie'
import { Image } from './Image'
import { Profile } from './Profile'
import { BaseModel } from './BaseModel'

@Entity()
export class Actor extends BaseModel {

	@Column({ nullable: true })
	stars: number

	@Column({ default: false })
	preferred: boolean

	@ManyToMany(type => Movie, movie => movie.actors)
	movies: Movie[]

	@ManyToMany(type => Image, image => image.actors)
	images: Image[]

	@OneToOne(type => Person, { nullable: false })
	@JoinColumn()
	person: Person

	@ManyToOne(type => Profile, { nullable: false })
	@JoinColumn()
	profile: Profile

}