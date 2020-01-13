// @flow
import * as React from 'react';
import { Component } from 'react';
import { CommunicationService } from '../../services/communicationService';
import './stylesheet.css';
import { string } from 'prop-types';

export default class Filter extends Component<{}, { sortOption: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      sortOption: string,
    };
  }

  render() {
    return (
      <div id="filterCard" class="card">
        <div class="card-body bg-light">
          <form onSubmit={this.handleSubmit}>
            <div class="container bg-light">
              <div class="col text-center border-bottom">
                <h2 class="mb-3">FILTER</h2>
                <h6 class="mb-3 text-success">SORTER ETTER...</h6>
                <div class="form-check text-left mb-3">
                  <label className="form-check-label" htmlFor="sortRadio1">
                    <input
                      type="radio"
                      id="sortRadio1"
                      value="e.start"
                      checked={this.state.sortOption === 'e.start'}
                      onChange={e => this.handleChangeSort(e)}
                    ></input>
                    Førstkommende
                  </label>
                  <label className="form-check-label" htmlFor="sortRadio2">
                    <input
                      type="radio"
                      id="sortRadio2"
                      value="e.event_id DESC"
                      checked={this.state.sortOption === 'e.event_id DESC'}
                      onChange={e => this.handleChangeSort(e)}
                    ></input>
                    Nyeste
                  </label>
                  <label className="form-check-label" htmlFor="sortRadio3">
                    <input
                      type="radio"
                      id="sortRadio3"
                      value="low_price"
                      checked={this.state.sortOption === 'low_price'}
                      onChange={e => this.handleChangeSort(e)}
                    ></input>
                    Laveste Pris
                  </label>
                </div>
              </div>
              <div class="col text-center border-bottom">
                <h6 class="mb-3 text-success">TYPE ARRANGEMENT</h6>
                <div class="form-check text-left mb-3">
                  <input type="checkbox" class="form-check-input" id="typeCheck1"></input>
                  <label class="form-check-label" for="typeCheck1">
                    Rock
                  </label>
                  <input type="checkbox" class="form-check-input" id="typeCheck2"></input>
                  <label class="form-check-label" for="typeCheck2">
                    Pop
                  </label>
                  <input type="checkbox" class="form-check-input" id="typeCheck3"></input>
                  <label class="form-check-label" for="typeCheck3">
                    Klassisk
                  </label>
                </div>
              </div>
              <div class="col text-center border-bottom">
                <h6 class="mb-3 text-success">STED</h6>
                <div class="form-check text-left mb-3">
                  <input type="checkbox" class="form-check-input" id="placeCheck1"></input>
                  <label class="form-check-label" for="placeCheck1">
                    Trondheim Spektrum
                  </label>
                  <input type="checkbox" class="form-check-input" id="placeCheck2"></input>
                  <label class="form-check-label" for="placeCheck2">
                    Sukkerhuset
                  </label>
                  <input type="checkbox" class="form-check-input" id="placeCheck3"></input>
                  <label class="form-check-label" for="placeCheck3">
                    Olavshallen
                  </label>
                </div>
              </div>
              <div class="col text-center border-bottom">
                <h6 class="mb-3 text-success">PRIS</h6>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">
                      Fra
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Fra"
                    aria-describedby="inputGroup-sizing-sm"
                  ></input>
                </div>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">
                      Til
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Til"
                    aria-describedby="inputGroup-sizing-sm"
                  ></input>
                </div>
              </div>
              <div class="col text-center mt-3">
                <button type="submit" class="btn btn-success">
                  Velg
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleChangeSort(e: any) {
    const target = e.target;
    let value: string = target.value;
    this.setState({ sortOption: value });
  }

  handleSubmit(event) {
    CommunicationService.setSortString(this.state.sortOption);
    event.preventDefault();
    alert(`du trykket på velg, denne knappen gjør for øyeblikket JÆVLIG MYE`);
  }

  sendState() {}
}
