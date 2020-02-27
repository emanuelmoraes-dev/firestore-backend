import { Entity, Column, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm'
import { Link } from './Link'
import { Image } from './Image'
import { Content } from './Content'
import { Profile } from './Profile'
import { BaseModel } from './BaseModel'

@Entity()
export class Producer extends BaseModel {

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@OneToOne(type => Link, { nullable: true })
	@JoinColumn()
	link: Link

	@OneToOne(type => Image, { nullable: true })
	@JoinColumn()
	icon: Image

	@ManyToMany(type => Content, content => content.producers)
	contents: Content[]

	@ManyToOne(type => Profile, { nullable: false })
	@JoinColumn()
	profile: Profile

}