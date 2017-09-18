import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div id='error_explanation'>
    {Object.keys(formErrors).map((formErrorField) => {
      return(
        formErrors[formErrorField].map((error) => {
          return(
            <p>{formErrorField} {error}</p>
          )
        })
      )
    })}
  </div>
