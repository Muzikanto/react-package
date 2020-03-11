import {text, number, boolean, object, array} from '@storybook/addon-knobs';
import * as React from "react";

// https://github.com/storybookjs/addon-smart-knobs/issues/24

function withAutoKnobs(component: JSX.Element) {
    const newProps: any = {};

    for (const [key, value] of Object.entries(component.props)) {
        switch (typeof value) {
            case "number":
                newProps[key] = number(key, value);
                break;
            case "string":
                newProps[key] = text(key, value);
                break;
            case "boolean":
                newProps[key] = boolean(key, value);
                break;
            default:
                if (Array.isArray(value)) {
                    newProps[key] = array(key, value);
                } else {
                    newProps[key] = object(key, value);
                }
                break;
        }
    }

    return React.cloneElement(component, newProps);
}

export default withAutoKnobs;
