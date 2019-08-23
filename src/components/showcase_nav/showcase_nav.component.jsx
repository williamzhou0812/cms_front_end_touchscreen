import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './showcase_nav.styles.scss';


class ShowCaseNav extends React.Component { 

    render() {
        return (
            <div>
                <hr/>
                <h5>Nav Bar section </h5>
        
                    <Nav className="justify-content-center">
                        <Nav.Item>
                             <input type="text"  value="about"/>
                        </Nav.Item>
                        <Nav.Item>
                            <input type="text"  value="EXPLORE"/>
                        </Nav.Item>
                        <Nav.Item>
                              <input type="text"  value="CONTACT"/>
                        </Nav.Item>
                  
                    </Nav>
                
            </div>
        )
    }

}


export default ShowCaseNav; 