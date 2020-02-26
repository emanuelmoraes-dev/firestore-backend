import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm'
import { Link } from './Link'
import { Image } from './Image'
import { Content } from './Content'
import { Profile } from './Profile'

@Entity()
export class Producer {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: true })
	@OneToOne(type => Link)
	@JoinColumn()
	link: Link

	@Column({ nullable: true })
	@OneToOne(type => Image)
	@JoinColumn()
	icon: Image

	@ManyToMany(type => Content, content => content.producers)
	contents: Content[]

	@Column({ nullable: false })
	@ManyToOne(type => Profile)
	@JoinColumn()
	profile: Profile

}