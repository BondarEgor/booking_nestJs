import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Booking } from './booking.entity'

@Injectable()
export class BookingService {
	constructor(
		@Inject('BOOKING_REPOSITORY')
		private bookingRepository: Repository<Booking>
	) { }

	async findAll():Promise<Booking[]> {
		return this.bookingRepository.find()
	}
}
