class User {
    constructor(id, name, lastname, username,password) {
      this.id = id;
      this.name = name;
      this.lastname=lastname
      this.username=username
      this.password=password
      this.view=0
      this.createdAt = new Date();
    }
  }
  
  module.exports = User;
  