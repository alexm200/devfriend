import React, { Component } from 'react';
import messageStyles from '../../../styles/modules/message.module.scss';
import { NavLink } from "react-router-dom";

class Message extends Component {
  render() {
    return (
      <div>
        <div style={{display: this.props.message === '' ? "none" : "block"}} className={this.props.type === 'success' ? messageStyles.success : messageStyles.error}>
            { 
                this.props.message.includes("{LoginLink}") && this.props.message.slice(0, this.props.message.indexOf("{LoginLink}"))
            }
            {
                this.props.message.includes("{LoginLink}") && <NavLink to="/login">Login</NavLink>
            }
            { 
                this.props.message.includes("{LoginLink}") &&
                this.props.message.slice(this.props.message.indexOf("{LoginLink}") + "{LoginLink}".length)
            }
            {
                this.props.message.includes("{LoginLink}") || this.props.message
            }
        </div>        
      </div>
    );
  }
}

export default Message;