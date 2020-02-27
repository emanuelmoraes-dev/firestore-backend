import { Entity, Column } from 'typeorm'
import { BaseModel } from './BaseModel'

@Entity()
export class Profile extends BaseModel {

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: false })
	password: string

}