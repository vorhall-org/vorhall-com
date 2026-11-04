import Comp from '@/components/ErrorMessage/ErrorMessage.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  text: 'some error message text',
};

export const ErrorMessage = {
  args: defaultArgs,
};
