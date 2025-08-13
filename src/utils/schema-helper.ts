import { Value } from '@sinclair/typebox/value'
import { TSchema } from 'elysia'

abstract class SchemaHelper {
  static parse<T>(schema: TSchema, data: unknown): T {
    return Value.Parse(schema, data)
  } 

  static parseAsArray<T>(schema: TSchema, data: Array<unknown>): Array<T> {
    return data.map((item) => Value.Parse(schema, item))
  }
}

export default SchemaHelper