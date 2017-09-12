import React, { Component } from 'react';
import _ from 'lodash';

export default class Book extends Component {
  renderList(){
    return _.map(this.props.books, book => {
      return(
        <tr key={book.id} >
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.genre}</td>
          <td>{book.publisher}</td>
          <td>{book.synopsis}</td>
        </tr>
      );
    });
  }

  render(){
    return(
      <tbody>
        {this.renderList()}
      </tbody>
    );
  }
}
