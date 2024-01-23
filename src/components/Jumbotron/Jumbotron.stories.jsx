import Comp from './Jumbotron.jsx';
import * as heading from '../Heading/Heading.stories.jsx';
import * as leadText from '../LeadText/LeadText.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  heading: heading.Heading.args,
  leadText: leadText.LeadText.args,
  leadTextContent: 'Some lead text content. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.',
};

export const Jumbotron = {
  args: defaultArgs,
};
