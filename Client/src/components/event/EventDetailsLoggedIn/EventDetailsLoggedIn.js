//@flow

import * as React from 'react';
import { Component } from 'react';
import './stylesheet.css';
import { Event } from '../../../services/modelService.js';
import { OrganiserService } from '../../../services/organiserService';

type State = {
  event: Event,
};

type Props = {
  match: { params: { id: number } },
};

export default class EventDetailsLoggedIn extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      event: new Event(),
    };
  }
  render() {
    return (
      <div class="card" id="carddetailsevent">
        <div id="loginBox">
          <div id="EventDetailsLITable">
            <img
              id="EventPicLI"
              src={'http://localhost:4000/public/file/' + this.state.event.image}
              class="img-fluid"
              alt="Eventbilde"
            ></img>
            <p class="text display-4">{this.state.event.name}</p>

            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th class="text-right" scope="row">
                    Dato:
                  </th>
                  <td class="text-left">{this.state.event.start}</td>
                  <td class="text-left">{this.state.event.end}</td>
                </tr>
                <tr>
                  <th class="text-right" scope="row">
                    Sted:
                  </th>
                  <td class="text-left">{this.state.event.venue}</td>
                </tr>
                <tr>
                  <th class="text-right" scope="row">
                    Adresse:
                  </th>
                  <td class="text-left">{this.state.event.address}</td>
                </tr>
                <tr>
                  <th class="text-right" scope="row">
                    Lineup:
                  </th>
                  <td class="text-left">Justin BIIIIBER</td>
                </tr>
                <tr>
                  <th class="text-right" scope="row">
                    Kontrakt(er):
                  </th>
                  <td class="text-left">Kontrakt.pdf</td>
                </tr>
                <tr>
                  <th class="text-right" scope="row">
                    Riders:
                  </th>
                  <td class="text-left">Rider.pdf</td>
                </tr>
                <tr>
                  <th class="text-right" scope="row">
                    Synlig for utenforstående:
                  </th>
                  <td class="text-left">Ja</td>
                </tr>
                <tr>
                  <th class="text-right" scope="row">
                    Status:
                  </th>
                  <td class="text-left">Klar til å gjennomføre</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="btn btn-success bg-green" onClick={() => this.edit()}>
            {' '}
            ENDRE ARRANGEMENT <button class="btn btn-success bg-green"> ENDRE ARRANGEMENT </button>
            <button class="btn btn-danger bg-green" onClick={() => this.delete()}>
              {' '}
              SLETT ARRANGEMENT{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    OrganiserService.getEvent(this.props.match.params.id)
      .then(res => {
        let event: any = res.data;
        console.log(res);
        console.log('Bilde: ' + this.state.event.image);
        this.setState({ event: event });
      })
      .catch(error => console.error(error));
  }

  edit() {
    localStorage.setItem('curr_event', this.state.event.event_id);
    window.location = '/newevent';
  }
  delete() {
    OrganiserService.deleteEvent(this.props.match.params.id)
      .then(response => {
        window.location = '/eventdeleted';
      })
      .catch(error => console.error(error));
  }
}
