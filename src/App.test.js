import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import {shallow} from 'enzyme';

it('renders learn react link', () => {
  const linkElement = shallow(<App/>);
  expect(linkElement.find('a').getText()).toEqual('Learn React')
});

it('renders image', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('img')).toBeInTheDocument();
})
