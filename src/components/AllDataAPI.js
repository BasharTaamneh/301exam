import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Datacards from './ApiCards';
import axios from 'axios';


class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Apidata: [],
        }
    }

    componentDidMount = async () => {
        let thdApiData = await axios.get(`${process.env.REACT_APP_SERVER}/getapidata?`);
        await this.setState({
            Apidata: thdApiData.data
        });
        // console.log('dd', this.state.Apidata);
    }

    addTofavorite = async (item) => {
        let Favdata = {
            email:this.props.auth0.user.email,
            src: item.src,
            description: item.description,
        }
        await axios.post(`${process.env.REACT_APP_SERVER}/addFav?`, Favdata);
    }

    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                <Datacards addTofavorite={this.addTofavorite} Apidata={this.state.Apidata} />
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
