import React, { useState, useEffect } from 'react';

// libraries
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { useLocation } from 'react-router-dom'

const Example = () => {
    
    let location = useLocation()
    
    const [breads, setBreads] = useState([])
    
    
    useEffect(() => {
        let splittedURL = location.pathname.split('/')
        let tempBread = []

        for (let i=1; i<splittedURL.length; i++) {
            tempBread.push(splittedURL[i])
            setBreads(tempBread)
        }
        
        // reset
        splittedURL = []
        tempBread = []
        
    }, [location])
    

    return (
        <div>
            <Breadcrumb>

                {
                    breads.map(item => {

                        let href = `http://localhost:3000/admin_control_panel/${item}`
                        
                        return (
                            <BreadcrumbItem active>
                                <a href={href}>{item}</a>
                            </BreadcrumbItem>
                        )
                    })
                }
            
                {/* <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem> */}
            </Breadcrumb>

        </div>
    );
};

export default Example;
