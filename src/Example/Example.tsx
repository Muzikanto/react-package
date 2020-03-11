import React from 'react';

export interface ExampleProps {
    /** The size of the button */
    text: string;
}

const Example = (props: ExampleProps) => {
    return (
        <div>{props.text}</div>
    );
};

export default Example;
