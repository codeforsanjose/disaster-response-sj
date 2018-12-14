import React from 'react';
import ReactDOM from 'react-dom';
import InformationalResources from './InformationalResources';

import renderer from 'react-test-renderer';

it('InformationalResources renders correctly', () => {
    const tree = renderer
    .create(<InformationalResources />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});