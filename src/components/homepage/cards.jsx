// import React, { useState, useEffect } from 'react';

// // library
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button, Col
// } from 'reactstrap';
// import Axios from 'axios'

// export default () => {

//     const [items, setItems] = useState([])

//     useEffect(() => {
//         Axios({
//             method: 'GET',
//             url: 'http://localhost:80/mypage/api/getcards.php',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             console.log('this is the cards')
//             console.log(response.data)
//             setItems(response.data)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }, [])
    
//   return (
//     <div>

//         {
//             items.map(item => (
//                 <Col lg='4' md='6' sm='12' xs='12' style={{marginTop:'10px'}}>
//                     <Card>
//                         <div style={{height:'20vh', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
//                             <CardImg top style={{width:'160%'}} 
//                                     src={item.card_img_link} alt="Card image cap" />
//                         </div>
                        
//                         <CardBody>
//                             <CardTitle>{item.card_title}</CardTitle>
//                             <CardText>{item.card_text}</CardText>
//                             <Button>See more</Button>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             ))
//         }
        
        
//     </div>
//   );
// };


// I dont know why but Col cannot be in component so i moved these shits to homepage.jsx