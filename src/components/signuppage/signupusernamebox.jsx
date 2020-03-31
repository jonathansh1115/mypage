import React, { useState } from 'react'

// libraries
import { FormGroup,
         Label,
         FormFeedback,
         Input } from 'reactstrap'
import Axios from 'axios'

       
export default (props) => {

    const { username, setUsername } = props

    const [delay, setDelay] = useState(null)
    const [usernameValid, setUsernameValid] = useState(false)

    const checkUsername = (newUsername) => {
        Axios({
            method: 'POST',
            url: 'http://localhost:80/mypage/api/validation4username.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username2Bchecked: newUsername
            }
        })
        .then(response => {
            if (response.data.message === 'Username available') {
                setUsernameValid(true)
            } else {
                setUsernameValid(false)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    const handleUsernameInput = (e) => {

        // clears queue so that the old keystrokes don't trigger axios call
        clearTimeout(delay)

        const newUsername = e.target.value
        setUsername(newUsername)
        
        // put each new keystroke into the queue
        const newDelay = setTimeout(() => {
            checkUsername(newUsername)
        }, 500)

        setDelay(newDelay)
        
    }

    const getUsernameInputProp = () => {
        if (username.length === 0) {
            return null
        }

        if (username.length <= 6 && username.length > 0) {
            return { invalid: true };
        }
    
        if (usernameValid) {
            return { valid: true };
        } else {
            return { invalid: true };
        }
    }
    
    const getFormFeedback = () => {
        if (!username.length) {
            return null;
        }
    
        if (username.length <= 6) {
            return <FormFeedback invalid>Must be at least 6 characters</FormFeedback>;
        }
    
        if (usernameValid) {
            return <FormFeedback valid>Sweet! That username is available</FormFeedback>;
        } else {
            return <FormFeedback invalid>Sorry! Username is taken</FormFeedback>;
        }
    }
    
    return (
        <FormGroup>
            <Label>Username</Label>
            <Input {...getUsernameInputProp()} value={username} onChange={handleUsernameInput} type="text" name="email" placeholder="Username" />
            {getFormFeedback()}
        </FormGroup>
    )
}