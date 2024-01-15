import Comp from './ContentCardGrid.jsx';
import * as contentCard from '../ContentCard/ContentCard.stories.jsx';
import ContentCard from '../ContentCard/ContentCard.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const ContentCardGrid = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <ContentCard {...contentCard.ContentCard.args} />
    <ContentCard {...contentCard.ContentCard.args} />
    <ContentCard {...contentCard.ContentCard.args} />
  </Comp>,
};
