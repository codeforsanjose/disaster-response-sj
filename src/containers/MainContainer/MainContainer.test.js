import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './MainContainer';

import renderer from 'react-test-renderer';

it('MainContainer renders correctly', () => {
    const tree = renderer
    .create(<MainContainer />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});