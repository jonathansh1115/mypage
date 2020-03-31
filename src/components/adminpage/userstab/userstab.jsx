import React, { useEffect, useState } from 'react'
import './userstab.css'

// libraries
import Axios from 'axios'
import { Table, Button } from 'reactstrap'

export default () => {

    const [user, setUser] = useState([])
    
    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'http://localhost:80/mypage/api/getusers.php',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setUser(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>User Level</th>
                <th>Time created</th>
                </tr>
            </thead>

            <tbody>

                {
                    user.map((item,index) => (
                        <tr className='userrow'>
                            <th scope="row">{index+1}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.user_level}</td>
                            <td>{item.time_created}</td>
                            
                            {/* <Button>Delete</Button> */}
                        </tr>
                    ))
                }
                
            </tbody>
        </Table>
    )
    
}