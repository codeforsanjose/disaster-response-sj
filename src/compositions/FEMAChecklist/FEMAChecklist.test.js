import React from 'react';
import ReactDOM from 'react-dom';
import FEMAChecklist from './FEMAChecklist';

import renderer from 'react-test-renderer';

it('FEMAChecklist renders correctly', () => {
    const tree = renderer
    .create(<FEMAChecklist />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});