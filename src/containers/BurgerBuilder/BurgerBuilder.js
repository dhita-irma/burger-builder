import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Control</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
