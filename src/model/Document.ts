import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Content } from './Content'

@Entity()
export class Document {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	text: string

	@Column({ nullable: true })
	resume: string

	@Column({ nullable: false })
	@OneToOne(type => Content)
	@JoinColumn()
	content: Content

}