import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return (
          <Container>
            <h2>Hello I am rendering here</h2>
          </Container>
        )
    }
}

export default withRouter(connect(state => ({
    customizer: state.customizer,
    sidebar: state.sidebar,
    theme: state.theme,
    rtl: state.rtl,
    user: state.user
  }))(Dashboard));
