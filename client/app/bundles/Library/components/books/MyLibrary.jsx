// import PropTypes from 'prop-types';
// import React from 'react';
//
// const MyLibrary = ({ name, updateName }) => (
//   <div>
//     <h3>
//       Hello, {name}!
//     </h3>
//     <hr />
//     <form >
//       <label htmlFor="name">
//         Say "yo!" to:
//       </label>
//       <input
//         id="name"
//         type="text"
//         value={name}
//         onChange={(e) => updateName(e.target.value)}
//       />
//     </form>
//   </div>
// );
//
// MyLibrary.propTypes = {
//   name: PropTypes.string.isRequired,
//   updateName: PropTypes.func.isRequired,
// };
//
// export default MyLibrary;

//-----------------------------------------------------------------------------
import React, { Component } from 'react';
import BookTable from './book_table';

export default class MyLibrary extends Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJs Library</h1>
          <p>by M.Rizki</p>
        </div>

        <div className="row">
          <div className="col-md-12">
            <BookTable />
          </div>
        </div>
      </div>
    );
  }
}
