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

// components


export default () => {

    const [images, setImages] = useState([])

    const [image2upload, setImage2upload] = useState()
    const [alt_text, setAlt_text] = useState('')
    const [header, setHeader] = useState('')
    const [caption, setCaption] = useState('')

    const [display, setDisplay] = useState()

    const imageData = new FormData()
    imageData.append("image", image2upload)
    imageData.append('alt_text', alt_text)
    imageData.append('header', header)
    imageData.append('caption', caption)
    
    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'http://localhost:80/mypage/api/getcarouselimg.php',
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
    
    //axios data:imageData
    const upload = (e) => {
        e.preventDefault()
        
        Axios({
            method: 'POST',
            url: 'http://localhost:80/mypage/api/uploadcarouselimg.php',
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
                    url: 'http://localhost:80/mypage/api/getcarouselimg.php',
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

    return (
        <Container fluid>
            <Row>
                {
                    images.map(item => (
                        <Col xl='3' md='3' xs='12' sm='12' className='carouselimgbox'>
                            <img src={item.img_link} alt={item.alt_text} style={{width:'100px'}} />
                            <p>header: {item.header}</p>
                            <p>caption: {item.caption}</p>
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
                                    <Label>Alt Text</Label>
                                    <Input type="text" value={alt_text} onChange={e => setAlt_text(e.target.value)} placeholder="Alt text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Header</Label>
                                    <Input type="text" value={header} onChange={e => setHeader(e.target.value)} placeholder="Header" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Caption</Label>
                                    <Input type="text" value={caption} onChange={e => setCaption(e.target.value)} placeholder="Caption" />
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