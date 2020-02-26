import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm'
import { Image } from './Image'
import { Link } from './Link'
import { Content } from './Content'
import { Profile } from './Profile'

@Entity()
export class Channel {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: false })
	@OneToOne(type => Link)
	@JoinColumn()
	link: Link

	@Column({ nullable: true })
	@OneToOne(type => Image)
	@JoinColumn()
	cover: Image

	@OneToMany(type => Content, content => content.channel)
	contents: Content[]

	@Column({ nullable: false })
	@ManyToOne(type => Profile)
	@JoinColumn()
	profile: Profile

}