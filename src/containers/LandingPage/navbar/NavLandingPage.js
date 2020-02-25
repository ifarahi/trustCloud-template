
import React, { Component, } from 'react';
import { FormattedMessage } from 'react-intl';

import '../../../css/navbar/navLandingPage.css';
import '../../../css/navbar/mobileLandingPage.css';

class NavLandingPage extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="lay-navbar-wrapper">
                <div className="lay-nav-item">
                    <span className="logo"> Helloo</span>
                </div>
                <div className="space-spliter"></div>
                <div className="left-menu lay-nav-item">
                    <a href="#slogon">
                        <span id="welcome" className="left-menu-item"><FormattedMessage id="landingPage.navbar.welcome" /></span>
                    </a>
                </div>
                <div className="space-spliter"></div>
                <div className="left-menu lay-nav-item">
                    <a href="#disc-1">
                        <span id="discover" className="left-menu-item"><FormattedMessage id="landingPage.navbar.discover" /></span>
                    </a>
                </div>
                <div className="space-spliter"></div>
                <div className="left-menu lay-nav-item">
                    <a href="#test-text">
                        <span id="test-btn" className="left-menu-item left-menu-item-test"><FormattedMessage id="landingPage.navbar.test" /></span>
                    </a>
                </div>
                <div className="space-spliter"></div>
                <div className="left-menu lay-nav-item">
                    <a href="#integrate-1">
                        <span id="integrate-btn" className="left-menu-item"><FormattedMessage id="landingPage.navbar.integrate" /></span>
                    </a>
                </div>
                <div className="space-spliter"></div>
                <div className="right-menu lay-nav-item">
                    <span id="client-area" className="right-menu-item"><FormattedMessage id="landingPage.navbar.clientArea" /></span>
                </div>
                <div className="space-spliter"></div>
                <div className="right-menu lay-nav-item">
                    <span id="support" className="right-menu-item"><FormattedMessage id="landingPage.navbar.support" /></span>
                </div>
                </div>
            </div>

        )
    }
}

export default NavLandingPage;
