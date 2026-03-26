import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import postRoutes from './routes/post.routes'  


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
});

app.route('/posts', postRoutes);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})