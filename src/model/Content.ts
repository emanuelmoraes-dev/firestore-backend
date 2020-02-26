import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinTable } from 'typeorm'
import { File } from './File'
import { Category } from './Category'
import { Link } from './Link'
import { Tag } from './Tag'

@Entity()
export class Content {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	identityOriginalName: string

	@Column({ nullable: false })
	originalName: string

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: false })
	stored: boolean

	@Column({ default: true })
	active: boolean

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

}