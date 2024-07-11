import { Hotels } from 'src/hotels/hotels.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('rooms')

export class Rooms {
	@PrimaryGeneratedColumn()
	room_id: number

	@Column()
	availability: boolean

	@Column()
	room_number: number

	@Column()
	type: string

	@Column()
	description: string

	@Column()
	price: number

	@Column()
	hotel_id: number

	@ManyToOne(() => Hotels)
	@JoinColumn({ name: 'hotel_id' })
	hotel: Hotels
}