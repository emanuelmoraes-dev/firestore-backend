import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import { Person } from './Person'

@Entity()
export class Feature {

	@PrimaryGeneratedColumn()
	id: number

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