import { useCallback, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { userService } from "../services/userService";
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { roles } from "../shared/roles";
import { classService } from "../services/classService";
import { subjectService } from "../services/subjectService";

export const Users = ({
    title,
    role,
    roleDisplayName,
}) => {
    const [users, setUsers] = useState([]);
    const [classOptions, setClassOptions] = useState([]);
    const [subjectOptions, setSubjectOptions] = useState([]);
    const [studentOptions, setStudentOptions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [formModel, setFormModel] = useState();

    const onAddUser = useCallback(async () => {
        await userService.create({ ...formModel, role });

        loadUsers();
        setFormModel(undefined);
        setShowForm(false);
    }, [formModel]);

    const onRowClick = (user) => {
        setFormModel(user);
        setShowForm(true);
    }

    const onFieldChange = useCallback((fieldName, fieldValue) => {
        const updateModel = { ...formModel };
        updateModel[fieldName] = fieldValue;

        setFormModel(updateModel);
    }, [formModel]);

    const loadUsers = async () => {
        const response = await userService.getAll(role);
        setUsers(response);
    }

    const loadDropdownOptions = async () => {
        if (role === roles.parent) {
            const response = await userService.getAll(roles.student);

            setStudentOptions(response.map(student => {
                return {
                    id: student.id,
                    name: `${student.firstName} ${student.lastName}`
                }
            }));
        }

        if (role === roles.student) {
            const response = await classService.getAll();
            setClassOptions(response);
        }

        if (role === roles.teacher) {
            const response = await subjectService.getAll();
            setSubjectOptions(response);
        }
    }

    useEffect(() => {
        loadUsers();
        loadDropdownOptions();
    }, [])

    return (
        <div className="container">
            <h1 className="mt-5 mb-5">{title}</h1>
            <div className="d-flex justify-content-between mb-2">
                <Form.Control
                    className='w-25'
                    placeholder='Търсене'
                    value={searchQuery}
                    onChange={(ev) => setSearchQuery(ev.target.value)}
                />
                <Button className='w-25' onClick={() => setShowForm(true)}>Добави</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Име</th>
                        <th>Фамилия</th>
                        <th>Имейл</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        .filter(user => JSON.stringify(user).toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((user, index) => {
                            return (
                                <tr onClick={() => onRowClick(user)}>
                                    <td>{index + 1}</td>
                                    <td>{user?.firstName}</td>
                                    <td>{user?.lastName}</td>
                                    <td>{user?.email}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
            <Modal centered show={showForm} onHide={() => setShowForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавяне на {roleDisplayName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Имейл"
                            className="mb-3"
                        >
                            <Form.Control type="email"
                                placeholder="Имейл"
                                value={formModel?.email}
                                onChange={(ev) => onFieldChange('email', ev.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Име"
                            className="mb-3"
                        >
                            <Form.Control type="text"
                                placeholder="Име"
                                value={formModel?.firstName}
                                onChange={(ev) => onFieldChange('firstName', ev.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Фамилия"
                            className="mb-3"
                        >
                            <Form.Control type="text"
                                placeholder="Фамилия"
                                value={formModel?.lastName}
                                onChange={(ev) => onFieldChange('lastName', ev.target.value)} />
                        </FloatingLabel>

                        {role === roles.student &&
                            <Form.Select
                                aria-label="classes"
                                value={formModel?.classId}
                                onChange={(ev) => onFieldChange('classId', ev.target.value)}
                            >
                                <option selected disabled>Клас</option>
                                {classOptions.map(c => {
                                    return (<option value={c.id}>{c.name}</option>)
                                })}
                            </Form.Select>
                        }

                        {role === roles.teacher &&
                            <Form.Select
                                aria-label="teachers"
                                value={formModel?.subjectId}
                                placeholder='Предмет'
                                onChange={(ev) => onFieldChange('subjectId', ev.target.value)}
                            >
                                <option selected disabled>Предмет</option>
                                {subjectOptions.map(c => {
                                    return (<option value={c.id}>{c.name}</option>)
                                })}
                            </Form.Select>
                        }

                        {role === roles.parent &&
                            <Form.Select
                                aria-label="students"
                                value={formModel?.studentId}
                                onChange={(ev) => onFieldChange('studentId', ev.target.value)}
                            >
                                <option selected disabled>Ученик</option>
                                {studentOptions.map(c => {
                                    return (<option value={c.id}>{c.name}</option>)
                                })}
                            </Form.Select>
                        }

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary w-25" onClick={onAddUser}>Запази</Button>
                    <Button variant="secondary w-25" onClick={() => setShowForm(false)}>Отказ</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}