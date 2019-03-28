import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'

import AdminContainer from './AdminContainer.js';
import { validateEmail, isInvalid } from '../../Utilities/validationUtilities'

const validatePostDetails = (details) => {
  /*
  Executing function for validations taken from AdminContainer and copied here
  to make it easier to test just this isolated part of the container.
  modified slightly to use passed in postDetails data for validating.
  Args: details (obj) - a adminState.postDetails mockup object to validate
  Return: errors (obj) - obj containing found errors w/ structure:
                        {postField: 'Corresponding error message for this field'}
  */
    return Object.keys(details).reduce( (accumulator, postField) => {
        // check postfield validity and returns corresponding error message if invalid
        let current_validation_error = isInvalid.withDefault( postField, details[postField] );
        //console.log(current_validation_error);
        if ( current_validation_error ) {
          accumulator[postField] = current_validation_error;
        }
        return accumulator;
    }, {});
};

it('is able to import validation related modules', () => {
  expect(validateEmail).toBeTruthy();
  expect(isInvalid).toBeTruthy();
  expect(AdminContainer).toBeTruthy();
});

it('validates empty strings and undefineds fields', () => {
  let adminState = {
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

  expect( validatePostDetails(adminState.postDetails) ).toBeTruthy();
  for (let detail in adminState.postDetails) {
    detail = undefined;
  }
  expect( validatePostDetails(adminState.postDetails) ).toBeTruthy();
});

it('produces no errors if all fields are valid', () => {
  let adminState = {
    postDetails: {
      email: 'johnny@john.com',
      longitude: -120.123123,
      latitude: 36.17239871,
      radius: 5,
      other: 'Testing',
      updates: '',
      updateItem: ''
    }
  };
  console.log(validatePostDetails(adminState.postDetails));
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject({});
});
