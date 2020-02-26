import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, ManyToMany } from 'typeorm'
import { Image } from './Image'
import { Content } from './Content'

@Entity()
export class Category {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: true })
	@ManyToOne(type => Category)
	@JoinColumn()
	dependency: Category

	@Column({ nullable: true })
	@OneToOne(type => Image)
	@JoinColumn()
	cover: Image

	@ManyToMany(type => Content, content => content.categories)
	contents: Content[]

}