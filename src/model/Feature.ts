import { Entity, Column, ManyToMany } from 'typeorm'
import { Person } from './Person'
import { BaseModel } from './BaseModel'

@Entity()
export class Feature extends BaseModel {

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: true })
	identityGroup: string

	@Column({ nullable: true })
	group: string

	@ManyToMany(type => Person, person => person.features)
	persons: Person[]

}