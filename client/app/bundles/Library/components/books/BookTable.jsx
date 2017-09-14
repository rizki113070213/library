import React, { Component } from 'react';
import Book from './Book';
import _ from 'lodash';

export default class BookTable extends Component {
  renderList(){
    return _.map(this.props.books, book => {
      return(
        <Book book={book} key={book.id}  />
      );
    });
  }

  render(){
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Title</th>
            <th className="col-md-2">Author</th>
            <th className="col-md-2">Genre</th>
            <th className="col-md-3">Publisher</th>
            <th className="col-md-2">Synopsis</th>
          </tr>
        </thead>
        {this.renderList()}
      </table>
    );
  }
}
