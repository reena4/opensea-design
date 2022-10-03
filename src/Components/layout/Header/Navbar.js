import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav,Form,} from 'react-bootstrap';  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserCircle, faWallet } from '@fortawesome/free-solid-svg-icons'

import logo from "../../../images/logo.svg"
import "./navstyle.css";

function NavScroll() {  
  return (  
    <>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >  
        <Container fluid className='ms-3 me-4' >  
          <Navbar.Brand>
          
          <img src={logo} alt="/" style={{width:40}} />
          <span className='logo ms-2'> Opensea</span>
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav"> 
          <Form className="d-flex formsize "> 
          {/* <Form.Group > */}
          {/* <FontAwesomeIcon icon={faSearch}/> */}
          {/* <InputGroup >
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faSearch}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                            />
                        </InputGroup> */}
                        
            <Form.Control 
            
              type="search"
              placeholder="Search items,collections and accounts"
              className="me-2"
              aria-label="Search"
               size="lg"
              style={{backgroundColor: 'transparent',color:"white"}}
              
             
            /> 
             
            {/* <Button variant="outline-success">Search</Button> */}
          {/* </Form.Group> */}
          </Form>
            <Nav className="me-auto ">  
              <Nav.Link href="#features">Explore</Nav.Link>  
              <Nav.Link href="#pricing">Stats</Nav.Link>  
              <Nav.Link href="#pricing">Resources</Nav.Link> 
              <Nav.Link href="#pricing">create</Nav.Link> 

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>  
              </NavDropdown>   */}
            </Nav>  
            <Nav>  
              <Nav.Link href="#deets"><FontAwesomeIcon icon={faUserCircle} style={{fontSize:20}} /></Nav.Link>  
              <Nav.Link eventKey={2} href="#memes">  
              <FontAwesomeIcon icon={faWallet} style={{fontSize:20}} />
              </Nav.Link>  
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
  );  
}  
export default NavScroll;  