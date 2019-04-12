import React from 'react';
import ReactDOM from 'react-dom';
import DisasterPosts from './DisasterPosts';

import renderer from 'react-test-renderer';

it('DisasterPost renders correctly', () => {
    const tree = renderer
    .create(<DisasterPosts />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});