import React, { useState, useEffect } from 'react'

// library
import {
    Container,
    Row,
    Col,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    Button
} from 'reactstrap'
import Axios from 'axios'


// components
import Carousel from '../components/homepage/carousel'
// import Cards from '../components/homepage/cards'      I dont know why but Col cannot be in component so i moved cards.jsx here

export default () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'http://localhost:80/mypage/api/getcards.php',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setItems(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    
    return (
        <div>
            {/* component name is kinda self explanatory xD */}
            <Carousel />

            {/* cards */}
            <section style={{width:'70vw', margin:'auto'}}>
                <Container fluid style={{marginTop:'10px', marginBottom:'20px'}}>
                    <Row>
                    {
                        items.map(item => (
                            <Col lg='4' md='6' sm='12' xs='12' style={{marginTop:'10px'}}>
                                <Card>
                                    <div style={{height:'20vh', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                        <CardImg top style={{width:'160%'}} 
                                                src={item.card_img_link} alt="Card image cap" />
                                    </div>
                                    
                                    <CardBody>
                                        <CardTitle>{item.card_title}</CardTitle>
                                        <CardText>{item.card_text}</CardText>
                                        <Button>See more</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                    </Row>
                </Container>
            </section>

            {/* footer */}
            <footer style={{width:'100%', 
                            height:'40vh', 
                            backgroundColor:'grey', 
                            display:'flex', 
                            alignItems:'center', 
                            justifyContent:'center'}}>
                <div style={{color:'white'}}>
                    <p>&copy; All right reserved.</p>
                </div>
            </footer>
            


        </div>
    )
}