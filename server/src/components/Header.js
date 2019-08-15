import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      // <nav>
      //   <div className="nav-wrapper" />
      //   <a className="left brand-logo">Emaily</a>
      //   <ul id="nav-mobile" class="right hide-on-med-and-down">
      //     <li>
      //       <a>Login With Google</a>
      //     </li>
      //   </ul>
      // </nav>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo left">
            Emaily
          </a>
          <ul>
            <li href="#" class="tab right">
              <a>Log In With Google</a>
            </li>
            {/* id="nav-mobile" class="right hide-on-med-and-down" */}
          </ul>
          {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a>Login With Google</a>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}

export default Header;
