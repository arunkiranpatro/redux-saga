import React from 'react';
import { shallow, mount } from 'enzyme';
import TabLink from '../../components/UILibrary/TabLink';
import TabLinks from '../../components/UILibrary/TabLinks';
import Tabs from '../../components/UILibrary/Tabs';

describe('A TabLink Test Suite', () => {
  it('should render div', () => {
    const markup = shallow(
      <Tabs defaultActive="1">
        <TabLinks>
          s
          <TabLink id="1">Tab-1</TabLink>
          <TabLink id="2">Tab-2</TabLink>
        </TabLinks>
      </Tabs>
    );

    expect(markup.type()).toBe('div');
    expect(markup.hasClass('tab-container')).toBe(true);
  });
  it('should render children', () => {
    const markup = mount(
      <Tabs defaultActive="1">
        <TabLinks>
          <TabLink id="1">Tab-1</TabLink>
          <TabLink id="2">Tab-2</TabLink>
        </TabLinks>
      </Tabs>
    );

    expect(markup.find('li')).toHaveLength(2);
    expect(
      markup
        .find('li')
        .at(0)
        .hasClass('tab-link')
    ).toBe(true);
    expect(
      markup
        .find('li')
        .at(0)
        .hasClass('active-tab')
    ).toBe(true);
    expect(markup.find('ul[role="tablist"]')).toHaveLength(1);
  });
  it('should render first tab has active tab', () => {
    const markup = mount(
      <Tabs>
        <TabLinks>
          <TabLink id="0">Tab-1</TabLink>
          <TabLink id="1">Tab-2</TabLink>
        </TabLinks>
      </Tabs>
    );

    expect(markup.find('li')).toHaveLength(2);
    expect(
      markup
        .find('li')
        .at(0)
        .hasClass('tab-link')
    ).toBe(true);
    expect(
      markup
        .find('li')
        .at(0)
        .hasClass('active-tab')
    ).toBe(true);
    expect(markup.find('ul[role="tablist"]')).toHaveLength(1);
  });
});
