import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import 'bulma/css/bulma.css'
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      picture: ""
    }
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseFacebook(response) {
    this.setState({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    })

    axios.post('http://localhost:1010/login', {
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    })

  }

  render() {
    return (
      <div className="App">

        <FacebookLogin
          appId="655943311472105"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}

        />
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={this.state.picture} alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.state.name}</p>
                <p className="subtitle is-6">{this.state.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
