import React, { Component } from 'react';

export default class BookTable extends Component {
  render() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2">Title</th>
            <th className="col-md-2">Author</th>
            <th className="col-md-2">Genre</th>
            <th className="col-md-2">Publisher</th>
            <th className="col-md-4">Synopsis</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}
