const request = require('supertest');
const app = require('../../server');

const { LEVEL } = require('../../app/utils/constants');
const PATH = '/api/skills';

describe('Skill API POST Test', () => {
  test('should create a new skill', () => {
    return request(app)
      .post(PATH)
      .send({
        name: 'Leonardo',
        level: LEVEL.JUNIOR,
      })
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.text).toEqual('Woooho! Your skill was added in the our galactic database.');
      });
  })

  test('create skill should fail when pass wrong value to param level', () => {
    return request(app)
      .post(PATH)
      .send({
        name: 'Leonardo',
        level: 'Wrong value',
      })
      .then((response) => {
        const [body] = response.body;

        expect(response.statusCode).toEqual(422);
        expect(body.msg)
          .toEqual(`Opsss! The param "level" must be ${LEVEL.JUNIOR}, ${LEVEL.SENIOR} or ${LEVEL.EXPERT}`);
      });
  })

  test('create skill should fail when will not pass name param body', () => {
    return request(app)
      .post(PATH)
      .send()
      .then((response) => {
        const [body] = response.body;

        expect(response.statusCode).toEqual(422);
        expect(body.msg).toEqual('Hey buddy, "name" is a required param.');
      });
  })
});

describe('Skill API GET Test', () => {
  test('get all skill should be successfully', () => {
    return request(app)
      .get(PATH)
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe('object');

        const [body] = response.body;

        expect(body.name).toEqual('Leonardo');
        expect(body.level).toEqual(LEVEL.JUNIOR);
      });
  })
});

describe('Skill API PUT Test', () => {
  test('put a skill should fail when do not pass level param in body', () => {
    return request(app)
      .put(`${PATH}/1`)
      .then((response) => {
        const [body] = response.body;
        expect(response.statusCode).toEqual(422);
        expect(body.msg)
          .toEqual('Hey buddy, "level" is a required param.');
        
      });
  })

  test('put a skill should fail when do not pass correct uuid', () => {
    return request(app)
      .put(`${PATH}/1`)
      .send({
        level: LEVEL.EXPERT
      })
      .then((response) => {
        expect(response.statusCode).toEqual(404);
        expect(response.text)
          .toEqual('Sorry buddy, but your skill was not found in our side of the force.');
      });
  })
});