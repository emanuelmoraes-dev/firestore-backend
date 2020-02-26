import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Profile {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	identityName: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: false })
	password: string

}