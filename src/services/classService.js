const classes = [
    {
        id: 1,
        name: '8-А',
        students: [
            {
                id: 1,
                firstName: 'jacob',
                lastName: 'thorn',
                email: 'jacob.thorn@gmail.com',
                role: 'student',
                classId: 1,
            }
        ]
    },
    {
        id: 2,
        name: '9-А',
        students: [
            {
                id: 2,
                firstName: 'mark',
                lastName: 'otto',
                email: 'mark.otto@gmail.com',
                role: 'student',
                classId: 2,
            },
        ]
    },
];

const create = (newClass) => {
    classes.push(newClass);
}

const disable = () => {

}

const getAll = () => {
    return classes;
}

const find = (id) => {

}

export const classService = {
    create,
    disable,
    getAll,
    find,
}