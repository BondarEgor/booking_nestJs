import { Rooms } from 'src/rooms/rooms.entity'
import { Users } from 'src/users/users.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('booking')

export class Booking {
	@PrimaryGeneratedColumn()
	booking_id: number

	@Column()
	check_in: Date

	@Column()
	check_out: Date

	@Column()
	booking_status: string

	@Column()
	total_price: number

	@CreateDateColumn()
	created_at: Date

	@Column()
	user_id: number

	@Column()
	room_id: number

	@ManyToOne(() => Users)
	@JoinColumn({ name: 'user_id' })
	user: Users

	@ManyToOne(() => Rooms)
	@JoinColumn({ name: 'room_id' })
	room: Rooms
}