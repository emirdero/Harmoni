//@flow

import * as React from 'react';
import { Component } from 'react';
import './stylesheet.css';
import { Organiser } from '../../services/userService';
import { UserService } from '../../services/userService';
import { string } from 'prop-types';

export default class LogIn extends Component<{}, { email: string, password: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: string,
      password: string,
    };
  }

  render() {
    return (
      <div id="profileOrganiserCard" class="card ">
        <div class="card-body bg-light">
          <form>
            <p id="LoginTextH">LOGG INN</p>
            <div class="form-group text-center ml-5 mr-5">
              <label for="inputEmail1" id="loginText">
                E-mail
              </label>
              <input
                type="email"
                onChange={e => this.changeEmail(e)}
                name="email"
                class="form-control"
                id="inputEmail1"
                aria-describedby="emailHelp"
                placeholder="Skriv e-mail"
              ></input>
            </div>
            <div class="form-group text-center ml-5 mr-5">
              <label for="inputPassword1" id="loginText">
                Passord
              </label>
              <input
                type="password"
                onChange={e => this.changePassword(e)}
                name="password"
                class="form-control"
                id="inputPassword1"
                placeholder="Passord"
              ></input>
            </div>
            <div class="form-group text-center ml-5 mr-5">
              <label class="form-label" for="check1">
                <a href="/glemtpassord">Glemt passord?</a>
              </label>
              <button type="button" onClick={() => this.post()} class="btn btn-success mr-3 ml-3">
                Logg inn
              </button>
            </div>
            <div class="form-group text-center ml-5 mr-5">
              <label for="profileNew" class="form-label">
                Ikke registrert bruker? <a href="/register">Registrer deg her</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }

  changeEmail(e: any) {
    const target = e.target;
    let name: string = target.name;
    let value: string = target.value;
    this.setState({ email: value });
    console.log(this.state.email);
  }

  changePassword(e: any) {
    const target = e.target;
    let name: string = target.name;
    let value: string = target.value;
    this.setState({ password: value });
    console.log(this.state.password);
  }

  post() {
    UserService.logIn(this.state.email, this.state.password).then(() => {
      window.location = '/profile';
    });
  }
}
