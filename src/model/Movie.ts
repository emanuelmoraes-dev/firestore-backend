import { Entity, JoinColumn, OneToOne, Column, ManyToMany, JoinTable } from 'typeorm'
import { File } from './File'
import { Link } from './Link'
import { Image } from './Image'
import { Actor } from './Actor'
import { BaseModel } from './BaseModel'

@Entity()
export class Movie extends BaseModel {

	@Column({ nullable: false })
	duration: number

	@OneToOne(type => Image, { nullable: false })
	@JoinColumn()
	cover: Image

	@ManyToMany(type => Actor, actor => actor.movies)
	@JoinTable()
	actors: Actor[]

	@OneToOne(type => File, { nullable: true })
	@JoinColumn()
	file: File

	@OneToOne(type => Link, { nullable: true })
	@JoinColumn()
	link: Link

}