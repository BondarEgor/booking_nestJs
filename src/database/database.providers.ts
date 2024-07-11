import { DataSource } from 'typeorm'
import mysql from 'mysql2/promise'

export const databaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const connection = await mysql.createConnection({
				host: 'localhost',
				port: 3306,
				user: 'root',
				password: 'root',
			})
			await connection.query('CREATE DATABASE IF NOT EXISTS booking')
			await connection.end()

			const dataSource = new DataSource({
				type: 'mysql',
				host: 'localhost',
				port: 3306,
				username: 'root',
				password: 'root',
				database: 'booking',
				entities: [
					__dirname + '/../**/*.entity{.ts,.js}',
				],
				synchronize: true,
			})

			return dataSource.initialize()
		},
	},
]
