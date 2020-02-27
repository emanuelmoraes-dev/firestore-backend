import { Entity, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm'
import { Content } from './Content'
import { Profile } from './Profile'
import { BaseModel } from './BaseModel'

@Entity()
export class Tag extends BaseModel {

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

	@ManyToOne(type => Profile, { nullable: false })
	@JoinColumn()
	profile: Profile

}