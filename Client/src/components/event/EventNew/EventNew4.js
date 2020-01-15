//@flow
import React from 'react';
import { Component } from 'react';
import './stylesheet.css';
import { string } from 'prop-types';
import { Artist, Event } from '../../../services/modelService';
import { OrganiserService } from '../../../services/organiserService';
import DownloadFile from '../../DownloadFile/DownloadFile';
import UploadContract from '../../Upload/UploadContract';

type State = {
  event: Event,
  artists: Artist[],
};
type Props = {};

class EventNew4 extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      event: new Event(),
      artists: [],
    };
  }
  componentDidMount(): * {
    // Check if the user is currently writing an event, if so load inputs with data
    if (localStorage.getItem('curr_event') !== null) {
      console.log('Bruker i arr. henter data. id: ' + localStorage.getItem('curr_event'));
      OrganiserService.getEvent(localStorage.getItem('curr_event')).then(response => {
        let data = response.data;
        this.setState({ event: data });
        this.formatTime();
        OrganiserService.getArtists(data.event_id).then(resp => {
          this.setState({ artists: resp.data });
          console.log(this.state.artists);
        });
      });
    }
  }

  render() {
    return (
      <div class="card" id="cardnewevent">
        <div class="createEvent">
          <h2 class="neweventtitle">Opprett arrangement</h2>
          {/*<form>*/}
          <div class="form-row">
            <p>Legg til artister på arrangementet:</p>
          </div>
          <div className="form-group text-center ml-5 mr-5">
            <label htmlFor="inputEmail1" id="loginText">
              Artistens epost-addresse:
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Skriv e-mail"
            />
            <button type="button" class="btn btn-outline-secondary" onClick={() => this.invite()}>
              Inviter artist
            </button>
          </div>
          <div>
            <button onClick={() => this.back()} class="btn btn-success" id="backbtn">
              Tilbake
            </button>
            <button onClick={() => this.next()} class="btn btn-success" id="nextbtn">
              Neste
            </button>
          </div>
          {/*</form>*/}
        </div>
      </div>
    );
  }
  invite() {
    let email = document.getElementById('email').value;
    // TODO validate email
    OrganiserService.inviteArtist(email, this.state.event.event_id)
      .then(resp => {
        console.log(resp);
        window.location.reload();
      })
      .catch((error: Error) => alert('Artist allerede lagt til i arrangement'));
  }
  formatTime() {
    if (this.state.event.start !== null) {
      let d = this.state.event.start.substring(0, 10);
      let h = this.state.event.start.substring(11, 16);
      this.state.event.start = d + ' ' + h + ':00';
    }
    if (this.state.event.end !== null) {
      let d = this.state.event.end.substring(0, 10);
      let h = this.state.event.end.substring(11, 16);
      this.state.event.end = d + ' ' + h + ':00';
    }
  }
  back() {
    window.location = '/newevent3';
  }
  next() {}
}
export default EventNew4;
