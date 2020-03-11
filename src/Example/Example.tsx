import React from 'react';

export interface ExampleProps {
    /** Required prop */
    one: string;

    /** Not required prop */
    two?: string;

    /** Not required prop */
    three?: string;
}

const Example = (props: ExampleProps) => {
    return (
        <div className={props.two}>{props.two}</div>
    );
};

export default Example;
