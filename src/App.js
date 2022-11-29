import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Header: '',
      Message: '',
      
    };
  }
  resetForm = () => { 
    document.getElementById("MyForm").reset();
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { Header, Message } = this.state;

    const Notification = {
      Header,
      Message

  
    };
    
    axios
      .post('http://localhost:3001/', Notification)
      .then(() => console.log('Send Message'))
      .catch(err => {
        console.error(err);
      });
     this.resetForm();
  };

    
  

  render() {
    return (<div className='container'>
      <form onSubmit={this.handleSubmit} id='MyForm' >
      
        <input
          type="text"
          className="form-control"
          name="Header"
          placeholder=" Header Notification"
          onChange={this.handleInputChange}
        />
      
      <br />
        <input
          type="text"
          className="form-control"
          name="Message"
          placeholder=" Your Message"
          onChange={this.handleInputChange}
        />
      <br />
      
        <button className="btn btn-success" type="submit">
          Create
        </button>
    </form> 
    </div>);
  }
}
export default Create;