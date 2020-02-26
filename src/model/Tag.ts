import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm'
import { Content } from './Content'
import { Profile } from './Profile'

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

	@Column({ nullable: false })
	@ManyToOne(type => Profile)
	@JoinColumn()
	profile: Profile

}