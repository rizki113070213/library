import React, { Component } from 'react';
import Book from './Book';

export default class BookTable extends Component {
  render(){
    books = this.props.bookTable;
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
        <Book books={books} />
      </table>
    );
  }
}
