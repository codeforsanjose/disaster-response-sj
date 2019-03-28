import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'

import AdminContainer from './AdminContainer.js';
import { validateEmail, isInvalid } from '../../Utilities/validationUtilities'

it('is able to import validation related modules', () => {
  expect(validateEmail).toBeTruthy();
  expect(isInvalid).toBeTruthy();
  expect(AdminContainer).toBeTruthy();
});

it('validates empty strings', () => {
  const adminState = {
    postDetails: {
      email: '',
      longitude: '',
      latitude: '',
      radius: '',
      other: '',
      updates: '',
      updateItem: ''
    }
  };

  const validatePostDetails = () => {
      return Object.keys(adminState.postDetails).reduce( (accumulator, postField) => {
          // check postfield validity and returns corresponding error message if invalid
          let current_validation_error = isInvalid.withDefault( postField, adminState.postDetails[postField] );
          console.log(current_validation_error);
          if ( current_validation_error ) {
            accumulator[postField] = current_validation_error;
          }
          return accumulator;
      }, {});
  };

  expect( validatePostDetails(adminState.postDetails) ).toBeTruthy();
});
