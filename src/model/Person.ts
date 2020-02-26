import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import { Actor } from './Actor'
import { Image } from './Image'
import { Feature } from './Feature'

@Entity()
export class Person {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: true })
	bith: Date

	@ManyToMany(type => Feature, feature => feature.persons)
	@JoinTable()
	features: Feature[]

	@Column({ nullable: true })
	@OneToOne(type => Image)
	@JoinColumn()
	photo: Image

	@OneToOne(type => Actor, actor => actor.person)
	actor: Actor

}