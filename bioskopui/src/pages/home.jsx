import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {Carousel} from 'react-bootstrap';

// eslint-disable-next-line
const url = "http://localhost:2000";

class Home extends Component {
  state = {
    dataMovies: []
  };

  componentDidMount() {
    Axios.get(`${url}/movies`)
      .then(res => {
        this.setState({ dataMovies: res.data });
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderMovies = () => {
    return this.state.dataMovies.map((val, index) => {
      return (
        
        <div key={index} className="col-md-3 py-5 pr-3 pl-1">
          <div className="card kartu" style={{ width: "100%" }}>
            <div className="gambaar1">
              <Link to={`/moviedetail/${val.id}`}>
                <img
                  src={val.image}
                  className="card-img-top kartu gambar"
                  alt="..."
                />
              </Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
      <Carousel>
          <Carousel.Item>
          <Link to={`/moviedetail/1`}>
              <img className="d-block w-100" src="https://media.21cineplex.com/webcontent/gallery/pictures/157424629656226_925x527.jpg" height="600px" alt="First slide"/>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link to={`/moviedetail/2`}>
              <img className="d-block w-100" src="http://movieden.net/wp-content/uploads/2019/11/film-last-christmas-poster.jpg" height="600px" alt="First slide"/>
          </Link>
          </Carousel.Item>
          
          <Carousel.Item>
          <Link to={`/moviedetail/3`}>
              <img className="d-block w-100" src="https://cdn2.tstatic.net/jogja/foto/bank/images/poster-film-habibie-ainun-3.jpg" height="600px" alt="First slide"/>
          </Link>
          </Carousel.Item>
          
      </Carousel>
      <div className="mx-5">
        <div
        
          className="row py-5 "
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          {this.renderMovies()}
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
