import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewBook extends Component{
  handleChange(e){
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render(){
    return(
      <form className='form-inline'
            onSubmit={(e) => this.handleSubmit(e)}
      >
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='title'
                 placeholder='Title'
                 onChange={(e) => this.handleChange(e)} />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='author'
                 placeholder='Author'
                 onChange={(e) => this.handleChange(e)} />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='genre'
                 placeholder='Genre'
                 onChange={(e) => this.handleChange(e)} />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='publisher'
                 placeholder='Publisher'
                 onChange={(e) => this.handleChange(e)} />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='synopsis'
                 placeholder='Synopsis'
                 onChange={(e) => this.handleChange(e)} />
        </div>
        <button type='submit' className='btn btn-primary'>Add</button>
      </form>
    );
  }
}

NewBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
};
