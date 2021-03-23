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
            <span className="text-xl font-bold">{shelter.name}</span><br/>
            <span>{shelter.number}</span><br/>
            <span>{shelter.address}</span><br/>
            <span>{shelter.description}</span>
        </li>
    );
}

export default Search;