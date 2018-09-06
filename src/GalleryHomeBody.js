import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class GalleryHomeBody extends Component {
  render(){
    return(
      <div id="bottomGrid">

          <Col md={6} mdPush={6}>
            <code>{'<Col md={6} mdPush={6} />'}</code>
          </Col>

          <Col md={6} mdPull={6}>
            <code>{'<Col md={6} mdPull={6} />'}</code>
          </Col>

      </div>
    );
  }
}

export default GalleryHomeBody;
