import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../../components/UILibrary/Tab';

describe('A Tab Test Suite', () => {
    it('should render children when active', () => {
        const markup = shallow(
            <Tab id="1" activeId="1">
                <div>Test1</div>
            </Tab>
        );
        expect(markup.find('div')).toHaveLength(2);
        expect(markup.hasClass('tab-body')).toBe(true);
    });
    it('should render children when inactive', () => {
        const markup = shallow(
            <Tab id="1" activeId="2">
                <div>Test1</div>
            </Tab>
        );
        expect(markup.find('div')).toHaveLength(2);
        expect(markup.hasClass('tab-body')).toBe(true);
    });
    it('should not render children when inactive', () => {
        const markup = shallow(
            <Tab id="1" activeId="2" deferLoaded>
                <div>Test1</div>
            </Tab>
        );
        expect(markup.find('div')).toHaveLength(1);
        expect(markup.hasClass('tab-body')).toBe(true);
    });
    it('should  render children when active', () => {
        const markup = shallow(
            <Tab id="1" activeId="1" deferLoaded>
                <div>Test1</div>
            </Tab>
        );
        expect(markup.find('div')).toHaveLength(2);
        expect(markup.hasClass('tab-body')).toBe(true);
    });
});
