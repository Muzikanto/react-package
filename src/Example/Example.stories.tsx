import React from 'react';
import Example from './Example'

export default {
    title: 'Design System/Example',
    parameters: {
        component: Example,
    },
};

export const One = () => (
    <Example one="one1" two="two1"/>
);

export const Two = () => (
    <Example one="one2" two={"two2"} three="three2"/>
);


export const Three = () => (
    <Example one="one3" two="two3"/>
);

Two.story = {
    parameters: {
        docs: {
            storyDescription: 'storyDescription',
        },
    },
};

