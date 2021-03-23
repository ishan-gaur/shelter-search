import React, {Component} from 'react';
import './index.css';
const axios = require('axios')

class LocationSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { city: 'City Name', state: 'State Abbreviation' };
  }

  handleChange = (event) => {
    (event.target.id === 'city') ? this.setState({ city: event.target.value })
                                 : this.setState({ state: event.target.value });
    console.log(this.state);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      '/shelter?' + 
      'city=' + encodeURIComponent(this.state.city) + 
      '&state=' + encodeURIComponent(this.state.state))
    const shelters = response.data.shelters;
    console.log(shelters);
    this.props.onSubmit(shelters);
  }

  render() {
    return (
      <div className="w-screen grid place-content-center mx-auto">
        <form onSubmit={this.handleSubmit} className="pb-12">
          <FormElem name="city" value={this.state.city} handleChange={this.handleChange} />
          <FormElem name="state" value={this.state.state} handleChange={this.handleChange} />
          <SubmitButton name="search"/>
        </form>
      </div>
    );
  }
}

function FormElem(props) {
  return (
    <div className="py-4 space-y-3">
      <label className="pl-3 text-2xl uppercase tracking-wider font-semibold">{props.name}</label><br/>
      <input type="text" id={props.name} value={props.value} onChange={props.handleChange} 
        className="pl-3 py-2 tracking-wide rounded-md w-64 text-gray-500 focus:text-gray-800"/>
    </div>
  );
}

function SubmitButton(props) {
  return (
    <div className="py-3">
      <input type="submit" value={props.name} className="inline-block px-3 py-1.5 text-lg uppercase tracking-wide 
           bg-blue-600 text-white rounded-lg hover:bg-blue-700" />
    </div>
  );
}

export default LocationSelector;