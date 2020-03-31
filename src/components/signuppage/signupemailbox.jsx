import React, { useState } from 'react'

// libraries
import { FormGroup,
         Label,
         FormFeedback,
         Input } from 'reactstrap'
import Axios from 'axios'

       
export default (props) => {

    const { email, setEmail } = props

    const [delay, setDelay] = useState(null)
    const [emailValid, setEmailValid] = useState(false)

    const checkUsername = (newEmail) => {
        Axios({
            method: 'POST',
            url: 'http://localhost:80/mypage/api/validation4email.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email2Bchecked: newEmail
            }
        })
        .then(response => {
            if (response.data.message === 'Email available') {
                setEmailValid(true)
            } else {
                setEmailValid(false)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    const handleEmailInput = (e) => {

        // clears queue so that the old keystrokes don't trigger axios call
        clearTimeout(delay)

        const newEmail = e.target.value
        setEmail(newEmail)
        
        // put each new keystroke into the queue
        const newDelay = setTimeout(() => {
            checkUsername(newEmail)
        }, 500)

        setDelay(newDelay)
        
    }

    const getEmailInputProp = () => {
        if (email.length === 0) {
            return null
        }
    
        if (emailValid) {
            return { valid: true };
        } else {
            return { invalid: true };
        }
    }
    
    const getFormFeedback = () => {
        if (!email.length) {
            return null;
        }
    
        if (emailValid) {
            return <FormFeedback valid>Email available</FormFeedback>;
        } else {
            return <FormFeedback invalid>Email used, consider logging in?</FormFeedback>;
        }
    }
    
    return (
        <FormGroup>
            <Label>Email</Label>
            <Input {...getEmailInputProp()} value={email} onChange={handleEmailInput} type="text" name="email" placeholder="Username" />
            {getFormFeedback()}
        </FormGroup>
    )
}