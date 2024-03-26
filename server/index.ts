// app/[[...slugs]]/route.ts
import { Elysia as e, t } from 'elysia'

const app = new e()
    .get('/', () => 'hello Next')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export type Elysia = typeof app;
export default app;
