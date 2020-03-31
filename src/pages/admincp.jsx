import React, { useState, useEffect } from 'react'
import './styles/admincp.css'

// libraries
import { Container,
         Row,
         Col,
         Button } from 'reactstrap'
import Axios from 'axios'
import { Router, Route } from 'react-router-dom'

// components
import Sidebar from '../components/adminpage/sidebar.jsx'
import Editcarouseltab from '../components/adminpage/carouseltab/editcarouseltab.jsx'
import Editcardstab from '../components/adminpage/cardstab/editcardstab.jsx'
import Userstab from '../components/adminpage/userstab/userstab.jsx'
import Bread from '../components/adminpage/bread.jsx'

export default () => {

    const items = [
        { name: 'Carousel', label: 'Carousel' },
        { name: 'Cards', label: 'Cards', },
        { name: 'Users', label: 'Users', },
    ]
    
    return (

        <Container fluid>

            {
            localStorage.getItem('auth_token')!=='27bfae9579970f9a88e12ba24fb00a4516459449'?
            <h1>You are not logged in. Please log in first.</h1>
            :
            <Row>
                <Col xl='3' md='4' xs='12' sm='12'>
                    <div className='sidebarbox'>
                        <Sidebar items={items} />
                    </div>
                </Col>

                <Col xl='9' md='8' xs='12' sm='12' className='tabbox'>
                    <Route path='/admin_control_panel/:tab'>
                        <div style={{marginTop:'10px'}}>
                            <Bread />
                        </div>
                    </Route>
                    
                    <Route path='/admin_control_panel/carousel' component={Editcarouseltab} />
                    <Route path='/admin_control_panel/cards' component={Editcardstab} />
                    <Route path='/admin_control_panel/users' component={Userstab} />
                </Col>
            </Row>
            }
        </Container>
    )
}