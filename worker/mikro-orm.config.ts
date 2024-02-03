import { Options } from "@mikro-orm/core";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'

const DB_HOST = process.env.DB_HOST
const DB_PORT = parseInt(process.env.DB_PORT as string, 10)
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const mikroOrmConfig: Options<PostgreSqlDriver> = {
  type: 'postgresql' as const,
  host: DB_HOST,
  port: DB_PORT,
  dbName: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  highlighter: new SqlHighlighter(),
  debug: true,
  allowGlobalContext: true,
  entities: ['../core/src/entities/**/*.js'],
  entitiesTs: ['../core/src/entities/**/*.ts'],
  migrations: {
    path: '../core/src/migrations',
    pathTs: '../core/src/migrations',
    tableName: '_bemi_migrations',
  },
}

export default mikroOrmConfig
