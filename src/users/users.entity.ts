import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')

export class Users {
	@PrimaryGeneratedColumn()
	user_id: number

	@Column()
	name: string

	@Column()
	email: string

	@Column()
	mobile_phone: string

	@Column()
	password: string

	@CreateDateColumn()
	createdAt: Date
}