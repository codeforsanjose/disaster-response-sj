import React from 'react';
import ReactDOM from 'react-dom';
import DisasterPostDetails from './DisasterPostDetails';

import renderer from 'react-test-renderer';

it('DisasterPostDetails renders correctly', () => {
    const tree = renderer
    .create(<DisasterPostDetails />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});