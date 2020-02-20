import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/UILibrary/Loading';

describe('A Loading Test Suite', () => {
  it('should render without children', () => {
    const markup = shallow(<Loading />);
    expect(markup.find('div')).toHaveLength(1);
    expect(markup.find('div').text()).toContain('Loading..');
    expect(markup.hasClass('loading-div')).toBe(true);
  });
  it('should render with string', () => {
    const markup = shallow(<Loading>In Progress</Loading>);
    expect(markup.find('div')).toHaveLength(1);
    expect(markup.find('div').text()).toContain('In Progress');
    expect(markup.hasClass('loading-div')).toBe(true);
  });
  it('should render with children', () => {
    const markup = shallow(
      <Loading>
        <div>test</div>
      </Loading>
    );
    expect(markup.find('div')).toHaveLength(2);
    expect(markup.hasClass('loading-div')).toBe(true);
  });
});
