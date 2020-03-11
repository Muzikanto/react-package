import React from 'react';
import {addDecorator, addParameters} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import {withKnobs} from "@storybook/addon-knobs";
import withAutoKnobs from "../src/utils/storybook.helpers";

addParameters({
    options: {
        showRoots: true,
    },
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    dependencies: {
        withStoriesOnly: true,
        hideEmpty: true,
    }
});

addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(story => {
    const content = withAutoKnobs(story());

    return (
        <>
            {content}
        </>
    )
});
