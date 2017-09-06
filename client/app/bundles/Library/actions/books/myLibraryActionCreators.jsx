/* eslint-disable import/prefer-default-export */

import { MY_LIBRARY_NAME_UPDATE } from '../../constants/books/myLibraryConstants';

export const updateName = (text) => ({
  type: MY_LIBRARY_NAME_UPDATE,
  text,
});
