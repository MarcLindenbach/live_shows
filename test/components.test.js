import React from 'react';
import { shallow } from 'enzyme';
import { SocialMediaButton } from '../src/components';

describe('<SocialMediaButton />', () => {
  it('renders a button', () => {
    const component = shallow(<SocialMediaButton type="facebook" onClick={() => {}} />);

    expect(component.find('button').exists()).toBeTruthy();
  });

  it('renders the correct font awesome element', () => {
    const component = shallow(<SocialMediaButton type="facebook" onClick={() => {}} />);
    const fontAwesomeComponent = component.find('i');

    expect(fontAwesomeComponent.exists()).toBeTruthy();
    expect(fontAwesomeComponent.hasClass('fa fa-facebook')).toBeTruthy();
  });

  it('passes along the click event', () => {
    const mockFn = jest.fn();
    const component = shallow(<SocialMediaButton type="facebook" onClick={() => mockFn()} />);

    component.simulate('clock');
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
