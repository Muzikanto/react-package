import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

interface IStory { add: (name: string, story: () => JSX.Element) => void; }

function componentsStory(folder?: string): IStory {
    const story = storiesOf('Components' + (folder ? `.${folder}` : ''), module);

    // @ts-ignore
    story.addDecorator(withKnobs);
    story.addDecorator(Story => {
        return Story();
    });

    return story;
}

export default componentsStory;
