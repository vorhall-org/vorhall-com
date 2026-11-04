import Comp from '@/components/AvatarCardGrid/AvatarCardGrid.jsx';
import * as avatarCard from '@/components/AvatarCard/AvatarCard.stories.jsx';
import AvatarCard from '@/components/AvatarCard/AvatarCard.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  ariaLabelledBy: '',
  classes: '',
};

export const AvatarCardGrid = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <AvatarCard {...avatarCard.AvatarCard.args} />
    <AvatarCard {...avatarCard.AvatarCardYves.args} />
    <AvatarCard {...avatarCard.AvatarCardMarius.args} />
  </Comp>,
};
