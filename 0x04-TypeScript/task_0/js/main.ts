interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName:'Zack',
    lastName: 'Moha',
    age: 23,
    location: 'Italy',
}
const student2: Student = {
    firstName:'Kaumba',
    lastName: 'Kinchiyama',
    age: 31,
    location: 'Zambia',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

document.body.appendChild(table);


studentsList.forEach(student => {
    const tr = table.insertRow();
    const firstNameCell = tr.insertCell();
    firstNameCell.innerText = student.firstName;

    const locationCell = tr.insertCell();
    locationCell.innerText = student.location;
    

  });