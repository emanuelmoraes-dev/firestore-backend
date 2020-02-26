import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import { Link } from './Link'
import { Actor } from './Actor'

export class Image {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: true })
	width: number

	@Column({ nullable: true })
	height: number

	@ManyToMany(type => Actor, actor => actor.images)
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