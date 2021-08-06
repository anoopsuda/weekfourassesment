import React, { Component } from 'react'
// import RenderLeader from "./RenderLeader"
import Menu from "./Dishesmenu";
import { DISHES } from "./dishes";

export class MenuComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { dishes: DISHES };
  }

  render() {
    return (
      <div>
        {/* <RenderLeader /> */}
        <Menu dishes={this.state.dishes} />
      </div>
    )
  }
}

export default MenuComponent
