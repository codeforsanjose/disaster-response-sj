import React from 'react';
import ReactDOM from 'react-dom';
import DisasterModalPostDetails from './DisasterModalPostDetails';

import renderer from 'react-test-renderer';

it('DisasterModalPostDetails renders correctly', () => {
    const tree = renderer
    .create(<DisasterModalPostDetails />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});