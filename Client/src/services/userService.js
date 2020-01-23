// @flow
import axios, { AxiosPromise } from 'axios';
import { User } from './modelService';
const url_base = 'http://localhost:4000/user';

const config = {
  headers: {
    'x-access-token': localStorage.getItem('token'),
  },
};

export class UserService {
  static getMyProfile(): AxiosPromise<User> {
    let url = url_base + '/myprofile';
    return axios.get(url, config);
  }

  static deleteUser(id: number): AxiosPromise<User> {
    let url = url_base + '/' + id;
    return axios.delete<Object>(url, config);
  }

  static getMyEvents(): AxiosPromise<Event[]> {
    let url = url_base + '/myevents';
    return axios.get(url, config);
  }

  static getEvent(event_id: number): AxiosPromise<Event> {
    let url = url_base + '/myevents/' + event_id;
    return axios.get(url, config);
  }

  static getArtists(event_id: number): AxiosPromise<Artist[]> {
    let url = url_base + '/artist/' + event_id;
    return axios.get(url, config);
  }

  // Get all riders on an event
  static getRiders(event_id: number): AxiosPromise<Event> {
    let url = url_base + '/event/' + event_id + '/riders';
    return axios.get(url, config);
  }

  static editUser(user: User): AxiosPromise<User> {
    let url = url_base + '/myprofile';
    return axios.put<Object>(url, user, config);
  }

  static editArtistname(artist_name: string): AxiosPromise<User> {
    let url = url_base + '/artistname';
    return axios.put<Object>(url, { artist_name }, config);
  }

  static getMyRiders(event_id: number): AxiosPromise<Rider> {
    let url = url_base + '/event/rider/' + event_id;
    return axios.get<Object>(url, config);
  }

  static postRider(rider_file: string, event_id: number) {
    let url = url_base + '/event/' + event_id + '/riders';
    return axios.post(url, { rider_file }, config);
  }
}
