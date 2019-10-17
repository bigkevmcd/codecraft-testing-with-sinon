const {Signup, RegistrationService} = require('../lib');
const sinon = require('sinon');

describe('Signup class', () => {
  describe('#createUser', () => {
    it('delegates to the registration service', () => {
      let userDetails = {name: "John", email: "test@example.com"};
      let service = new RegistrationService();
      var mock = sinon.mock(service);
      let signup = new Signup(service);
      mock.expects('registerUser').once().withArgs("test@example.com");

      signup.createUser(userDetails);

      mock.verify();
      mock.restore();
    });
  });
});
