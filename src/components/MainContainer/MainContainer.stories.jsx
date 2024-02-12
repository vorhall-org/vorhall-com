import Comp from './MainContainer.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  ariaLabel: '',
  classes: '',
  id: '',
};

export const MainContainer = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <p>some main container content</p>
  </Comp>,
};
