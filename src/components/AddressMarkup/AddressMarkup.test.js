import React from 'react';
import ReactDOM from 'react-dom';
import { getAddressMarkup } from './AddressMarkup';

import renderer from 'react-test-renderer';

it('AddressMarkup renders correctly', () => {
    const tree = renderer
    .create(getAddressMarkup())
    .toJSON();
    expect(tree).toMatchSnapshot();
});