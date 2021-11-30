import React from 'react';
import {Form,Button,Carousel} from 'react-bootstrap'
import "./main.css"
const Main = () => {
	return (<div className="App">

<Carousel variant="dark">
	<img id="imgMain" src="https://ta.sdaia.gov.sa/images/hero.png"/>
  <Carousel.Item>
  <h3 className="text_carousel">The Electronic permissions are for your essential needs</h3>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <h3 className="text_carousel">Our responsibility is to protect you complying is your responsability</h3>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <h3 className="text_carousel">Report if anyone suspected with corona</h3>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
	</div>);
};

export default Main;
