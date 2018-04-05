const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

// describe('Client Routes', () => {

// });

describe('API Routes', () => {
  beforeEach((done) => {
    database.migrate.rollback()
      .then(() => {
        database.migrate.latest()
          .then(() => {
            return database.seed.run()
              .then(() => {
                done();
              })
          })
      })
  })

  describe('GET /api/v1/users', () => {
    it('should return all of the users', () => {
      return chai.request(server)
      .get('/api/v1/users')
      .then( response => {
        response.should.have.status(200)
        response.should.be.json;
        response.body.should.be.a('array');
        response.body[0].should.have.all.keys(['name', 'email', 'id', 'stack_id'])
        response.body[0].id.should.equal(1)
        response.body[0].name.should.equal('jon snow');
        response.body[0].email.should.equal('jon@knownothing.com')
        response.body[0].stack_id.should.equal(1);
      })
    })
  })

  describe('GET /api/v1/users/:id', () => {
    it('should return just one user', () => {
      return chai.request(server)
      .get('/api/v1/users/1')
      .then( response => {
        response.should.have.status(200);
        response.should.be.json;
        response.body[0].should.have.all.keys(['name', 'email', 'id', 'stack_id'])
        response.body[0].id.should.equal(1)
        response.body[0].name.should.equal('jon snow');
        response.body[0].email.should.equal('jon@knownothing.com')
        response.body[0].stack_id.should.equal(1);        
      })
    })
  })

  describe('GET /api/v1/words', () => {
    it('should return all the words', () => {
      return chai.request(server)
      .get('/api/v1/words')
      .then( response => {
        response.should.have.status(200);
        response.should.be.json;
        response.body[0].should.have.all.keys(['english', 'spanish', 'hint', 'id', 'stack_id']);
        response.body[0].english.should.equal('hi');
        response.body[0].spanish.should.equal('hola');
        response.body[0].hint.should.equal('oh-la');
        response.body[0].stack_id.should.equal(1);
      })
    })
  })

});