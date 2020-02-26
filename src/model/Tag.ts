import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import { Content } from './Content'

@Entity()
export class Tag {

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

	@ManyToMany(type=> Content, content => content.tags)
	contents: Content[]

}