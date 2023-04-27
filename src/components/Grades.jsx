import { useContext, useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import Accordion from 'react-bootstrap/Accordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import { AppContext } from "../context/AppContext"
import { gradeService } from "../services/gradeService";
import { roles } from "../shared/roles";

export const Grades = () => {
    const [gradeData, setGradeData] = useState([]);
    const { user } = useContext(AppContext);

    const styles = {

    }
    
    useEffect(() => {
        (async () => {
            if (user?.role === roles.student) {
                const data = await gradeService.getStudentGrades(user?.id);
                setGradeData(data);

                return;
            }

            if (user?.role === roles.teacher) {
                const data = await gradeService.getTeacherGrades(user?.id);
                setGradeData(data);

                return;
            }

            if (user?.role === roles.parent) {
                const data = await gradeService.getParentGrades(user?.id);
                setGradeData(data);

                return;
            }
        })()
    }, [])

    return (
        <div className="container">
            <h1 className="mt-5 mb-5">Оценки</h1>
            {
                user?.role === roles.student && gradeData.length
                    ? <Accordion className='w-25 m-auto'>
                        {
                            gradeData.map((x, i) => {
                                return (
                                    <Accordion.Item eventKey={i}>
                                        <Accordion.Header>{x.subject}</Accordion.Header>
                                        <Accordion.Body>
                                            {x.grades.join(', ')}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                    : <></>
            }
            {
                user?.role === roles.teacher && gradeData.length
                    ? <Tabs className="mb-3">
                        {gradeData.map((x, i) => {
                            return (
                                <Tab key={'subject' + i} eventKey={x.name} title={x.name}>
                                    <Tabs className="mb-3">
                                        {x.data.map((y, index) => {
                                            return (
                                                <Tab key={'class' + index} eventKey={y.class} title={y.class}>
                                                    <Table striped bordered hover>
                                                        <tbody>
                                                            {y.data.map((z, studentIndex) => {
                                                                return (
                                                                    <tr key={'student' + studentIndex}>
                                                                        <td>{z.student}</td>
                                                                        <td>{z.grades.join(', ')}</td>
                                                                        <td styles={{ width: '2%' }}><i className="pi pi-pencil"></i></td>
                                                                    </tr>
                                                                )
                                                            })
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </Tab>
                                            )
                                        })}
                                    </Tabs>
                                </Tab>
                            )
                        })}
                    </Tabs>
                    : <></>
            }
            {
                user?.role === roles.parent && gradeData.length
                    ? <div className="d-flex justify-content-between">
                        {gradeData.map(x => {
                            return (
                                <div className="w-50 m-5">
                                    <h4 className="mt-5 mb-5">{x.name}</h4>
                                    <Accordion className='m-auto'>
                                        {
                                            x.data.map((x, i) => {
                                                return (
                                                    <Accordion.Item eventKey={i}>
                                                        <Accordion.Header>{x.subject}</Accordion.Header>
                                                        <Accordion.Body>
                                                            {x.grades.join(', ')}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                )
                                            })
                                        }
                                    </Accordion>
                                </div>
                            )
                        })}
                    </div>
                    : <></>
            }
        </div>
    )
}