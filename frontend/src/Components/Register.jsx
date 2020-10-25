import React from 'react';
import { toast } from 'react-toastify'

import { register } from '../connection/user.js'

export default class Login extends React.Component {

  state = {
    nickname: '',
    email: '',
    password: ''
  }

  changeInput = ({currentTarget}) => {
    this.setState({ [currentTarget.name]: currentTarget.value})
  }

  submitRegister = async (e) => {
    e.preventDefault()

    try {
      const data = await register(this.state.nickname, this.state.email, this.state.password)
      toast.success('Registered successfully.')
    } catch (ex) {
      toast.error('Error while registering.')
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="input-field col s6 offset-s3">
            <input id="nickname" name="nickname" type="text" onChange={this.changeInput}/>
            <label htmlFor="nickname">Nickname</label>
          </div>
          <div className="input-field col s6 offset-s3">
            <input id="email" name="email" type="email" onChange={this.changeInput}/>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-field col s6 offset-s3">
            <input id="password" name="password" type="password" onChange={this.changeInput}/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <a 
            className="waves-effect waves-light btn btn-large s2 offset-s5 col"
            onClick={this.submitRegister}
          >Register</a>
        </div>
        
      </React.Fragment>
    );
  }
}
