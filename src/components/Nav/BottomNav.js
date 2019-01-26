import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import AssigmentIcon from "@material-ui/icons/Assignment";
import CalenderIcon from "@material-ui/icons/CalendarToday"

class BottomNav extends Component {

  state = {
    value: 'home',
  };

  componentDidMount(){
    let loadedRoute = this.props.location.pathname.substring(1).toLowerCase();
    switch(loadedRoute){
      case "tasks": this.setState({value: 'tasks'})
        break;
      case "events": this.setState({value: 'events'})
        break;
      case "account": this.setState({value: 'account'})
        break;
      default: this.setState({value: 'home'})
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const { value } = this.state;

    return (
      <BottomNavigation className="bottomNav" value={value} onChange={this.handleChange}>
        <BottomNavigationAction to="/" component={Link} label="Home" value="home" icon={<HomeIcon />}></BottomNavigationAction>
        <BottomNavigationAction to="/tasks" component={Link} label="Aufgaben" value="tasks" icon={<AssigmentIcon />}></BottomNavigationAction>
        <BottomNavigationAction to="/events" label="Termine" component={Link} value="events" icon={<CalenderIcon />}></BottomNavigationAction>
        <BottomNavigationAction to="/account" label="Account" component={Link} value="account" icon={<PersonIcon />}></BottomNavigationAction>
      </BottomNavigation>
    )
  }
}

export default withRouter(BottomNav);