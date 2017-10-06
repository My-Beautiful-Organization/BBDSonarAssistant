export default class Behavior {
  constructor() {
    this.rules = [
      {
        pattern: 'what.*your name.*',
        answer: {
          msg: 'My name is Claudio Platypus the 3rd. May I ask about yours?'
        }
      },
      {
        pattern: 'what.*quality gate.*',
        answer: {
          msg: 'A quality gate is the best way to enforce a quality policy in your organization.',
          url: 'https://docs.sonarqube.org/display/SONAR/Quality+Gates'
        }
      },
      {
        pattern: 'what.*quality profile.*',
        answer: {
          msg: 'The Quality Profiles service is central to SonarQube, since it is where you define your requirements by defining sets of rules',
          url: 'https://docs.sonarqube.org/display/SONAR/Quality+Profiles'
        }
      },
      {
        pattern: 'what.*answer to life.*',
        answer: {
          msg: '42!',
          url: 'https://www.independent.co.uk/life-style/history/42-the-answer-to-life-the-universe-and-everything-2205734.html'
        }
      }
    ]
  }
}
