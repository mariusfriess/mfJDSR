import React, { Component } from 'react';
import './home.scss';
import Hammer from 'react-hammerjs';

import {schedule as completeSchedule} from './schedule';

class Home extends Component {

  constructor(){
    super();
    let date = new Date();
    let day = date.getDay() - 1;
    if(date.getHours() > 15){
      day++;
    }
    if(day >= 5) day = 0;
    this.state = {
      scheduleIdx: day,
      completeSchedule
    };

    this.changeSchedule.bind(this)
    this.isScrolling = false;
  }

  state = {
    
  }

  changeSchedule = (newIdx) => {
    this.setState({
      scheduleIdx: newIdx
    })
  }

  componentDidMount(){
    document.querySelector('.routeComponent').addEventListener('scroll', () => {
      console.log("1")
      this.isScrolling = true;
    }, { passive: true });
    
    window.addEventListener('touchend', function() {
      this.console.log(2)
      this.isScrolling = false;
    });
  }

  handlePan = (e) => {
    let elem = e.target.closest(".scheduleSubject");
    document.querySelectorAll(".scheduleSubject").forEach(elem2 => {
      if(elem2 != elem){
        elem2.style.transform = "translateX(0px)"
      }
    })
    elem.style.transform = "translateX(" + e.deltaX + "px)"
    console.log(e)
    console.log(elem.offsetLeft)
    
    if (this.isScrolling) {
      return;
    }
  }

  render(){

    let panOptions = {
      recognizers: {
        pan: {
          direction: 6
        }
      }
    }

    this.createSchedule = () => {
      let currentSchedule = this.state.completeSchedule[this.state.scheduleIdx]
      let _schedule = [];
      for(let i = 0; i < currentSchedule.length; i++){
        _schedule.push(
          <Hammer key={i.toString()} onPan={this.handlePan} options={panOptions}>
            <div className={"scheduleSubject " + currentSchedule[i].color}>
              <span className="header">{currentSchedule[i].subject}</span>
              <span className="subheader">{currentSchedule[i].room}</span>
            </div>
          </Hammer>
        )
      }
      return _schedule;
    }

    return (
      <div className="routeComponent">
        <div className="section">
          <h1>Stundenplan</h1>
          <div className="content">
            <div className="changeSchedule">
              <div onClick={() => this.changeSchedule(0)} className={this.state.scheduleIdx === 0 ? 'active': ''}><span>Mo</span></div>
              <div onClick={() => this.changeSchedule(1)} className={this.state.scheduleIdx === 1 ? 'active': ''}><span>Di</span></div>
              <div onClick={() => this.changeSchedule(2)} className={this.state.scheduleIdx === 2 ? 'active': ''}><span>Mi</span></div>
              <div onClick={() => this.changeSchedule(3)} className={this.state.scheduleIdx === 3 ? 'active': ''}><span>Do</span></div>
              <div onClick={() => this.changeSchedule(4)} className={this.state.scheduleIdx === 4 ? 'active': ''}><span>Fr</span></div>
            </div>
            {this.createSchedule()}
          </div>
        </div>
        <div className="section">
          <h1>Ausstehende Aufgaben</h1>
          <div className="content">
            <div className="task">
              <span className="title">Du hast alle Aufgaben erledigt!</span>
            </div>
          </div>
        </div>
        <div style={{height: '1000px'}}></div>
      </div>
    )
  }
}

export default Home;