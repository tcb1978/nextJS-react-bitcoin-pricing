import React, { Component, Fragment } from 'react'

export default class Prices extends Component {
  state = {
    currency: 'USD'
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }

  render() {
    const key = this.props.bpi
    let list = ''
    if (this.state.currency === 'USD') {
      list = <li className="list-group-item">
        Bitcoin rate for {key.USD.description}: <span className="badge badge-primary">{key.USD.code}</span> <strong>{key.USD.rate}</strong>
      </li>
    } else if(this.state.currency === 'EUR') {
      list = <li className="list-group-item">
        Bitcoin rate for {key.EUR.description}: <span className="badge badge-primary">{key.EUR.code}</span> <strong>{key.EUR.rate}</strong>
      </li>
    } else if(this.state.currency === 'GBP') {
      list = <li className="list-group-item">
        Bitcoin rate for {key.GBP.description}: <span className="badge badge-primary">{key.GBP.code}</span> <strong>{key.GBP.rate}</strong>
      </li>
    }
    return (
      <Fragment>
        <label className="form-label">Region
          <select
            name="currency"
            className="form-control"
            onChange={this.handleChange}
          >
            <option value="default">select a region</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
        <ul className="list-group">
          {list}
        </ul>
      </Fragment>
    )
  }
}
