import { Module } from '@nestjs/common'
import { BookingController } from './booking.controller'
import { BookingService } from './booking.service'
import { bookingProviders } from './booking.provider'
import { DatabaseModule } from 'src/database/database.module'

@Module({
  controllers: [BookingController],
  providers: [
    ...bookingProviders,
    BookingService],
  imports: [DatabaseModule]
})
export class BookingModule { }
