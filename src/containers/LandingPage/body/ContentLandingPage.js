import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
import DocumentTest from '../test/DocumentTest';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';


import '../../../css/body/contentLandingPage.css';
import '../../../css/body/contentLandingPage.css';
import '../../../css/body/contentLandingPage-2.css';
import '../../../css/body/mobileLandingPage.css';
import '../../../css/animation-setting/contentLandingPage.css';

class ContentLandingPage extends Component {
    constructor(props) {
        super();
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {
        new ScrollMagic.Scene({
          triggerElement: "#slogon",
          duration: 300, // scroll distance
          offset: 150 // start this scene after scrolling for 50px
        })
        .setClassToggle("#welcome", "active-lnd")
        .addTo(this.controller);
        
        new ScrollMagic.Scene({
          triggerElement: "#row-spliter-1",
          duration: 400, // scroll distance
          offset: 300 // start this scene after scrolling for 50px
        })
        .setClassToggle("#discover", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#disc-1",
          duration: 900, // scroll distance
          offset: 200 // start this scene after scrolling for 50px
        })
        .setClassToggle("#discover", "active-lnd")
        .addTo(this.controller);
        
        new ScrollMagic.Scene({
          triggerElement: "#disc-2",
          duration: 900, // scroll distance
          offset: 150 // start this scene after scrolling for 50px
        })
        .setClassToggle("#discover", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#disc-3",
          duration: 900, // scroll distance
          offset: 150 // start this scene after scrolling for 50px
        })
        .setClassToggle("#discover", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#disc-4",
          duration: 900, // scroll distance
          offset: 150 // start this scene after scrolling for 50px
        })
        .setClassToggle("#discover", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#disc-5",
          duration: 900, // scroll distance
          offset: 150 // start this scene after scrolling for 50px
        })
        .setClassToggle("#discover", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#disc-6",
          duration: 300, // scroll distance
          offset: 150 // start this scene after scrolling for 50px
        })
        .setClassToggle("#discover", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#row-spliter-7",
          duration: 400, // scroll distance
          offset: 150 // start this scene after scrolling for 50px
        })
        .setClassToggle("#test-btn", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#test",
          duration: 300, // scroll distance
          offset: 150 // start this scene after scrolling for 50px
        })
        .setClassToggle("#test-btn", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#row-spliter-8",
          duration: 900, // scroll distance
          offset: 50 // start this scene after scrolling for 50px
        })
        .setClassToggle("#integrate-btn", "active-lnd")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-1",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
          })
        .setClassToggle("#disc-1-img", "bounceIn")
        .addTo(this.controller);

        new ScrollMagic.Scene({
          triggerElement: "#row-spliter-1",
          duration: 900, // scroll distance
          offset: 150,
          reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#disc-1-cont", "fadeInLeft")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-2",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#disc-2-cont", "fadeInRight")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-3",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#disc-3-img", "fadeInUp")
        .addTo(this.controller);
  
        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-3",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#disc-3-cont", "fadeInDown")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-4",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#disc-4-img", "fadeIn")
        .addTo(this.controller);
  
        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-4",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#disc-4-cont", "fadeInLeft")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-5",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#disc-5-cont", "fadeInLeft")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-6",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#disc-6-cont", "fadeInUp")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-7",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#test-text", "fadeInUp")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-7",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#documentTest", "fadeInLeft")
        .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: "#row-spliter-8",
            duration: 900, // scroll distance
            offset: 150,
            reverse: true // start this scene after scrolling for 50px
        })
        .setClassToggle("#integration-row", "fadeInUp")
        .addTo(this.controller);
      }

    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-12">
                        <div id="slogon" className="slogon fadeIn">
                        <p className="slogon-head">
                            <FormattedMessage id="landingPage.slogon.1" />
                            <span className="lighted"><FormattedMessage id="landingPage.slogon.lt.1" /></span>
                            <FormattedHTMLMessage id="landingPage.slogon.2" />
                            <span className="lighted"><FormattedMessage id="landingPage.slogon.lt.2" /></span>.
                        </p>
                        <p className="slogon-footer">
                            <FormattedMessage id="landingPage.slogon.footer" />
                        </p>
                        </div>
                    </div>
                </div>
                <div id="row-spliter-1" className="rows-spliter"></div>
                <div id="disc-1" className="row">
                    <div className="col-lg-5 col-sm-11 col-md-3 disc-1 disc-1-cn">
                        <div id="disc-1-cont" className="disc-cont">
                            <p className="disc-cont-head">
                                <FormattedMessage id="landingPage.discover-1.1"/>
                                <span className="lighted"><FormattedMessage id="landingPage.discover-1.lt.1" /></span>
                                <FormattedHTMLMessage id="landingPage.discover-1.2" />
                                <span className="lighted"><FormattedMessage id="landingPage.discover-1.lt.2" /></span>
                                <FormattedHTMLMessage id="landingPage.discover-1.3" />
                                <span className="lighted"><FormattedMessage id="landingPage.discover-1.lt.3" /></span>.
                            </p>
                            <p className="disc-cont-footer"><FormattedHTMLMessage id="landingPage.discover-1.footer" /></p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-md-8 disc-1 disc-1-mg">
                        <div id="disc-1-img" className="disc-img">
                            <img src="./img/Group-66.svg" alt="" height="90%" width="90%" />
                        </div>
                    </div>
                </div>
                <div id="row-spliter-2" className="rows-spliter"></div>
                <div id="disc-2" className="row">
                    <div className="col-lg-5 col-sm-11 col-md-3 disc-2 disc-2-cn">
                        <div id="disc-2-cont" className="disc-cont">
                            <p className="disc-cont-head">
                                <span className="lighted"><FormattedMessage id="landingPage.discover-2.lt.1" /></span>
                                    <FormattedHTMLMessage id="landingPage.discover-2.1" />
                                <span className="lighted"><FormattedMessage id="landingPage.discover-2.lt.2" /></span>
                                <FormattedMessage id="landingPage.discover-2.2" />
                            </p>
                            <p className="disc-cont-footer">
                            <FormattedHTMLMessage id="landingPage.discover-2.footer" />
                            </p>
                        </div>
                    </div>
                </div>
                <div id="row-spliter-3" className="rows-spliter"></div>
                <div id="disc-3" className="row">
                    <div className="col-lg-5 col-sm-11 col-md-3 disc-3 disc-3-cn">
                        <div id="disc-3-cont" className="disc-cont">
                            <p className="disc-cont-head">
                                <FormattedMessage id="landingPage.discover-3.1" />
                                <span className="lighted"><FormattedMessage id="landingPage.discover-3.lt.1" /></span>
                                <FormattedHTMLMessage id="landingPage.discover-3.2" /> 
                                <span className="lighted"><FormattedMessage id="landingPage.discover-3.lt.2" /></span>.
                            </p>
                            <p className="disc-cont-footer">
                                <FormattedHTMLMessage id="landingPage.discover-3.footer" />
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-md-8 disc-3 disc-3-mg">
                        <div id="disc-3-img" className="disc-img">
                            <img src="./img/AML.svg" alt="" height="90%" width="90%" />
                        </div>
                    </div>
                </div>
                <div id="row-spliter-4" className="rows-spliter"></div>
                <div id="disc-4" className="row">
                    <div className="col-lg-5 col-sm-11 col-md-3 disc-4 disc-4-cn">
                        <div id="disc-4-cont" className="disc-cont">
                        <p className="disc-cont-head">
                             <span className="lighted"><FormattedMessage id="landingPage.discover-4.lt.1" /></span>, 
                             <span className="lighted"><FormattedMessage id="landingPage.discover-4.lt.2" /></span>
                             <FormattedHTMLMessage id="landingPage.discover-4.1" />
                        </p>
                        <p className="disc-cont-footer">
                            <FormattedHTMLMessage id="landingPage.discover-4.footer" />
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-md-8 disc-4 disc-4-mg">
                        <div id="disc-4-img" className="disc-img">
                            <img src="./img/facial-recognition.svg" alt="" height="70%" width="70%" />
                        </div>
                    </div>
                </div>
                <div id="row-spliter-5" className="rows-spliter"></div>
                <div id="disc-5" className="row">
                    <div className="col-lg-5 col-sm-11 col-md-3 disc-5 disc-5-cn">
                        <div id="disc-5-cont" className="disc-cont">
                            <p className="disc-cont-head">
                            <FormattedMessage id="landingPage.discover-5.1" />
                            <span className="lighted"><FormattedMessage id="landingPage.discover-5.lt.1" /></span> <br/> 
                            & <span className="lighted"><FormattedMessage id="landingPage.discover-5.lt.2" /></span> <FormattedHTMLMessage id="landingPage.discover-5.2" />
                            <span className="lighted"><FormattedMessage id="landingPage.discover-5.lt.3" /></span>.
                            </p>
                            <p className="disc-cont-footer">
                                <FormattedHTMLMessage id="landingPage.discover-5.footer" />
                            </p>
                        </div>
                    </div>
                </div>
                <div id="row-spliter-6" className="rows-spliter"></div>
                <div id="disc-6" className="row">
                    <div className="col-12 disc-6 disc-6-cn">
                        <div id="disc-6-cont" className="disc-cont">
                            <p className="disc-cont-head">
                            <FormattedMessage id="landingPage.discover-6.1" />
                            <span className="lighted"><FormattedMessage id="landingPage.discover-6.lt.1" /></span>
                            <FormattedHTMLMessage id="landingPage.discover-6.2" />
                            <span className="lighted">2020</span> <FormattedMessage id="landingPage.discover-6.3" />
                            </p>
                        </div>
                    </div>
                </div>
                <div id="row-spliter-7" className="rows-spliter"></div>
                <div id="test" className="row">
                    <div className="col-sm-11 col-md-5 col-lg-5">
                        <DocumentTest />
                    </div>
                    <div className="col-sm-11 col-md-5 col-lg-5 test-left-col">
                        <div id="test-text" className="test-text">
                            <p className="test-text-head">
                                <span className="lighted"><FormattedMessage id="landingPage.test-1.lt.1" /></span><FormattedMessage id="landingPage.test-1.1" />
                            </p>
                            <p className="test-text-footer">
                                <FormattedHTMLMessage id="landingPage.test-1.footer" />
                            </p>
                            <p className="doc-link">
                                <FormattedMessage id="landingPage.test-1.link" />
                            </p>
                        </div>
                    </div>
                </div>
                <div id="row-spliter-8" className="last-row-spliter"></div>
                <div id="integration-row" className="row-holder">
                    <div id="integrate" className="row inegrate-row">
                        <div className="col-lg-3 col-md-3 col-sm-12 integrate-1"> 
                            <div id="integrate-1" className="integrate-cont">
                                <p className="integrate-1-head">
                                    <FormattedMessage id="landingPage.integrate-1.1" />
                                    <span className="int-lighted"><FormattedMessage id="landingPage.integrate-1.lt.1" /></span>
                                    <FormattedHTMLMessage id="landingPage.integrate-1.2" />
                                    <span className="int-lighted"><FormattedMessage id="landingPage.integrate-1.lt.2" /></span>.
                                </p>
                                <p className="integrate-1-footer">
                                    <FormattedHTMLMessage id="landingPage.integrate-1.footer" />
                                </p>
                                <p className="integrate-link">
                                    <FormattedMessage id="landingPage.integrate-1.link" />
                                </p>
                            </div> 
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 integrate-2"> 
                            <div id="integrate-2" className="integrate-cont">
                                <p className="integrate-2-head">
                                <span className="int-lighted"><FormattedMessage id="landingPage.integrate-2.lt.1" /></span>
                                <FormattedHTMLMessage id="landingPage.integrate-2.1" />
                                <span className="int-lighted"><FormattedMessage id="landingPage.integrate-2.lt.2" /></span>
                                <FormattedMessage id="landingPage.integrate-2.2" />
                                </p>
                                <p className="integrate-2-footer">
                                <FormattedHTMLMessage id="landingPage.integrate-2.footer" />
                                </p>
                                <p className="integrate-link">
                                    <FormattedMessage id="landingPage.integrate-2.link" />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 integrate">
                            <div id="integrate-3" className="integrate-cont">
                                <p className="integrate-3-head">
                                <FormattedMessage id="landingPage.integrate-3.1" />
                                <span className="int-lighted"><FormattedMessage id="landingPage.integrate-3.lt.1" /></span>
                                <FormattedHTMLMessage id="landingPage.integrate-3.2" />
                                </p>
                                <p className="integrate-3-footer">
                                <FormattedHTMLMessage id="landingPage.integrate-3.footer" />                       
                                </p>
                                <p className="integrate-link">
                                    <FormattedMessage id="landingPage.integrate-3.link" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default ContentLandingPage;