import React from 'react';
import ReactDOM from 'react-dom';
import DisasterPost from './DisasterPost';

import renderer from 'react-test-renderer';

it('DisasterPost renders correctly', () => {
    const tree = renderer
    .create(<DisasterPost />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});