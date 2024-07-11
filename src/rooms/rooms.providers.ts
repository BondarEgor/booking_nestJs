import { DataSource } from 'typeorm'
import { Rooms } from './rooms.entity'

export const roomsProviders = [
	{
		provide: 'ROOMS_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Rooms),
		inject: ['DATA_SOURCE']
	}
]