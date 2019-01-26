import React, { Component } from 'react';
import './account.scss';

import ScheduleIcon from '@material-ui/icons/Schedule';

class Account extends Component {

  state = {

  }

  render(){

    return (
      <div className="underDevelopment">
        <ScheduleIcon></ScheduleIcon>
        <h1>Account is currently under development.</h1>
        <h2>Estimated release Q2, 2019</h2>
      </div>
    )
  }
}

export default Account;