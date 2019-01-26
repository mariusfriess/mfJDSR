import React, { Component } from 'react';
import './events.scss';

import ScheduleIcon from '@material-ui/icons/Schedule';

class Events extends Component {

  state = {

  }

  render(){

    return (
      <div className="underDevelopment">
        <ScheduleIcon></ScheduleIcon>
        <h1>Events is currently under development.</h1>
        <h2>Estimated release Mar - Apr, 2019</h2>
      </div>
    )
  }
}

export default Events;