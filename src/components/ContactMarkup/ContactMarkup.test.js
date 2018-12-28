import React from 'react';
import ReactDOM from 'react-dom';
import { contactDetailsMarkup } from './ContactMarkup';

import renderer from 'react-test-renderer';

it('ContactMarkup renders correctly', () => {
    const tree = renderer
    .create(contactDetailsMarkup())
    .toJSON();
    expect(tree).toMatchSnapshot();
});