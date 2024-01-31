import Comp from './Richtext.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const Richtext = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <h1>Some title level 1</h1>
    <p>
      Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <h2>Some title level 2</h2>
    <p>Another paragraph to see the spacing - also <b>bold</b> and <i>italic</i> are possible and of course <a href='/foo'>link</a> elements.</p>
    <h3>Some title level 3</h3>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </li>
      <li>
          Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </li>
    </ul>
    <h4>Some title level 4</h4>
    <ol>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </li>
      <li>
          Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </li>
    </ol>
    <h5>Some title level 5</h5>
    <p>Another paragraph to see the spacing - also <b>bold</b> and <i>italic</i> are possible and of course <a href='/foo'>link</a> elements.</p>
    <h6>Some title level 6</h6>
    <p>Another paragraph to see the spacing - also <b>bold</b> and <i>italic</i> are possible and of course <a href='/foo'>link</a> elements.</p>
    <h1>Some title level 1</h1>
    <h2>Some title level 2</h2>
    <h3>Some title level 3</h3>
    <h4>Some title level 4</h4>
    <h5>Some title level 5</h5>
    <h6>Some title level 6</h6>
  </Comp>,
};
