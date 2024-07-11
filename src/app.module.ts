import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    UsersModule,
    HotelsModule,
    RoomsModule,
    BookingModule,
    PaymentModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
