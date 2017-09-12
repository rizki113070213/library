import { connect } from 'react-redux';
import MyLibrary from '../../components/books/MyLibrary';
import * as actions from '../../actions/books/myLibraryActionCreators';

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps, actions)(MyLibrary);

// import { connect } from 'react-redux';
// import Book from '../../components/books/Book';
// import * as actions from '../../actions/books/myLibraryActionCreators';
//
// const mapStateToProps = (state) => ({ books: state.books });
//
// export default connect(mapStateToProps, actions)(Book);
