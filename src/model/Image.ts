import { Entity, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import { Link } from './Link'
import { Actor } from './Actor'
import { BaseModel } from './BaseModel'
import { File } from './File'

@Entity()
export class Image extends BaseModel {

	@Column({ nullable: true })
	width: number

	@Column({ nullable: true })
	height: number

	@ManyToMany(type => Actor, actor => actor.images)
	@JoinTable()
	actors: Actor[]

	@OneToOne(type => File, { nullable: true })
	@JoinColumn()
	file: File

	@OneToOne(type => Link, { nullable: true })
	@JoinColumn()
	link: Link

}