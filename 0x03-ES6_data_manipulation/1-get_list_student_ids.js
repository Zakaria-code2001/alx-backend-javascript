const getListStudentIds = (students) => {
  let studentList = [];
  if (!(students instanceof Array)) {
    return studentList;
  }
  studentList = students.map((student) => student.id);
  return studentList;
};
export default getListStudentIds;
