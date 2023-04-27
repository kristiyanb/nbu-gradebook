const users = [
    {
        id: 1,
        firstName: 'Jacob',
        lastName: 'Thorn',
        email: 'jacob.thorn@gmail.com',
        role: 'student',
        classId: 1,
    },
    {
        id: 2,
        firstName: 'Mark',
        lastName: 'Otto',
        email: 'mark.otto@gmail.com',
        role: 'student',
        classId: 2,
    },
    {
        id: 3,
        firstName: 'Larry',
        lastName: 'David',
        email: 'larry.david@gmail.com',
        role: 'teacher',
        subjectId: 1,
    },
    {
        id: 4,
        firstName: 'Lewis',
        lastName: 'Hamilton',
        email: 'lewis.hamilton@gmail.com',
        role: 'teacher',
        subjectId: 2,
    },
    {
        id: 5,
        firstName: 'Ivan',
        lastName: 'Ivanov',
        email: 'ivan.ivanov@gmail.com',
        role: 'parent',
        studentId: 1,
    },
    {
        id: 6,
        firstName: 'Terry',
        lastName: 'Crews',
        email: 'terry.crews@gmail.com',
        role: 'parent',
        studentId: 2,
    }
];

const create = (user) => {
    users.push(user);
}

const disable = () => {

}

const getAll = (role) => {
    return users.filter(x => x.role === role)
}

const find = (id) => {

}

export const userService = {
    create,
    disable,
    getAll,
    find,
}