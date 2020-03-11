import React from 'react';
import Example from './Example'

export default {
    title: 'Design System/Example',
    parameters: {
        component: Example,
    },
};

export const One = () => (
    <Example text="one"/>
);

export const Two = () => (
    <Example text="two"/>
);

Two.story = {
    parameters: {
        docs: {
            storyDescription: 'storyDescription',
        },
    },
};

export const Three = () => (
    <Example text="three"/>
);
