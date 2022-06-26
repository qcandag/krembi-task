import { test } from '@japa/runner'

test('get a paginated list of users', async ({ client }) => {
  const response = await client.get('/users')

  console.log(response.body())
})
