import { expect, server, BASE_URL } from './setup';

describe('Users', () => {
  it('gets users from database', (done) => {
    server
      .get(`${BASE_URL}/users`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceof(Array);
        res.body.users.forEach((user) => {
          expect(user).to.have.property('first_name');
          expect(user).to.have.property('last_name');
          expect(user).to.have.property('age');
          expect(user).to.have.property('birthdate');
        });
        done();
      });
  });

  it('posts users', (done) => {
    const data = {
      first_name: 'Cher',
      last_name: 'Bear',
      age: 25,
      birthdate: '1987-03-23',
    };
    server
      .post(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.users.forEach((user) => {
          expect(user).to.have.property('id');
          expect(user).to.have.property('first_name', data.first_name);
          expect(user).to.have.property('last_name', data.last_name);
          expect(user).to.have.property('age', data.age);
          expect(user).to.have.property('birthdate', data.birthdate);
        });
        done();
      });
  });
});
