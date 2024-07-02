const getListStudents = () => {
  const data = [
    [1, 'Guillaume', 'San Francisco'],
    [2, 'James', 'Columbia'],
    [5, 'Serena', 'San Francisco']];

  return data.map((element) => ({
    id: element[0],
    firstName: element[1],
    location: element[2],
  }));
};

export default getListStudents;
