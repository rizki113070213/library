import _ from 'lodash';
import React, { Component } from 'react';
import BookTable from './BookTable';
import Search from './Search';
import NewBook from './NewBook';
import { FormErrors } from './FormErrors';
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
      formErrors: {},
      // formValid: false
    }
  }

  handleSearch(e){
    this.setState({search: e.target.value});
  }

  handleUserInput(obj){
    this.setState(obj, this.validateForm);
  }

  validateForm(){
    this.setState({formValid: this.state.title.trim().length > 2});
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
             this.resetFormErrors();
           })
           .fail((response) => {
             console.log(response);
             this.setState({formErrors: response.responseJSON});
           });
  }

  addNewBook(book){
    const books = update(this.state.books, {$push: [book]});
    this.setState({books: books});
  }

  resetFormErrors(){
    this.setState({formErrors: {}})
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
                    //  formValid={this.state.formValid}
                     onUserInput={(obj) => this.handleUserInput(obj)}
                     onFormSubmit={() => this.handleFormSubmit()} />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <FormErrors formErrors={this.state.formErrors} />
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
