import './flying-focus.scss';

export const HELPER_FADE_TIME = 200;
export const MONITOR_INTERVAL = 250;

export default class FloatingFocus {
  constructor(container = document.body) {
    this.container = container;
    this.previousTargetRect = null;
    this.floaterIsMoving = false;

    this.addEventListeners();
  }

  addEventListeners() {
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleScrollResize = this.handleScrollResize.bind(this);
    this.monitorElementPosition = this.monitorElementPosition.bind(this);

    document.addEventListener('keydown', this.handleKeyDown, false);
    document.addEventListener('mousedown', this.handleMouseDown, false);
    document.addEventListener('focus', this.handleFocus, true);
    document.addEventListener('blur', this.handleBlur, true);
    document.addEventListener('scroll', this.handleScrollResize, true);
    window.addEventListener('resize', this.handleScrollResize, true);
  }

  handleKeyDown(e) {
    // Show animation only upon Tab or Arrow keys press.
    if (e.keyCode !== 9 && !(e.keyCode > 36 && e.keyCode < 41)) {
      return;
    }

    if (!this.floater) {
      this.floater = this.constructFloatingElement();
    }

    this.enableFloatingFocus();
  }

  handleMouseDown() {
    if (!this.floater) {
      return;
    }

    this.disableFloatingFocus();
  }

  handleScrollResize() {
    if (!this.floater || !this.target) {
      return;
    }

    requestAnimationFrame(() => this.repositionElement(this.target, this.floater));
  }

  constructFloatingElement() {
    const element = document.createElement('div');

    element.classList.add('floating-focus');

    this.container.appendChild(element);

    return element;
  }

  handleFocus(e) {
    let {
      target,
    } = e;

    if (!this.floater || !this.container) {
      return;
    }

    if (target === this.floater) {
      this.handleBlur();

      return;
    }

    if (!this.container.contains(target)) {
      this.handleBlur();

      return;
    }

    this.floater.classList.add('visible');
    this.floater.classList.add('helper');
    this.floater.classList.add('moving');

    const focusTargetAttribute = target.getAttribute('focus-target');

    if (focusTargetAttribute) {
      target = document.querySelector(`#${focusTargetAttribute}`) || target;
    }

    this.target = target;

    // Make sure we can read the target style
    this.target.classList.remove('floating-focused');
    this.target.classList.add('focus');

    FloatingFocus.resolveTargetOutlineStyle(this.target, this.floater);
    this.repositionElement(this.target, this.floater);

    this.target.classList.add('floating-focused');

    this.handleFloaterMove();

    clearTimeout(this.helperFadeTimeout);
    this.helperFadeTimeout = setTimeout(() => this.floater.classList.remove('helper'), HELPER_FADE_TIME);
  }

  handleBlur() {
    if (!this.floater) {
      return;
    }

    this.floater.classList.remove('visible');
    this.floater.classList.remove('helper');
    this.floater.classList.remove('moving');

    if (!this.target) {
      return;
    }

    this.target.classList.remove('floating-focused');
    this.target.classList.remove('focus');
  }

  enableFloatingFocus() {
    this.container.classList.add('floating-focus-enabled');
    this.floater.classList.add('enabled');
    clearInterval(this.monitorElementPositionInterval);

    const posInterval = setInterval(this.monitorElementPosition, MONITOR_INTERVAL);

    this.monitorElementPositionInterval = posInterval;
  }

  disableFloatingFocus() {
    this.container.classList.remove('floating-focus-enabled');
    this.floater.classList.remove('enabled');
    clearInterval(this.monitorElementPositionInterval);
  }

  handleFloaterMove() {
    if (this.floaterIsMoving) {
      return;
    }

    this.floaterIsMoving = true;

    const removeMovingClass = () => {
      this.floater.classList.remove('moving');
      this.floater.removeEventListener('transitionend', removeMovingClass);
      this.floaterIsMoving = false;
    };

    this.floater.addEventListener('transitionend', removeMovingClass.bind(this));
  }

  static addPixels(pixels1, pixels2) {
    const result = parseFloat(pixels1) + parseFloat(pixels2);

    // eslint-disable-next-line no-negated-condition
    return !Number.isNaN(result)
      ? `${result}px`
      : null;
  }

  static getOffsetBorderRadius(baseRadius, passedOffset) {
    if (!baseRadius || parseFloat(baseRadius) === 0) {
      return '0px';
    }
    if (!passedOffset) {
      return baseRadius;
    }

    const offset = Math.max(parseFloat(passedOffset), 0);

    return FloatingFocus.addPixels(baseRadius, offset) || '0px';
  }

  static resolveTargetOutlineStyle(target, floater) {
    const style = window.getComputedStyle(target);
    const padding = style.outlineOffset || null;

    const bottomLeft = FloatingFocus.getOffsetBorderRadius(style.borderBottomLeftRadius, padding);
    const bottomRight = FloatingFocus.getOffsetBorderRadius(style.borderBottomRightRadius, padding);
    const topLeft = FloatingFocus.getOffsetBorderRadius(style.borderTopLeftRadius, padding);
    const topRight = FloatingFocus.getOffsetBorderRadius(style.borderTopRightRadius, padding);

    Object.assign(floater.style, {
      borderBottomLeftRadius: bottomLeft,
      borderBottomRightRadius: bottomRight,
      borderStyle: style.outlineStyle,
      borderTopLeftRadius: topLeft,
      borderTopRightRadius: topRight,
      borderWidth: style.outlineWidth,
      color: style.outlineColor,
    });
  }

  getFloaterPosition(target) {
    const targetStyle = window.getComputedStyle(target);
    const padding = parseFloat(targetStyle.outlineOffset || '0px');

    const rect = target.getBoundingClientRect();

    this.previousTargetRect = rect;

    const width = rect.width + (padding * 2);
    const height = rect.height + (padding * 2);
    const left = window.scrollX + rect.left - padding + (width / 2);
    const top = window.scrollY + rect.top - padding + (height / 2);

    return {
      height: `${height}px`,
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
    };
  }

  monitorElementPosition() {
    if (!this.target || !this.previousTargetRect || this.floaterIsMoving) {
      return;
    }

    const {
      left,
      top,
      width,
      height,
    } = this.target.getBoundingClientRect();

    const {
      left: leftPrev,
      top: topPrev,
      width: widthPrev,
      height: heightPrev,
    } = this.previousTargetRect;

    if (left === leftPrev && top === topPrev && width === widthPrev && height === heightPrev) {
      return;
    }

    this.floater.classList.add('moving');
    this.repositionElement(this.target, this.floater);
    this.handleFloaterMove();
  }

  repositionElement(target, floater) {
    Object.assign(floater.style, this.getFloaterPosition(target));
  }
}
