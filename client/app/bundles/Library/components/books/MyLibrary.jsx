import _ from 'lodash';
import React, { Component } from 'react';
import BookTable from './BookTable';
import Search from './Search';
import NewBook from './NewBook';
import update from 'immutability-helper';

export default class MyLibrary extends Component {
  constructor(props, railsContext){
    super(props);
    this.state = {
      books: this.props.books,
      search: '',
      title: '',
      author: '',
      genre: '',
      publisher: '',
      synopsis: '',
    }
  }

  handleSearch(e){
    this.setState({search: e.target.value});
  }

  handleUserInput(obj){
    this.setState(obj);
  }

  handleFormSubmit(){
    const book = {title: this.state.title,
                  author: this.state.author,
                  genre: this.state.genre,
                  publisher: this.state.publisher,
                  synopsis: this.state.synopsis};
    $.post('/books',
           {book: book})
           .done((data) => {
             this.addNewBook(data);
           });
  }

  addNewBook(book){
    const books = update(this.state.books, {$push: [book]});
    this.setState({books: books});
  }

  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJs Library</h1>
          <p>by M.Rizki<sup>*react_on_rails with redux</sup></p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Search />
          </div>
          <div className="col-md-8">
            <NewBook title={this.state.title}
                     author={this.state.author}
                     genre={this.state.genre}
                     publisher={this.state.publisher}
                     synopsis={this.state.synopsis}
                     onUserInput={(obj) => this.handleUserInput(obj)}
                     onFormSubmit={() => this.handleFormSubmit()} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <BookTable books={this.state.books}/>
          </div>
        </div>
      </div>
    );
  }
}
