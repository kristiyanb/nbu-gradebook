import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { classService } from '../services/classService';

export const Classes = () => {
    const [classes, setClasses] = useState([]);
    const styles = {

    }

    useEffect(() => {
        (async () => {
            const data = await classService.getAll();
            setClasses(data);
        })()
    }, [])

    return (
        <div className="container">
            <h1 className="mt-5 mb-5">Класове</h1>
            <Accordion className='w-25 m-auto'>                
                {
                    classes.map((x, i) => {
                        return (
                            <Accordion.Item eventKey={i}>
                                <Accordion.Header>{x.name}</Accordion.Header>
                                <Accordion.Body>
                                    {
                                        x.students.map(y=>{
                                            return (
                                                <div>
                                                    {y.firstName} {y.lastName}
                                                </div>
                                            )
                                        })
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}