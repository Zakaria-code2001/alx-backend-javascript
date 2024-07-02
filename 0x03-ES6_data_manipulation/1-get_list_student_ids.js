const getListStudentIds = (arr) => {
  let newArr = [];
  if (arr instanceof Array) {
    newArr = arr.map((item) => item.id);
  }

  return newArr;
};

export default getListStudentIds;
