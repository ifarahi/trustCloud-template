import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view'
import DocumentContent from './DocumentContent';
import DocumentGraphic from './DocumentGraphic';
import { createLiteralElement } from 'intl-messageformat-parser';


class DefaultTabs extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      activeTab: '1',
    };
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    const { t, jsonResult } = this.props;
    const { activeTab } = this.state;
    const { documentInfoVerificationResult, visualVerificationResult } = jsonResult;
    const { base64StringData:portrait } = visualVerificationResult.graphicFields.Portrait.imageData;
    const { base64StringData:signature } = visualVerificationResult.graphicFields.Signature.imageData;
    const { base64StringData:cropped } = jsonResult.croppedImage;

    return (
        <Card>
            <div className="tabs">
              <div className="tabs__wrap">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      Form View
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                    JSON View
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => {
                        this.toggle('3');
                      }}
                    >
                    Graphic View
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className="result-displayer">
                        <DocumentContent documentInfo={documentInfoVerificationResult} documentContent={visualVerificationResult} />
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                      <div className="result-displayer">
                        <ReactJson src={jsonResult} />
                      </div>
                  </TabPane>
                  <TabPane tabId="3">
                      <div className="result-displayer">
                        <DocumentGraphic portrait={portrait} signature={signature} cropped={cropped} />
                      </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
        </Card>
    );
  }
}

export default withTranslation('common')(DefaultTabs);
