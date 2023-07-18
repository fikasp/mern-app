import { expect } from 'chai'
import request from 'supertest'
import app from '../server.js'

describe('GET /', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/')
    expect(response.status).to.equal(200)
  })
})
