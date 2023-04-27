import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AppContext } from '../context/AppContext';
import history from '../shared/history';

export const Menu = () => {
    const { user, logout } = useContext(AppContext);

    return (
        <div className="mt-3 d-flex justify-content-between">
            <Nav
                activeKey="/"
                onSelect={(selectedKey) => history.push(selectedKey === '/logout' ? '/' : selectedKey)}
                className="justify-content-between w-25"
            >

                <Nav.Item>
                    <Nav.Link eventKey="/">Електронен дневник</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav
                activeKey="/"
                onSelect={(selectedKey) => history.push(selectedKey === '/logout' ? '/' : selectedKey)}
                className="justify-content-end w-75"
            >
                {user?.username
                    ? <>
                        <Nav.Item>
                            <Nav.Link eventKey="/teachers">Преподаватели</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/students">Ученици</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/parents">Родители</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/classes">Класове</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/grades">Оценки</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/absence">Отсъствия</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/programme">Програма</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title={user.username} id="user-dropdown">
                            <NavDropdown.Item eventKey="/profile">Профил</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/settings">Настройки</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="/logout" onClick={() => logout()}>Изход</NavDropdown.Item>
                        </NavDropdown>
                    </>
                    : <Nav.Item>
                        <Nav.Link eventKey="login">Вход</Nav.Link>
                    </Nav.Item>
                }
            </Nav>
            <hr />
        </div>
    )
}