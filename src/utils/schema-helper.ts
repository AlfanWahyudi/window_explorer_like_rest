import { Value } from '@sinclair/typebox/value'
import { TSchema } from 'elysia'

abstract class SchemaHelper {
  static parse<T>(schema: TSchema, data: unknown): T {
    return Value.Parse(schema, data)
  } 
}

export default SchemaHelper