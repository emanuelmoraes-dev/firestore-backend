import { Entity, Column, OneToOne, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm'
import { File } from './File'
import { Category } from './Category'
import { Link } from './Link'
import { Tag } from './Tag'
import { Channel } from './Channel'
import { Producer } from './Producer'
import { Profile } from './Profile'
import { BaseModel } from './BaseModel'

@Entity()
export class Content extends BaseModel {

	@Column({ nullable: false })
	identityOriginalName: string

	@Column({ nullable: false })
	originalName: string

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ default: 0 })
	views: number

	@Column({ nullable: true })
	lastViewDate: Date

	@Column({ nullable: true })
	stars: number

	@Column({ default: false })
	preferred: boolean

	@Column({ nullable: false })
	stored: boolean

	@Column({ default: true })
	active: boolean

	@ManyToOne(type => Channel, { nullable: true })
	@JoinColumn()
	channel: Channel

	@ManyToMany(type => Producer, producer => producer.contents)
	@JoinTable()
	producers: Producer[]

	@ManyToMany(type => Category, category => category.contents)
	@JoinTable()
	categories: Category[]

	@ManyToMany(type => Tag, tag => tag.contents)
	@JoinTable()
	tags: Tag[]

	@OneToOne(type => File, file => file.content)
	file: File

	@OneToOne(type => Link, link => link.content)
	link: Link

	@ManyToOne(type => Profile, { nullable: false })
	@JoinColumn()
	profile: Profile

}