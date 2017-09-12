import _ from 'lodash';
import React, { Component } from 'react';
// import BookTable from './BookTable';

export default class MyLibrary extends Component {
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

  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJs Library</h1>
          <p>by M.Rizki<sup>*react_on_rails with redux</sup></p>
        </div>

        <div className="row">
          <div className="col-md-12">
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
              <tbody>
                {this.renderList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // render() {
  //   var bookTable = this.props.books;
  //   return(
  //     <div className="container">
  //       <div className="jumbotron">
  //         <h1>ReactJs Library</h1>
  //         <p>by M.Rizki</p>
  //       </div>
  //
  //       <div className="row">
  //         <div className="col-md-12">
  //           <BookTable bookTable={bookTable}/>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}
