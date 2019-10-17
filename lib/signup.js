class Signup {
  constructor(registrationService) {
    this.registrationService = registrationService;
  }

  createUser(details) {
    this.registrationService.registerUser(details.email);
  }
}

module.exports = Signup;
