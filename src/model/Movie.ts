import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, Column, ManyToMany, JoinTable } from 'typeorm'
import { File } from './File'
import { Link } from './Link'
import { Image } from './Image'
import { Actor } from './Actor'

@Entity()
export class Movie {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	duration: number

	@Column({ nullable: true })
	@OneToOne(type => Image)
	@JoinColumn()
	cover: Image

	@ManyToMany(type => Actor, actor => actor.movies)
	@JoinTable()
	actors: Actor[]

	@Column({ nullable: true })
	@OneToOne(type => File)
	@JoinColumn()
	file: File

	@Column({ nullable: true })
	@OneToOne(type => Link)
	@JoinColumn()
	link: Link

}