import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './Header';
import Footer from './Footer';
import Navbars from './Navbar';
import Carouselhome from './Carouselhome';
import GalleryFolders from './GalleryFolders';
import GalleryHomeBody from './GalleryHomeBody';


import { Row, Col } from 'react-bootstrap';



class App extends Component {


  render() {
    return (
      <div className="App">
        <div>
          <Navbars />
        </div>
        <div>
          <div id="galleryFolders">
            <Row>
              <Col xs={3} md={3} lg={3} id="galleryFolderSideBar">
                <GalleryFolders />
              </Col>

              <Col xs={1} md={1} lg={1}></Col>

              <Col xs={8} md={8} lg={8} id="carouselHomeSideBar">
                <Carouselhome />
              </Col>
            </Row>

          </div>


            <GalleryHomeBody />

        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
