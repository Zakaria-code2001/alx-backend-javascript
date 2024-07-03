var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    var first_letter = firstName[0];
    return "".concat(first_letter, ". ").concat(lastName);
};
var student = new StudentClass('John', 'Doe');
var statement = "".concat(student.displayName(), " is ").concat(student.workOnHomework(), ".");
console.log(statement);
