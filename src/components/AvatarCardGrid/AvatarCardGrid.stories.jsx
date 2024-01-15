import Comp from './AvatarCardGrid.jsx';
import * as avatarCard from '../AvatarCard/AvatarCard.stories.jsx';
import AvatarCard from '../AvatarCard/AvatarCard.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const AvatarCardGrid = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <AvatarCard {...avatarCard.AvatarCard.args} />
    <AvatarCard {...avatarCard.AvatarCard.args} />
    <AvatarCard {...avatarCard.AvatarCard.args} />
  </Comp>,
};