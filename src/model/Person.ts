import { Entity, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import { Actor } from './Actor'
import { Image } from './Image'
import { Feature } from './Feature'
import { BaseModel } from './BaseModel'

@Entity()
export class Person extends BaseModel {

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: true })
	bith: Date

	@ManyToMany(type => Feature, feature => feature.persons)
	@JoinTable()
	features: Feature[]

	@OneToOne(type => Image, { nullable: true })
	@JoinColumn()
	photo: Image

	@OneToOne(type => Actor, actor => actor.person)
	actor: Actor

}