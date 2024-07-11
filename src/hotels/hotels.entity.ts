import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('hotels')

export class Hotels {
	@PrimaryGeneratedColumn()
	hotel_id: number

	@Column()
	city_address: string

	@Column()
	description: string

	@Column('float')
	rating: string

	@CreateDateColumn()
	createdAt: Date
}