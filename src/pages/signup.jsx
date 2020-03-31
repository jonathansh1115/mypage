import React, { useState } from 'react'
import './styles/signup.css'

// libraries
import { Button, 
         Form, 
         Alert} from 'reactstrap';
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

// components
import SignupUsernameBox from '../components/signuppage/signupusernamebox.jsx'
import SignupEmailBox from '../components/signuppage/signupemailbox.jsx'
import SignupPasswordBox from '../components/signuppage/signuppasswordbox.jsx'


export default () => {
    
    let history = useHistory()
    
    const [username, setUsername] = useState('')
    
    const [email, setEmail] = useState('')

    const [dpassword, setDpassword] = useState('')

    const [ok, setOk] = useState(false)
    const [error, setError] = useState([])
    const [fetch, setFetch] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        setOk(true)
        
        check()

        if (fetch === true) {
            Axios({
                method: 'POST',
                url: 'http://localhost:80/mypage/api/signup.php',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    username,
                    email,
                    password: dpassword
                }
            })
            .then(response => {
                if (response.data.message === 'Signup successful') {
                    localStorage.setItem('auth_token', response.data.auth_token)
                    localStorage.setItem('username', response.data.username)
                    
                    history.push('/home')
                } else {
                    console.error(response.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
        } // end of if fetch statement
    }

    const check = () => {
        if (ok === true) {
            let newError = []
            if (username === '') {
                newError.push('Username cannot be empty')
            } 
            if (email === '') {
                newError.push('Email cannot be empty')
            } 
            if (dpassword === '') {
                newError.push('Password cannot be empty')
            } 
            if (username!=='' && email!=='' && dpassword!=='') {
                setFetch(true)
            }
            setError(newError)
        }
    }
    
    
    return (
        <div className='body'>
            <Form>

                {
                    error.map(item => (
                        <Alert color='danger'>{item}</Alert>
                    ))
                }
                
                <SignupUsernameBox username={username} setUsername={setUsername} />

                <SignupEmailBox email={email} setEmail={setEmail} />

                <SignupPasswordBox password={dpassword} setDpassword={setDpassword} />

                <Button onClick={submit} style={{marginTop:'10px'}}>Signup</Button>
            </Form>

            <div className='footer'>
                <p>** Already have an account? Click the Login Button at the top right corner.</p>
            </div>
            
        </div>
    )
}