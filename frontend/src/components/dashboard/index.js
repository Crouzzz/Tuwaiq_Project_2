// import React, { useState } from 'react';
import {
  Row,
  Container,
  Card,
  Nav,
  Col,
  Offcanvas,
  Button,
  Navbar,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import "./dashboard.css";
import firstimg from "./img/firstimg.png";
import second from "./img/second.png";
import third from "./img/third.png";
import forth from "./img/forth.png";
import fiv from "./img/fiv.png";
import six from "./img/six.png";
import seven from "./img/seven.png";
import eight from "./img/eight.png";
import nin from "./img/nin.png";
import ten from "./img/ten.png";
import eleven from "./img/eleven.png";
import twilv from "./img/twilv.png";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Dashboard = () => {
  const { state } = useLocation();
  // const uId = state.id;
  // const UserName = state.userName;
  // const nationalID = state.nationalID;
  const [data, setData] = useState([]);
  const [drivingLicense, setDrivingLicense] = useState({});
  const [passport, setPassport] = useState({});
  const [qiyas, setQiyas] = useState({});
  const uID = sessionStorage.getItem('userId')
  

  useEffect(() => {
    axios({
      method: "post",
      url: "/user/info",
      data: {
        id: uID,
      },
    })
      .then((res) => {
        setData(res.data);
        setDrivingLicense(res.data.drivingLicense);
        setPassport(res.data.passport);
        setQiyas(res.data.qiyas);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={1}>


<Navbar bg="light" expand={false}>
            <Navbar.Brand href="#"
            placement="start"
            ></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header
                style={{ backgroundColor: "skyblue" }}
                id="contain"
                closeButton
              >
                <img
                  id="NavImg"
                  src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
                />
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="navItem">Home</Nav.Link>
                  <Nav.Link className="navItem">Permits</Nav.Link>
                  <Nav.Link className="navItem">Reports</Nav.Link>
                  <Nav.Link className="navItem">Notifications</Nav.Link>
                  {/* <Link to="/Dashboard" id="link"> */}
                  <Nav.Link className="navItem" href="/Dashboard">
                    Dashboard {/* navigate("/Dashboard", state:{id:data.id}) */}
                  </Nav.Link>
                  {/* </Link> */}
                  <Nav.Link className="navItem" href="#action2">
                    Oran Donation
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        </Container>
        <br/>
        <br/>
        <Container>
        <Row>
          <Col sm={3}>
            <Card
            
            >
             
              <Card.Img variant="top" className="dash_Img" src={firstimg} />
              
              <Card.Body className="cardds">
                {/* <Card.Title>
                  Driving licenses
               </Card.Title> */}
               
               <Card.Title>Driving licenses</Card.Title>
               
               <hr/>
               <Row> 
                                 
                <Nav >
                <Col sm={10}>
                  <h6 id="cardTobic">Number of licenses:<br/> {data.cars}</h6>
                  </Col>
                  <Col sm={2} >
                  <DropdownButton  id="dropdown-basic-button" title="">
                 
                 <Dropdown.Item >Release Date{drivingLicense.releaseDate}</Dropdown.Item>
                 <Dropdown.Item >Expiry Date{drivingLicense.expiryDate}</Dropdown.Item>
               </DropdownButton>
               </Col>
               
                
                </Nav>
                </Row>

               
              </Card.Body>
              
            </Card>
          </Col>
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={second} />
              <Card.Body className="cardds">
                <Card.Title>Vehicles count</Card.Title>
              
                <hr/>
               <p id="cardTobic">{data.trafficViola}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={third} />
              <Card.Body className="cardds">
                <Card.Title>Vehicles Insurance:</Card.Title>
                <hr/>
                <h6 id="cardTobic">Insurance Documents:<br/> {drivingLicense.count}</h6>
              </Card.Body>
            </Card>
          </Col>
            <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={forth} />
              <Card.Body className="cardds">
                <Card.Title>Traffic Violations:</Card.Title>
                <hr/>
                <h6 id="cardTobic">Violations Count:<br/> {data.vehiclelnsurances}</h6>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
        
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={fiv} />
              <Card.Body className="cardds">
                <Card.Title>Passport:</Card.Title>
               
                <hr/>
                <Row>
                  <Col sm={9}>
                <h6 id="cardTobic">passport Count:<br/> {passport.count}</h6>
                </Col>
                <Col sm={3}>
                <DropdownButton id="dropdown-basic-button" title="">
                
                 <Dropdown.Item >Number:{passport.number}</Dropdown.Item>
                 <Dropdown.Item >Release Date:{passport.releaseDate}</Dropdown.Item>
                 <Dropdown.Item >Expiry Date:{passport.expiryDate}</Dropdown.Item>
                 <Dropdown.Item >releasePlace{passport.releasePlace}</Dropdown.Item>
               </DropdownButton>
               </Col>
               </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={six} />
              <Card.Body className="cardds">
                <Card.Title>Appointments:</Card.Title>
               
                <hr/>
                <h6 id="cardTobic"> {data.appointment}</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={seven} />
              <Card.Body className="cardds">
                <Card.Title>National Address</Card.Title>
               
                <hr/>
                <h6 id="cardTobic"> {data.NationalAddress}</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={eight} />
              <Card.Body className="cardds">
                <Card.Title>My Deeds:</Card.Title>
               
                <hr/>
                <h6 id="cardTobic"> {data.MyDeeds}</h6>
                
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
        
          
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={nin} />
              <Card.Body className="cardds">
                <Card.Title>Attorneys:</Card.Title>
                <hr/>
                <h6 id="cardTobic"> {data.Attorneys}</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={ten} />
              <Card.Body className="cardds">
                <Card.Title>Qiyas Exam Results:</Card.Title>
                <hr/>
                <Row>
                  <Col sm={9}>
                <h6 id="cardTobic"> {qiyas.count}</h6>
                </Col>
                <Col sm={2}>
                <DropdownButton id="dropdown-basic-button" title="">
                 
                 <Dropdown.Item >Theory Result:{qiyas.theory}</Dropdown.Item>
                 <Dropdown.Item >Quantitative Result:{qiyas.quantitative}</Dropdown.Item>
               </DropdownButton>
               </Col>
               </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card >
              <Card.Img variant="top" className="dash_Img" src={twilv} />
              <Card.Body className="cardds">
                <Card.Title>Commercial Registrations:</Card.Title>
                <hr/>
                <h6 id="cardTobic"> {data.CommercialRegistrations}</h6>
              </Card.Body>
            </Card>
          </Col>
          
          <Col sm={3}>
            <Card >
              
              <Card.Body className="cardds">
                <Card.Title>International travel record</Card.Title>
                <hr/>
                <h6 id="cardTobic"> {data.Internationaltravel}</h6>
                
              </Card.Body>
            </Card>
          </Col>
          </Row>
          
      </Container>
    </div>
  );
};

export default Dashboard;
