import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Footer extends Component {
  render(){
    return(
      <div id="footerHome">
        <Panel>
          <Panel.Footer>
            <p>Brent's ReactJS Gallery</p>
          </Panel.Footer>
        </Panel>
      </div>
    );
  }
}

export default Footer;
