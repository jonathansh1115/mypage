import React, { useState, useEffect } from 'react'

// library
import Axios from 'axios'
import { Container,
         Row,
         Col,
         Button,
         Form,
         FormGroup,
         Label,
         Input } from 'reactstrap'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'

// components


export default () => {

    const [images, setImages] = useState([])

    const [image2upload, setImage2upload] = useState()
    const [cardtitle, setCardtitle] = useState('')
    const [cardtext, setCardtext] = useState('')

    const [display, setDisplay] = useState()
    
    const imageData = new FormData()
    imageData.append("image", image2upload)
    imageData.append('cardtitle', cardtitle)
    imageData.append('cardtext', cardtext)
    
    //axios data:imageData
    const upload = (e) => {
        e.preventDefault()
        
        Axios({
            method: 'POST',
            url: 'http://itsmejonathan.epizy.com/validation4username.php',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: imageData
        })
        .then(response => {
            if (response.data.status === 'success') {
                
                toast.success('Image upload successful', {
                    position: "top-center",
                    autoClose: 2220,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                })

                Axios({
                    method: 'GET',
                    url: 'http://itsmejonathan.epizy.com/getcards.php',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    setImages(response.data)
                })
                .catch(error => {
                    console.log(error)
                })

            } else {

                toast.error(response.data.message, {
                    position: "top-center",
                    autoClose: 2220,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
    }


    // retrieve images 
    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'http://itsmejonathan.epizy.com/getcards.php',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setImages(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container fluid>
            <Row>
                {
                    images.map(item => (
                        <Col xl='3' md='3' xs='12' sm='12' className='carouselimgbox'>
                            <img src={item.card_img_link} alt='' style={{width:'100px'}} />
                            <p>CardTitle: {item.card_title}</p>
                            <p>CardText: {item.card_text}</p>
                            <Button className='editbutton'>Edit</Button>
                        </Col>
                    ))
                }
            </Row>

            <Row>

                <Container fluid>
                    <Row>
                        <Col lg='5' md='6' sm='12' xs='12'>
                            <Form>
                                <FormGroup>
                                    <Label>Image to upload</Label>
                                    <Input type="file"
                                    onChange={e => {
                                        setDisplay(URL.createObjectURL(e.target.files[0]))
                                        setImage2upload(e.target.files[0])
                                    }}
                                    />
                                    <img 
                                        src={display} 
                                        alt='' 
                                        style={{
                                            width:'100%',
                                            marginTop:'10px'
                                        }}                                        
                                    />
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col lg='7' md='6' sm='12' xs='12'>
                            <Form>
                                <FormGroup>
                                    <Label>Card Title</Label>
                                    <Input type="text" value={cardtitle} onChange={e => setCardtitle(e.target.value)} placeholder="Card Title" />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Card Text</Label>
                                    <Input type="text" value={cardtext} onChange={e => setCardtext(e.target.value)} placeholder="Card Text" />
                                </FormGroup>

                                <Button onClick={upload}>Upload</Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>

            </Row>
            
        </Container>
    )
}