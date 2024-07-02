const getListStudents = () => {
    let data = [
        [1, 'Germany', 83623528],
        [2, 'Austria', 8975552],
        [3, 'Switzerland', 8616571]];

        return data.map(element => ({
            id: element[0],
            firstName: element[1],
            location: element[2]
        }));
}

export default getListStudents;