import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({
  origin: '*'
}))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.post('/api/echo', async (c) => {
  const body = await c.req.json()
  return c.json({ message: body.message })
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
