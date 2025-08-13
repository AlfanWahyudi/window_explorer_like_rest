import { describe, expect } from "bun:test"
import Elysia from "elysia"

describe('Elysia', () => {
    ('returns a response', async () => {
        const app = new Elysia().get('/', () => 'hi')

        const response = await app
            .handle(new Request('http://localhost/'))
            .then((res) => res.text())

        expect(response).toBe('hi')
    })
})