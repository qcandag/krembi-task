import { test } from '@japa/runner'

test.group('Gate1', () => {
  test('GET GATE1', async ({ client }) => {
    const response = await client.get('/kapi1')
    response.sessionJar.session.alert === "Gate 1 is full. Go for Gate 2"
    //console.log(response.sessionJar.session.alert)
  })
})
