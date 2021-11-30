import React from "react";
import "./NextMain.css";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Navigate } from "react-router";
import axios from "axios";
import Dashboard from "../dashboard";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  ListGroup,
  Card,
  Nav,
  Offcanvas,
  Navbar,
  Container,
  NavDropdown,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";
// import { accounts } from '../../../../backend/routers/routes/db';

function NextMain() {
  const current = new Date();
  const date = `Date: ${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}Time: ${current.getHours()}
    :${current.getMinutes()}:${current.getSeconds()}`;

  const { state } = useLocation();
  const uID = sessionStorage.getItem("userId");
  console.log("userID",uID);
  const UserName = state.userName;
  const nationalID = state.nationalID;
  // nationalID = sessionStorage.getItem("userId");
  const [data, setData] = useState([]);
  const [drivingLicense, setDrivingLicense] = useState({});
  //  const []
  const navigate = useNavigate();
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
        // navigate("/Dashboard", {state:{ id: data.id} });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div>
      <br/>
      <br/>
      <br/>



      <Container>
  <Row>
    <Col> <Navbar bg="light" expand={false}>
            <Navbar.Brand href="#"></Navbar.Brand>
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
          </Navbar></Col>
         
    <Col xs={6} >  <Card style={{textAlign:"center", width: "35rem" }}>
            <ListGroup variant="flush">
              
              <h6>Name: {data.userName}</h6>
              <hr/>
              <h6>
                National ID :{data.nationalID}
              </h6>
            </ListGroup>
          </Card></Col>
    <Col>
    <Card
              style={{
                justifyContent: "left",
                width: "20rem",
                backgroundColor: "#1b5e20",
                borderRadius: "5px",
                marginLeft: "130px",
              }}
            >
              <Card.Img
                variant="top"
                style={{ width: "5rem" }}
                src="https://3.bp.blogspot.com/-E8vdU98Meoc/VHqLBjQ6WPI/AAAAAAAABoI/RTJVpcl2ZAM/s640/%D8%AA%D9%86%D8%B2%D9%8A%D9%84.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6 class="text-light mb-2 mt-1 ">Immune</h6>
                </Card.Title>
                {/* <Card.Text> <h6> last update:{date}</h6> </Card.Text> */}
                <Card.Text>
                  {" "}
                  <h6 class="text-light mb-1 font-weight-light">
                    Last update
                  </h6>{" "}
                </Card.Text>
                <Card.Text>
                  {" "}
                  <h6 class="text-light mb-1">{date}</h6>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
    </Col>
  </Row>
  
</Container>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


    </div>
  );
}
export default NextMain;
