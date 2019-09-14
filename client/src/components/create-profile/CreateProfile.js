import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { getCurrentProfile } from "../../actions/profileActions";
// import Spinner from "../common/spinner";

export class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
  }

  render() {
    return <div></div>;
  }
}

export default connect(null)(CreateProfile);
