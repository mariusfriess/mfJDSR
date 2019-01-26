import React, { Component } from 'react';
import './tasks.scss';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class Tasks extends Component {

  render(){

    return (
      <div className="routeComponent">
        <Fab className="fab" color="primary" size="medium" aria-label="Add">
          <AddIcon />
        </Fab>
        <div className="section">
          <h1>Ausstehende Aufgaben</h1>
          <div className="task">
            <span className="title">Du hast alle Aufgaben erledigt!</span>
          </div>
        </div>

        
      </div>
    )
  }
}

export default Tasks;