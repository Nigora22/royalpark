import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Container,
  List,
} from "reactstrap";
import React from "react";
import img1 from "./uy.png";
import img2 from "./icon1.png";
import img3 from "./icon2.png";
import img4 from "./icon3.jpeg";
import img5 from "./icon4.jpeg";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
const Example = (props) => {
  return (
    <body>
      <section className="section1">
        <Navbar light expand="md" className="navbar">
          <NavbarBrand href="/" className="NavbarBrand">
            <img src={img1} alt="" className="img1" />
            <p className="royal-park">Rayal Park</p>
          </NavbarBrand>
          <NavbarToggler />
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Gellary</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Testimonials </NavLink>
            </NavItem>
          </Nav>
          <Button color="primary">Book now</Button>
        </Navbar>
        <div className="serenity">
          <h1 className="text-1">Serenity</h1>
          <h1 className="text-2">
            Stay with us feel like <span className="text-info">home</span>.
          </h1>
          <p className="text-3">
            Pet-friendly hotels are becoming increasingly popular; appealing to
            travellers who can’t bear to be parted
          </p>
          <Button color="primary" className="read">
            Read more
          </Button>
        </div>
        <div className="blur">
          <div>
            <p>Check in</p>
            <p>10 Feb 2021</p>
          </div>
          <div>
            <p>Check out</p>
            <p>13 Feb 2021</p>
          </div>
          <div>
            <p>Person</p>
            <p>2 Adults 1 Kid</p>
          </div>
          <Button color="primary" className="find">
            Find room
          </Button>
        </div>
        <section className="section2">
          <img
            src="https://s3-alpha-sig.figma.com/img/b30e/6a13/5b884a08ddea0e3c63b92cf6c1b06439?Expires=1628467200&Signature=eRwtDoZso~MoYZ0wA2Nh7c~QNGfhejAjT6UBQneMpmm9-gP8y16KhktJ1O4oGvv5Gao~ZsSEwX2F0ukrf3A-1hvT9zhAGnHt1TMR2zvaaxA-efWTMx98epgyLAax~ezLd1tzW-8y4raGsZ2R-ecvwkBUzi25rfNh29c24EmMQukD5bZOnkvGaitjRzUTDBDxy3dzdr1hNSbPt4fRCqJlpd-UmaJGUyvQVVzMxktTEe1zhJ87OFASjcXxKVH~C~-eQcP0610DJ2IuZsbqg7oaX2A9DvJhpsnjdQ9iLWs-RAq5L7xo9hEvKGzZq7YnM85-S7G0vLwMLeWt32LIJfoFSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            className="imgs01"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/e551/ed54/4da5fe5871656386b08a17c2aef4bde6?Expires=1628467200&Signature=eGjsrLgi50JwacEWy-gAySsbQck6jn7HqF74u231RJfuh-AU-DKcsbhejfQmDBbWOnNzUmrs8CZBLeIQ6cxjXo4LaYr1PK0Q4jwFPehQ8MZx0T5GFkLHFmHFZEHhbRvRS2zxU0NfijyBZUnPPS2fRGj4Fg9GaDLYrP1bBvHeSpWqSIGqjd80Ips9AG3NdYQLxiYV~3LqnCD7iJWuZuwIo5jrSTXA5S965~bs0X1~lJypOCRxkED59bnN8mXqLm1I2a5Dw1GYSw4rC7vzTfgTKRMuIdx9C3fW~6C9zyQ~tB3cgJtnFii~F4RxRuNa3E2x1dAdfSn-XSnQAmvQrhpK5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            className="imgs02"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/05b9/7f00/699cab2d865913bf8a9e51e4fa9577a2?Expires=1628467200&Signature=dfG7PmdzGgdtuqPMb4d9i5uZyctvO2HiWXxK5vmIEMI13q9pOwyDTkJ0A62o1gm7D3W-GCpGAhp4uAS~Tq1~Y1zQJHBVtodlAc-3gTntuczKOfS3Tod45OLkJIszldPAk3bxGgv~Mdb-eBHcoFT3w1ONSO1csCG5-1lZX6IVZnmJe9DyRe9Mr20S3~Z3Jp3e-CDt12zS7hixCvzPP~DUpTZr3KQ7MN3ZH~sAQwiBYA1WL-iqoBCb-jWGrQk8oeOfClHvS2mjon7Xsr-ZO-mauyYQ6VPCIvyFEUWPcznUdWSaqTsyoAi8mI6oT7erQvut5paR9NRNHq9Rxww0IGaOXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            className="imgs03"
          />
          <h1 className="text-01">dream holidays</h1>
          <h1 className="text-02">
            Enjoy unforgettable experiences in dream hotels.
          </h1>
          <Button color="primary" className="read-more1">
            Buy now
          </Button>
        </section>
      </section>
      <section>
        <p className="why">Why you choose us!</p>
        <p className="ntrly">
          Naturally, it’s becoming even more important for hotel and hospitality
          brands to stand out from the crowd. Content marketing remains a key
          way for hotels to do this.
        </p>
        <Container className="clas">
          <Row xs="6">
            <Col className="card">
              <img src={img2} alt="" className="icon" />
              <p className="fw-bold fs-3">Easy booking </p>
              <p>The booking process should include minimal steps.</p>
            </Col>
            <Col className="card1">
              <img src={img3} alt="" className="icon" />
              <p className="fw-bold fs-3">Easy booking </p>
              <p>The booking process should include minimal steps.</p>
            </Col>
            <Col className="card2">
              <img src={img4} alt="" className="icon" />
              <p className="fw-bold fs-3">Easy booking </p>
              <p>The booking process should include minimal steps.</p>
            </Col>
            <Col className="card3">
              <img src={img5} alt="" className="icon" />
              <p className="fw-bold fs-3">Easy booking </p>
              <p>The booking process should include minimal steps.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row xs="3" className="row2">
            <Col className="cols">
              <p className="fw-bold fs-3 mb-3">About hotel gallery</p>
              <p className="text-secondary">
                While some of these examples are real – actually offering guests
                a stay in the locations advertised – it’s mainly just a way.
              </p>
              <Button className="view text-white">View more</Button>
            </Col>
            <Col className="cols">
              <img src={image1} alt="" className="image" />
            </Col>
            <Col className="cols">
              <img src={image2} alt="" className="image" />
            </Col>
            <Col className="cols">
              <img src={image3} alt="" className="image" />
            </Col>
            <Col className="cols">
              <img src={image4} alt="" className="image" />
            </Col>
            <Col className="cols">
              <img src={image5} alt="" className="image" />
            </Col>
          </Row>
        </Container>
      </section>

      <footer>
        <img src={img1} alt="" className="img1" />
        <Row xs="4" className="margin-bottom">
          <Col>
            <List type="unstyled">
              <li>Lorem ipsum</li>
              <li>Phasellus iaculis</li>
              <li>Nulla volutpat</li>
            </List>
          </Col>
          <Col>
            <List type="unstyled">
              <li>Lorem ipsum</li>
              <li>Phasellus iaculis</li>
              <li>Nulla volutpat</li>
            </List>
          </Col>
          <Col>
            <List type="unstyled">
              <li>Lorem ipsum</li>
              <li>Phasellus iaculis</li>
              <li>Nulla volutpat</li>
            </List>
          </Col>
          <Col>
            <List type="unstyled">
              <li>Lorem ipsum</li>
              <li>Phasellus iaculis</li>
              <li>Nulla volutpat</li>
            </List>
          </Col>
        </Row>
      </footer>
    </body>
  );
};
export default Example;
