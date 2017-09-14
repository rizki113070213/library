import React, { Component } from 'react';

export default class Book extends Component {
  render(){
    return(
      <tbody>
        <tr>
          <td>{this.props.book.title}</td>
          <td>{this.props.book.author}</td>
          <td>{this.props.book.genre}</td>
          <td>{this.props.book.publisher}</td>
          <td>{this.props.book.synopsis}</td>
        </tr>
      </tbody>
    );
  }
}
