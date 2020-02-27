import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'
import { Content } from './Content'
import { BaseModel } from './BaseModel'

@Entity()
export class Document extends BaseModel {

	@Column({ nullable: false })
	text: string

	@Column({ nullable: true })
	resume: string

	@OneToOne(type => Content, { nullable: false })
	@JoinColumn()
	content: Content

}