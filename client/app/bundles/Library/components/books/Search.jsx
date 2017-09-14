import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { searchBooks} from '../../actions/books/myLibraryActionCreators';

export default class Search extends Component {
  handleSearch(){
    const query = ReactDOM.findDOMNode(this.refs.query).value;
    const self = this;
    $.ajax({
      url: '',
      data: { query: query },
      success: (data) => {
        self.props.handleSearch(data);
      },
      error: (xhr, status, error) => {
        alert('Search error: ', status, xhr, error);
      }
    });
  }

  render(){
    return(
      <input value={this.props.search}
             type="text"
             className="form-control"
             placeholder="Type search phrase here..."
             ref='query' />
    );
  }
}
