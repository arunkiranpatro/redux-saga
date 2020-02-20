import React from 'react';
import { shallow, mount } from 'enzyme';
import TabLink from '../../components/UILibrary/TabLink';
import Tabs from '../../components/UILibrary/Tabs';

describe('A TabLink Test Suite', () => {
  it('should have active class', () => {
    const markup = shallow(
      <TabLink id="1" activeId="1">
        s Tab-1
      </TabLink>
    );

    expect(markup.find('li')).toHaveLength(1);
    expect(markup.hasClass('tab-link')).toBe(true);
    expect(markup.hasClass('active-tab')).toBe(true);
    expect(markup.find('li[aria-selected="true"]')).toHaveLength(1);
    expect(markup.find('li[role="tab"]')).toHaveLength(1);
  });
  it('should not have active class', () => {
    const markup = shallow(
      <TabLink id="1" activeId="2">
        Tab-1
      </TabLink>
    );
    expect(markup.find('li')).toHaveLength(1);
    expect(markup.hasClass('tab-link')).toBe(true);
    expect(markup.hasClass('active-tab')).toBe(false);
    expect(markup.find('li[aria-selected="false"]')).toHaveLength(1);
    expect(markup.find('li[role="tab"]')).toHaveLength(1);
  });
  it('should have active class after click', () => {
    const markup = mount(
      <Tabs defaultActive="2">
        <TabLink id="1">Tab-1</TabLink>
      </Tabs>
    );
    expect(markup.find('li')).toHaveLength(1);
    expect(markup.find('li').hasClass('tab-link')).toBe(true);
    expect(markup.find('li').hasClass('active-tab')).toBe(false);
    markup.find('li').simulate('click');
    expect(markup.find('li').hasClass('active-tab')).toBe(true);
  });
  it('should have aria labels', () => {
    const markup = mount(
      <Tabs defaultActive="2">
        <TabLink id="1">Tab-1</TabLink>
      </Tabs>
    );
    expect(markup.find('li')).toHaveLength(1);
    expect(markup.find('li').hasClass('tab-link')).toBe(true);
    expect(markup.find('li').hasClass('active-tab')).toBe(false);
    markup.find('li').simulate('click');
    expect(markup.find('li').hasClass('active-tab')).toBe(true);
    expect(markup.find('li[aria-selected="true"]')).toHaveLength(1);
    expect(markup.find('li[role="tab"]')).toHaveLength(1);
  });
});
