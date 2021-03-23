import React, {Component} from 'react';
import './index.css';

class LocationSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { city: 'Please enter your city...', state: 'Please enter your state...' };
  }

  handleChange = (event) => {
    (event.target.id === 'city') ? this.setState({ city: event.target.value })
                                 : this.setState({ state: event.target.value });
    console.log(this.state);
  }

  handleSubmit = (event) => {
    alert(this.state.city + ', ' + this.state.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="bg-gray-100 h-screen w-screen grid place-content-center">
        <form onSubmit={this.handleSubmit} className="pb-16">
          <div className="py-4 space-y-3">
            <label className="pl-3 text-2xl uppercase tracking-wider font-semibold">City</label><br/>
            <input type="text" id="city" value={this.state.city} onChange={this.handleChange}
                  className="pl-3 py-2 tracking-wide rounded-md w-64 text-gray-500 focus:text-gray-800"/>
          </div>
          <div className="py-4 space-y-3">
            <label className="pl-3 text-2xl uppercase tracking-wider font-semibold">State</label><br/>
            <input type="text" id="state" value={this.state.state} onChange={this.handleChange}
                  className="pl-3 py-2 tracking-wide rounded-md w-64 text-gray-500 focus:text-gray-800"/>
          </div>
          <div className="py-2">
            <input type="submit" value="Submit" className="inline-block px-3 py-1.5 text-lg uppercase tracking-wide bg-blue-600
                text-white rounded-lg hover:bg-blue-700" />
          </div>
        </form>
      </div>
    );
  }
}

export default LocationSelector;