import { Hotels } from 'src/hotels/hotels.entity'
import { Users } from 'src/users/users.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

//Просто создам сущность, чтобы была, но пока мы ее не делаем
@Entity('Payments')

export class Reviews {
	@PrimaryColumn()
	review_id: number

	@Column()
	user_id: number

	@Column()
	hotel_id: number

	@Column()
	rating: number

	@CreateDateColumn()
	created_at: Date

	@Column()
	comment_text: string

	@ManyToOne(() => Users)
	@JoinColumn({ name: 'user_id' })
	user: Users

	@ManyToOne(() => Hotels)
	@JoinColumn({ name: 'hotel_id' })
	hotel: Hotels
}