import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = shallow(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders image', () => {
  const image = shallow(<img/>)
  expect(image).toBeInTheDocument();
})
