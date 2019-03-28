import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'

import AdminContainer from './AdminContainer.js';
import { validateEmail, isInvalid } from '../../Utilities/validationUtilities'

let adminState = {};

const setAdminState = (type) => {

  if (type == 'valid') {
    adminState = {
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
  } else {
    adminState = {
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
  }
};

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

beforeEach( () => {
  setAdminState('valid');
});

it('is able to import validation related modules', () => {
  expect(validateEmail).toBeTruthy();
  expect(isInvalid).toBeTruthy();
  expect(AdminContainer).toBeTruthy();
});

it('validates all fields for empty strings and undefined except updates and updateitem', () => {
  setAdminState('invalid');
  let length_without_update_fields = Object.keys(adminState.postDetails).length - 2;
  expect( Object.keys(validatePostDetails(adminState.postDetails)) ).toHaveLength(length_without_update_fields);

  for (let detail in adminState.postDetails) {
    detail = undefined;
  }
  expect( validatePostDetails(adminState.postDetails) ).toBeTruthy();
});

it('produces no errors if all fields are valid', () => {
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject({});
});

it('coerces string type numbers to actual numbers', () => {
  adminState.postDetails.longitude = adminState.postDetails.longitude.toString();
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject({});
});

it('validates email addresses correctly', () => {
  let email_error = {email:'Invalid email, please re-enter valid email'};
  adminState.postDetails.email = 'johnnyjohn.com';
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(email_error);
  adminState.postDetails.email = '.';
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(email_error);
  adminState.postDetails.email = 'adfasdfasd';
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(email_error);
  adminState.postDetails.email = '@';
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(email_error);
});

it('validates latitude correctly', () => {
  let lat_error = {latitude:'Invalid latitude, please re-enter valid longitude between 34 & 41'};
  adminState.postDetails.latitude = 45;
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(lat_error);
  adminState.postDetails.latitude = 20.123;
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(lat_error);
  adminState.postDetails.latitude = 'abc';
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(lat_error);
});

it('validates longitude correctly', () => {
  let lon_error = {longitude:'Invalid longitude, please re-enter valid longitude between -124 & -118'};
  adminState.postDetails.longitude = -13312;
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(lon_error);
  adminState.postDetails.longitude = 10;
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(lon_error);
  adminState.postDetails.longitude = 'beans';
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(lon_error);
});

it('validates radius correctly', () => {
  let rad_error = {radius:'Invalid radius, please re-enter valid radius between 0 & 10'};
  adminState.postDetails.radius = 0;
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(rad_error);
  adminState.postDetails.radius = 15;
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(rad_error);
  adminState.postDetails.radius = 'terry pratchet';
  expect( validatePostDetails(adminState.postDetails) ).toMatchObject(rad_error);
});
