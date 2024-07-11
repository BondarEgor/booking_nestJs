import { DataSource } from 'typeorm'
import { Reviews } from './reviews.entity'

export const reviewsProviders = [
	{
		provide: 'REVIEWS_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Reviews),
		inject: ['DATA_SOURCE']
	}
]