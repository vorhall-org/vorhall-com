import Comp from '@/components/ContentCardGrid/ContentCardGrid.jsx';
import * as contentCard from '@/components/ContentCard/ContentCard.stories.jsx';
import ContentCard from '@/components/ContentCard/ContentCard.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  ariaLabelledBy: '',
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
