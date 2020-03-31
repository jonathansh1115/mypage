import React, { useState } from 'react'

// libraries
import { FormGroup,
         Label, 
         Input,
         FormFeedback } from 'reactstrap'

export default (props) => {

    const {dpassword, setDpassword} = props

    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    
    const getPasswordInputProp1 = () => {
        if (password.length === 0) {
            return { valid:0 }
        } else if (password.length <= 6 && password.length > 0) {
            return { invalid:true }
        } else {
            return { valid:true }
        }
    }
        
    
    const getFormFeedback1 = () => {

        if (password.length <= 6 && password.length > 0) {
            return <FormFeedback invalid>Password must be 7 characters or more.</FormFeedback>
        } else {
            return <FormFeedback valid>All good</FormFeedback>
        }
        
    }
    
    const getPasswordInputProp2 = () => {
        if (cpassword.length === 0) {
            return { invalid:0 }
        } else if (password !== cpassword) {
            return { invalid:true }
        } else {
            return { valid:true }
        }
    }
        
    
    const getFormFeedback2 = () => {

        if (password !== cpassword) {
            return <FormFeedback invalid>Password does not match!</FormFeedback>
        } else {
            setDpassword(cpassword)
            return <FormFeedback valid>All good!</FormFeedback>
        }
        
    }
    
    return (
        <>
            <FormGroup>
                <Label>Password</Label>
                <Input {...getPasswordInputProp1()} value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
                {getFormFeedback1()}
            </FormGroup>

            <FormGroup>
                <Label>Confirm Password</Label>
                <Input {...getPasswordInputProp2()} value={cpassword} onChange={e => setCpassword(e.target.value)} type="password" name="password" placeholder="Retype password" />
                {getFormFeedback2()}
            </FormGroup>
        </>
    )
}