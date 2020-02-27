import { Entity, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm'
import { Image } from './Image'
import { Link } from './Link'
import { Content } from './Content'
import { Profile } from './Profile'
import { BaseModel } from './BaseModel'

@Entity()
export class Channel extends BaseModel {

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@OneToOne(type => Link, { nullable: false })
	@JoinColumn()
	link: Link

	@OneToOne(type => Image, { nullable: true })
	@JoinColumn()
	cover: Image

	@OneToMany(type => Content, content => content.channel)
	contents: Content[]

	@ManyToOne(type => Profile, { nullable: false })
	@JoinColumn()
	profile: Profile

}