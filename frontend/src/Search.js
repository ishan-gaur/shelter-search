import React, {Component} from 'react';
import './index.css';
import LocationSelector from './LocationSelector';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { shelters: [] };
      }

      handleSubmit = async (shelters) => {
        this.setState({ shelters: shelters });
      }

      render() {
        return (
        <div className="bg-gray-100 min-h-screen max-h-full w-screen grid place-content-center">
            <LocationSelector onSubmit={this.handleSubmit} className="mx-auto"/>
            <div className="grid place-content-center mx-auto w-1/2 ">
                <ul className="list-none">
                    {this.state.shelters.map((shelter) => {
                            console.log(shelter.name);
                            return <ShelterItem key={shelter.name} value={shelter} />;
                        }
                    )}
                </ul>
            </div>
        </div>
        )
      }
}

function ShelterItem(props) {
    const shelter = props.value;
    return (
        <li className="py-4">
            <div>
                <span className="text-2xl font-bold">{shelter.name}</span><br/>
                <span className="text-lg font-semibold">Phone Number: </span><span className="text-lg">{shelter.number}</span><br/>
                <span className="text-lg font-semibold">Address: </span><span className="text-lg">{shelter.address}</span><br/>
            </div>
            <div>
                <span className="text-lg font-semibold">Description:</span><br/>
                <span>{shelter.description}</span>
            </div>
        </li>
    );
}

export default Search;