import React from 'react';
import ReactDOM from 'react-dom';
import { postInformationDetails } from './DisasterInformationMarkup';

import renderer from 'react-test-renderer';

it('postInformationDetails renders correctly', () => {
    const tree = renderer
    .create(postInformationDetails())
    .toJSON();
    expect(tree).toMatchSnapshot();
});