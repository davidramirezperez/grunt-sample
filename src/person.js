var Person = function (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
};

Person.prototype.fullname = function() {
  return this.firstname + ' ' + this.lastname;
};