import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoritescards from './MyFavoritescards.js';
import axios from 'axios';
import Updatemodal from './Updatemodal.js';

class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Fvdata: [],
      show: false,
      Favid:""
    }
  }



  componentDidMount = async () => {
    let receivedfavData = await axios.get(`${process.env.REACT_APP_SERVER}/getFav?useremail=${this.props.auth0.user.email}`);
    await this.setState({
      Fvdata: receivedfavData.data
    });
  }

  deleteFavorite= async(itemid)=>{
    let datafterdelete= await axios.delete(`${process.env.REACT_APP_SERVER}/deleteFav/${itemid}?useremail=${this.props.auth0.user.email}`)
    await this.setState({
      Fvdata: datafterdelete.data
    });
  }

  showmodalhandle= async ()=>{
    await this.setState({
      show: !this.state.show,
    })
  }


  getfavid= async (itemid)=>{
    this.setState({
      Favid:itemid
    })
  }


  updatefav= async (e)=>{
    e.preventDefault();
    let updatedata={
      src:e.target.src.value,
      description:e.target.description.value
    }
    let updatedData= await axios.put(`${process.env.REACT_APP_SERVER}/updateFav/${this.state.Favid}?useremail=${this.props.auth0.user.email}`,updatedata)
    await this.setState({
      Fvdata: updatedData.data
    });
  }


  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <MyFavoritescards getfavid={this.getfavid} showmodalhandle={this.showmodalhandle} deleteFavorite={this.deleteFavorite} Fvdata={this.state.Fvdata} 
        />
        <Updatemodal updatefav={this.updatefav} Fvdata={this.state.Fvdata} showmodalhandle={this.showmodalhandle} show={this.state.show}/>
      </>
    )
  }
}

export default withAuth0(MyFavorites);

