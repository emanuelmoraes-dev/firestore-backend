import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Link } from './Link'

export class Image {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: true })
	width: number

	@Column({ nullable: true })
	height: number

	@Column({ nullable: true })
	@OneToOne(type => File)
	@JoinColumn()
	file: File

	@Column({ nullable: true })
	@OneToOne(type => Link)
	@JoinColumn()
	link: Link

}