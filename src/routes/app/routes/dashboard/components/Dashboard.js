import React from 'react';
import QueueAnim from 'rc-queue-anim';
import StatBoxes from './StatBoxes';
import EngagementStats from './EngagementStats';
import BenchmarkChart from './BenchmarkChart';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import classnames from 'classnames';
import HorizontalProducts from './HorizontalProducts';
import HorizontalProducts2 from './HorizontalProducts2';
import '../styles.scss'


const Main = () => (

  <div className="row">
    <div className="col-xl-6">
      <div className="card card-white">
        <div className="card-image">
          <img src="https://i.imgur.com/0vt8aCs.jpg" alt="" />
        </div>
        <div className="card-content">
          <a className="card-button float-right" href="javascript:;">
            <button className="btn btn-icon btn-icon-round btn-floating btn-danger"><i className="material-icons mdi-sm">sms</i></button>
          </a>
        </div>

      </div>
    </div>
    <div className="col-xl-6">
      <div className="card card-white">
        <div className="card-image">
          <img src="https://i.imgur.com/bH5ZfkB.jpg" alt="" />
        </div>
        <div className="card-content">
          <a className="card-button float-right" href="javascript:;">
            <button className="btn btn-icon btn-icon-round btn-floating btn-danger"><i className="material-icons mdi-sm">sms</i></button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Engagement = () => (
 <HorizontalProducts />
);

const Dashboard = () => (
  <div className="container-fluid no-breadcrumbs page-dashboard">

    <QueueAnim type="bottom" className="ui-animate">
      <h2 className="article-title">Featured Live Events</h2>
      <Main />
      <hr/> <br/>
      <h2 className="article-title">Playing Now</h2>
      <div key="3"><HorizontalProducts2 /></div>
      <h2 className="article-title">User specific videos below</h2>
      <div key="4"> <Engagement /></div>
    </QueueAnim>

  </div>
);

module.exports = Dashboard;
