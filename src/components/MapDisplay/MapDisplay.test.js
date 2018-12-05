import React from 'react';
import ReactDOM from 'react-dom';
import MapDisplay from './MapDisplay';

import renderer from 'react-test-renderer';

it('MapDisplay renders correctly', () => {
    const tree = renderer
    .create(<MapDisplay />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});