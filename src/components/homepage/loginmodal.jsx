import React, { useState } from 'react'

// libraries
import { Button, 
         Modal, 
         ModalHeader, 
         ModalBody, 
         ModalFooter, 
         Input, 
         Label, 
         Form, 
         FormGroup,
         Alert } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'


export default () => {

    let history = useHistory()
    
    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState()

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const submit = (e) => {

        Axios({
            method: 'POST',
            url: 'http://itsmejonathan.epizy.com/login.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username,
                password
            }
        })
        .then(response => {
            if (response.data.message === 'Login successful') {
                localStorage.setItem('auth_token', response.data.auth_token)
                localStorage.setItem('username', response.data.username)
                history.push('/admin_control_panel')
            } else {
                setError(<Alert color='danger'>{response.data.message}</Alert>)
            }
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
    <div>
        <Button color="danger" onClick={toggle}>Login</Button>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} close={closeBtn}>Login</ModalHeader>

            {
                error
            }
            
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input value={username} onChange={e => setUsername(e.target.value)} type="text" name="username" placeholder="Username" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input value={password} 
                               onKeyDown={e => {
                                   if (e.keyCode === 13) {
                                       submit()
                                   }
                               }}
                               onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
                    </FormGroup>
                    
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" />{' '}
                        Remember me
                        </Label>
                    </FormGroup>

                    <Button onClick={submit} style={{marginTop:'10px'}}>Login</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Link to='signup'>
                    <Button color="primary" onClick={toggle}>Not a member yet? Join now!</Button>{' '}
                </Link>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
    );
}