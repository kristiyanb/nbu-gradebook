const subjects = [
    {
        id: 1,
        name: 'Математика'
    },
    {
        id: 2,
        name: 'Литература'
    },
    {
        id: 3,
        name: 'Физика'
    },
];

const create = (subject) => {
    subjects.push(subject);
}

const disable = () => {

}

const getAll = () => {
    return subjects;
}

const find = (id) => {

}

export const subjectService = {
    create,
    disable,
    getAll,
    find,
}