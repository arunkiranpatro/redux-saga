import React from 'react';
import { shallow, mount } from 'enzyme';
import TabLink from '../../components/UILibrary/TabLink';
import TabLinks from '../../components/UILibrary/TabLinks';

describe('A TabLink Test Suite', () => {
    it('should render ul', () => {
        const markup = shallow(
            <TabLinks activeId="1">
                <TabLink id="1">Tab-1</TabLink>
                <TabLink id="2">Tab-2</TabLink>
            </TabLinks>
        );
        expect(markup.type()).toBe('ul');
        expect(markup.find('ul').hasClass('tab-links')).toBe(true);
        expect(markup.find('ul').hasClass('tab-links')).toBe(true);
    });
    it('should have li children', () => {
        const markup = mount(
            <TabLinks activeId="1">
                <TabLink id="1">Tab-1</TabLink>
                <TabLink id="2">Tab-2</TabLink>
            </TabLinks>
        );
        console.log(markup.html());
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
