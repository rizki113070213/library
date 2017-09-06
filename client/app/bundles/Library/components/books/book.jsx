import React, { Component } from 'react';

export default class Book extends Component {
  propTypes: {
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    synopsis: PropTypes.string
  }

  render(){
    return(
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{book.publisher}</td>
        <td>{book.synopsis}</td>
      </tr>
    );
  }
}
