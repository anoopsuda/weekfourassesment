import React, { Component } from "react";
// import { Card, CardBody, CardTitle } from "reactstrap";
import { LEADERS } from "./leaders";
import thumbnail from "../Assets/images/user.png";


export class RenderLeader extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes: LEADERS };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div className="col-lg-12 col-md-5 m-1">            
          <div className="media d-flex mb-4">
            <img className="thumb me-3" src={thumbnail} alt="Profile" />
            <div className="media-body ">
              <h3 className="mt-0">{dish.name}</h3>
              <h6>{dish.designation}</h6>
              <p>{dish.description}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2 className="border-bottom  py-3 mb-3">Corporate Leadership</h2>
        {menu}
              </div>
    );
  }
}

export default RenderLeader;
