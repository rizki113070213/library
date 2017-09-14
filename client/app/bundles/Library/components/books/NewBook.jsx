import React, { Component } from 'react';

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
      <form className='form-inline'>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='title'
                 placeholder='Title'
                 ref='title' />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='author'
                 placeholder='Author'
                 ref='author' />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='genre'
                 placeholder='Genre'
                 ref='genre' />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='publisher'
                 placeholder='Publisher'
                 ref='publisher' />
        </div>
        <div className='form-group'>
          <input type='text'
                 className='form-control'
                 name='synopsis'
                 placeholder='Synopsis'
                 ref='synopsis' />
        </div>
        <button type='submit' className='btn btn-primary'>Add</button>
      </form>
    );
  }
}
