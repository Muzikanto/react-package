import React from 'react';
import {text} from "@storybook/addon-knobs";

export interface ExampleProps {
    /** The size of the button */
    text: string;
}

const Example = (props: ExampleProps) => {
    return (
        <div>{props.text}{text('knob', '123')}</div>
    );
};

export default Example;
