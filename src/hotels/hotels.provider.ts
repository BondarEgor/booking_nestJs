import { DataSource } from 'typeorm'
import { Hotels } from './hotels.entity'

export const hotelsProviders = [
	{
		provide: 'HOTELS_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Hotels),
		inject: ['DATA_SOURCE']
	}
]