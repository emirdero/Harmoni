//@flow

// Object for sending Event
export class Event {
  constructor(name: string) {
    this.name = name;
  }
  //Event Information
  event_id: number;
  name: string;
  description: string;
  image: string;
  start: string;
  end: string;
  status: string;
  is_public: boolean = false;
  location_id: number;
  address: string;
  venue: string;

  location_name: string;
  postcode: number;

  // Event Location
  location: Location = null;
  // Event Users
  users: User[] = null;
}

// Object for sending Location
export class Location {
  constructor(name: string, postcode: number, address: string) {
    this.name = name;
    this.postcode = postcode;
    this.address = address;
  }

  name: string;
  postcode: number;
  address: string;
  location_id: number = null;
}

// Object for sending User
export class User {
  constructor(email: string, name: number) {
    this.email = email;
    this.name = name;
  }

  email: string;
  name: string;
  tlf: string;
  image: string;
  description: string;
  user_id: number;
}

// Object for sending Artist
export class Artist {
  constructor(user_id: number, artist_name: number) {
    this.user_id = user_id;
    this.artist_name = artist_name;
  }
  user_id: number;
  artist_name: string;
  image: string;
  description: string;
}

// Object for sending Organiser
export class Organiser {
  constructor(organiser_email: string, name: string) {
    this.organiser_email = organiser_email;
    this.name = name;
  }
  organiser_email: string;
  name: string;
  image: string;
  description: string;
  tlf: string;
  website: string;
  address: string;
  eventsFinished: number;
  eventsComing: number;
}

// Object for sending ticket type
export class TicketType {
  constructor(name: string) {
    this.name = name;
  }
  //Ticket type Information
  name: string;
  description: string;
  ticket_type_id: number;
  organiser_id: number;
  price: number;
}
