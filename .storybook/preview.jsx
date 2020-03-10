import React from 'react';
import {addDecorator, addParameters} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import {withKnobs} from "@storybook/addon-knobs";

addParameters({
    options: {
        showRoots: true,
    },
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    dependencies: {
        //display only dependencies/dependents that have a story in storybook
        //by default this is false
        withStoriesOnly: true,

        //completely hide a dependency/dependents block if it has no elements
        //by default this is false
        hideEmpty: true,
    }
});

addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(story => (
    <>
        {story()}
    </>
));
