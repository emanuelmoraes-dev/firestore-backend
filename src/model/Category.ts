import { Entity, Column, OneToOne, JoinColumn, ManyToOne, ManyToMany } from 'typeorm'
import { Image } from './Image'
import { Content } from './Content'
import { Profile } from './Profile'
import { BaseModel } from './BaseModel'

@Entity()
export class Category extends BaseModel {

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@ManyToOne(type => Category, { nullable: true })
	@JoinColumn()
	dependency: Category

	@OneToOne(type => Image, { nullable: true })
	@JoinColumn()
	cover: Image

	@ManyToMany(type => Content, content => content.categories)
	contents: Content[]

	@ManyToOne(type => Profile, { nullable: false })
	@JoinColumn()
	profile: Profile

}