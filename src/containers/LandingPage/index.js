import React, { Component } from 'react';
import Navbar from './navbar/NavLandingPage';
import Body from './body/ContentLandingPage';
import { IntlProvider } from 'react-intl';
import messages from '../../translations/landingPage.json';

import '../../css/main.css';

const locale = (navigator.languages && navigator.languages[0])
                || navigator.language
                || navigator.userLanguage
                || 'en-US';
    
class LandingPage extends Component {
    render() {
        return (
            <IntlProvider locale={locale} messages={messages[locale]}>
                <Navbar />
                <Body />
            </IntlProvider>
        )
    }
}

export default LandingPage;
