import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class About extends Component {
  static propTypes = {}

  render() {
    return (
        <div class="accordion" id="accordionExample" style={{top:"56px",position:"relative"}}>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              About the App
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is a React News App - Newswalah.</strong><br></br> It is a News application made using React JS named Newswalah which keeps you updated with each and every news going around you in almost all domains.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              About the API
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>API used in this app - NewsAPI.</strong><br></br> NewsAPI is used in fetching the and showing news in this application.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              About the Developer
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Developer of the app - Harsh Prakash.</strong><br></br> Myself, Harsh Prakash, the developer of the News React App - Newswalah. I am a resident of India and currently pursuing my B.Tech from in RCC Institute of Information technology.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About

