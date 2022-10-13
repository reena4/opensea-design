import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import "./footer.css";
//import { SocialIcon } from 'react-social-icons';
import {BsTwitter , BsInstagram,BsYoutube} from 'react-icons/bs'
import{FaRedditAlien,FaTiktok,FaDiscord, FaRegEnvelope} from 'react-icons/fa'
import logo from "../../../images/opensea-white.svg"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
    <footer>
  <Container fluid className='bg-primary ' >
  <Container className='p-3 containerpostion'>
    <Row className='mt-5 containerpostion '>
    <Col md={6} >
      <h5><b>Stay in the loop</b></h5>
      <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
      <Form className="d-flex ">
      
       
      <Form.Control
              type="search"
              placeholder="Enter your email"
              className="me-2 formwidth"
              aria-label="Search"
            />
        
        <Button className="search">Search</Button>
      
     
      </Form>
    </Col>
    
    <Col md={6}  >
    <h5><strong>Join the community</strong></h5>
    <Button className="btn-size" ><BsTwitter className="iconsize"/></Button>
<Button className="btn-size"><BsInstagram className="iconsize"/></Button>
<Button className='btn-size'><FaDiscord className="iconsize"/></Button>
<Button className="btn-size"><FaRedditAlien className="iconsize"/></Button>
<Button className="btn-size"><BsYoutube className="iconsize"/></Button>
<Button className="btn-size"><FaTiktok className="iconsize"/></Button>
<Button className='btn-size'><FaRegEnvelope className="iconsize"/></Button>
    </Col>
   
    </Row>
    
  
   <div className='horizontal_line mt-5 mb-5'/>
   <Row  >
   
        <Col md={4}>
        <img src={logo} alt="/" style={{width:40}} />
        <h5><strong>OpenSea</strong></h5>
        <p className='footer_paragraph'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
        </Col>
        <Col xs lg="2">
        <h6 className='heading'><strong>Marketplace</strong></h6>
        <ul>
          <li>All NFTs</li>
          <li>Solana NFTs</li>
          <li>Art</li>
          <li>Collectibles</li>
          <li>Domain Names</li>
          <li>Music</li>
          <li>Photography</li>
          <li>Sports</li>
          <li>Trading Cards</li>
          <li>Utility</li>
          <li>Virtual Worlds</li>
        </ul>
        </Col>
        <Col xs lg="2">
       <h6><strong>My Account</strong></h6>
       <ul>
        <li>Profile</li>
        <li>Favorites</li>
        <li>Watchlist</li>
        <li>My Collections</li>
        <br/>
        <br/>
        <h6><strong>Stats</strong></h6>
        <li>Rankings</li>
        <li>Activity</li>
       </ul>
        </Col>
        <Col xs lg="2">
        <h6><strong>Resources</strong></h6>
        <ul>
          <li>Learn</li>
          <li>Help Center</li>
          <li>Platform Status</li>
          <li>Partners</li>
          <li>Taxes</li>
          <li>Blog</li>
          <li>Docs</li>
          <li>Newsletter</li>
        </ul>
        </Col>
        <Col xs lg="2">
       <h6> <strong>Company</strong></h6>
       <ul>
       <li>Careers</li>
       <li>Ventures</li>
       <li>Grants</li>
        </ul>
        </Col>
   </Row>
   <div className='horizontal_line mt-5 mb-4'/>
   <Row >
    <Col md={6} className="copyright">© 2018 - 2022 Ozone Networks, Inc</Col>
    <Col md={6}  className="copyright1 ">
    <Link to ="#" className="copyright1 me-3" ><span>Privacy policy</span></Link> 
     <Link to ="#" className="copyright1" ><span>Terms of Service</span></Link></Col>
   </Row>
   </Container>
  </Container>
  </footer>
          </div>
  )
}

export default Footer
