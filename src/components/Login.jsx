import { useCallback, useContext, useState } from 'react';
import history from '../shared/history';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { AppContext } from '../context/AppContext';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AppContext);

    const styles = {
        marginTop: '25vh',
        marginLeft: '40%',
    }

    const onLoginClick = useCallback(async () => {
        login(username, password);
        history.push('/');
    }, [login, username, password])

    return (
        <div style={styles} className='container h-row align-items-center'>

            <Form>
                <div className="col-4">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Имейл"
                        className="mb-3"
                    >
                        <Form.Control type="email"
                            placeholder="Имейл"
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)} />
                    </FloatingLabel>
                </div>

                <div className="col-4">
                    <FloatingLabel controlId="floatingPassword" label="Парола">
                        <Form.Control type="password"
                            placeholder="Парола"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)} />
                    </FloatingLabel>
                </div>

                <div className='col-4 mt-3'>
                    <Button
                        style={{ width: '100%', flex: '1', marginRight: '10px', height: '3.3rem' }}
                        onClick={onLoginClick}
                    >
                        Вход
                    </Button>
                </div>
            </Form>

        </div>
    )
}