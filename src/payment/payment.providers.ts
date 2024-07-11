import { DataSource } from 'typeorm'
import { Payments } from './payment.entity'

export const paymentProviders = [
	{
		provide: 'PAYMENT_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Payments),
		inject: ['DATA_SOURCE']
	}
]