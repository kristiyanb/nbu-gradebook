const grades = [
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

const create = (grade) => {
    grades.push(grade);
}

const disable = () => {

}

const getTeacherGrades = (id) => {
    return [
        {
            name: 'Математика',
            data: [
                {
                    class: '8-A',
                    data: [
                        {
                            id: 1,
                            student: 'Jacob Thorn',
                            grades: [5, 5, 6, 6]
                        },
                        {
                            id: 2,
                            student: 'Mark Otto',
                            grades: [3, 4, 5, 6]
                        },
                    ]
                },
                {
                    class: '9-A',
                    data: [
                        {
                            id: 1,
                            student: 'Jacob Thorn',
                            grades: [5, 5, 6, 6]
                        },
                        {
                            id: 2,
                            student: 'Mark Otto',
                            grades: [3, 4, 5, 6]
                        },
                    ]
                }
            ]
        },
        {
            name: 'Физика',
            data: [
                {
                    class: '8-A',
                    data: [
                        {
                            id: 1,
                            student: 'Jacob Thorn',
                            grades: [5, 5, 6, 6]
                        },
                        {
                            id: 2,
                            student: 'Mark Otto',
                            grades: [3, 4, 5, 6]
                        },
                    ]
                },
                {
                    class: '9-A',
                    data: [
                        {
                            id: 1,
                            student: 'Jacob Thorn',
                            grades: [5, 5, 6, 6]
                        },
                        {
                            id: 2,
                            student: 'Mark Otto',
                            grades: [3, 4, 5, 6]
                        },
                    ]
                }
            ]

        }
    ];
}

const getStudentGrades = (id) => {
    return [
        {
            id: 1,
            subject: 'Математика',
            grades: [5, 5, 6, 6]
        },
        {
            id: 2,
            subject: 'Литература',
            grades: [3, 4, 5, 6]
        },
        {
            id: 3,
            subject: 'Физика',
            grades: [4, 4, 5, 5]
        },
    ];
}

const getParentGrades = () => {
    return [
        {
            name: 'Jacob Thorn',
            data: [
                {
                    id: 1,
                    subject: 'Математика',
                    grades: [5, 5, 6, 6]
                },
                {
                    id: 2,
                    subject: 'Литература',
                    grades: [3, 4, 5, 6]
                },
                {
                    id: 3,
                    subject: 'Физика',
                    grades: [4, 4, 5, 5]
                },
            ]
        },
        {
            name: 'Mark Otto',
            data: [
                {
                    id: 1,
                    subject: 'Математика',
                    grades: [5, 5, 6, 6]
                },
                {
                    id: 2,
                    subject: 'Литература',
                    grades: [3, 4, 5, 6]
                },
                {
                    id: 3,
                    subject: 'Физика',
                    grades: [4, 4, 5, 5]
                },
            ]
        }
    ];
}

const find = (id) => {

}

export const gradeService = {
    create,
    disable,
    getTeacherGrades,
    getStudentGrades,
    getParentGrades,
    find,
}