import React from 'react';
import {Meta} from '@storybook/react/types-6-0';

import {HelloWorld} from '../../components';
import {HelloWorldProps} from 'src/components/HelloWorld';

export const Primary: React.FC<HelloWorldProps> = () => (
    <div>
        <HelloWorld title="Hello World" theme="primary">
            <div>Some content</div>
        </HelloWorld>
    </div>
);

export const Secondary: React.FC<HelloWorldProps> = () => (
    <HelloWorld title="GN World" theme="secondary">
        <div>Some other content</div>
    </HelloWorld>
);

export default {
    title: 'Components',
    component: HelloWorld
} as Meta;
