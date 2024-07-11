import { Booking } from 'src/booking/booking.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

//Просто создам сущность, чтобы была, но пока мы ее не делаем
@Entity('Payments')

export class Payments {
	@PrimaryGeneratedColumn()
	payment_id: number

	@Column()
	payment_method: string

	@CreateDateColumn()
	payment_date: Date

	@Column()
	payment_amount: number

	@Column()
	booking_id: number

	@ManyToOne(() => Booking)
	@JoinColumn({ name: 'booking_id' })
	booking: Booking
}