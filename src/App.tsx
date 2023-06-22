import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react';
import {faker} from '@faker-js/faker';
import {ListGroup, Button, Modal, Container, Form, Nav} from 'react-bootstrap';
import User from './model/User';

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const generateUsers = () => {
            const users: User[] = [];
            for (let i = 0; i < 100; i++) {
                users.push({
                    id: i.toString(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    selected: false
                });
            }
            return users;
        };
        setUsers(generateUsers());
    }, []);

    const handleDelete = () => {
        setUsers(users.filter((user) => !user.selected));
    };

    const handleCheck = (id: string) => {
        setUsers(users.map((user) => user.id === id ? {...user, selected: !user.selected} : user));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (selectedUser) {
            setSelectedUser({...selectedUser, [e.target.name]: e.target.value});
        }
    };

    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleEdit = () => {
        const user = getSelectedUsers()[0];
        setSelectedUser(user);
    };

    const getSelectedUsers = () => {
        return users.filter((user) => user.selected);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedUser) {
            setUsers(users.map((user) => user.id === selectedUser.id ? selectedUser : user));
            setSelectedUser(null);
        }
    };

    const handleClose = () => {
        setSelectedUser(null);
    };


    return (
        <>
            <Nav className="navbar navbar-expand-lg navbar-secondary bg-secondary mb-3">
                <Nav.Item>
                    Userverwaltung
                </Nav.Item>
            </Nav>

            <Container>
                <Button variant="outline-danger" onClick={handleDelete} disabled={!users.some((user) => user.selected)}>
                    Löschen
                </Button>


                <Button variant="outline-success" className={"ms-3"} onClick={handleEdit}
                        disabled={getSelectedUsers().length !== 1}>
                    Bearbeiten
                </Button>


                <ListGroup className={"mt-3 mb-3"}>
                    {users.map((user) => (
                        <ListGroup.Item key={user.id} className={"d-flex gap-3"}>
                            <Form.Check type={"checkbox"} checked={user.selected}
                                        onChange={() => handleCheck(user.id)}/>
                            {user.id}: {user.firstName} {user.lastName}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                {selectedUser && (
                    <Modal show={true} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>User bearbeiten</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>
                                <Form.Group controlId="firstName">
                                    <Form.Label>Vorname</Form.Label>
                                    <Form.Control type="text" name="firstName" value={selectedUser.firstName}
                                                  onChange={handleInputChange}/>
                                </Form.Group>
                                <Form.Group controlId="lastName" className={"mt-3"}>
                                    <Form.Label>Nachname</Form.Label>
                                    <Form.Control type="text" name="lastName" value={selectedUser.lastName}
                                                  onChange={handleInputChange}/>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" className={"me-auto"} onClick={handleClose}>
                                    Abbrechen
                                </Button>
                                <Button variant="primary" type="submit">
                                    Speichern
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                )}
            </Container>
        </>
    );
};

export default App;
