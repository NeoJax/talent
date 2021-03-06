import React, { Component } from 'react';
import Blurb from '../../../components/blurb';
import './index.css';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h2 className="profile-name">{this.props.info.name}</h2>
        <div className="">
          { this.props.info.avatar_url ? (
            <img className="" src={this.props.info.avatar_url} alt="Profile picture" />
          ) : (
            <img src="/LearnerImage.png" alt="Profile picture" />
          )}
          <Blurb className="" info={this.props.info} />
        </div>
        <ul className="logo-list">
          <a href={`https://github.com/${this.props.github_handle}`} target="_blank"><li><img className="logo-list-image" src="/Logos/Github-Mark-64px.png" /></li></a>
          <a href={`https://www.linkedin.com/in/${this.props.linkedin_profile}`} target="_blank"><li><img className="logo-list-image" src="/Logos/square-linkedin-512.png" /></li></a>
          <a href={`https://www.twitter.com/${this.props.twitter}`} target="_blank"><li></li><img className="logo-list-image" src="/Logos/Twitter_Logo_Blue.png" /></a>
        </ul>
      </div>
    );
  }
}
