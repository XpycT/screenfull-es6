const ScreenFull = {

  /**
   * Find a supported fullscreen API
   *
   * @param {String} key The API key to find
   * @returns {String}
   */
  fn(key) {
    let val;
    /**
     * @type {Array} The list of all possible fullscreen APIs.
     */
    const fnMap = [
      [
        'requestFullscreen',
        'exitFullscreen',
        'fullscreenElement',
        'fullscreenEnabled',
        'fullscreenchange',
        'fullscreenerror'
      ],
      // New WebKit
      [
        'webkitRequestFullscreen',
        'webkitExitFullscreen',
        'webkitFullscreenElement',
        'webkitFullscreenEnabled',
        'webkitfullscreenchange',
        'webkitfullscreenerror'

      ],
      // Old WebKit (Safari 5.1)
      [
        'webkitRequestFullScreen',
        'webkitCancelFullScreen',
        'webkitCurrentFullScreenElement',
        'webkitCancelFullScreen',
        'webkitfullscreenchange',
        'webkitfullscreenerror'

      ],
      [
        'mozRequestFullScreen',
        'mozCancelFullScreen',
        'mozFullScreenElement',
        'mozFullScreenEnabled',
        'mozfullscreenchange',
        'mozfullscreenerror'
      ],
      [
        'msRequestFullscreen',
        'msExitFullscreen',
        'msFullscreenElement',
        'msFullscreenEnabled',
        'MSFullscreenChange',
        'MSFullscreenError'
      ]
    ];

    let i = 0;
    const l = fnMap.length;
    let ret = {};

    for (; i < l; i++) {
      val = fnMap[i];
      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }
        return ret[key];
      }
    }

    return false;
  },
  /**
   * Checks whether fullscreen is enabled.
   *
   * @returns {Boolean}
   */
  get enabled() {
    return Boolean(document[this.fn('fullscreenEnabled')]);
  },

  /**
   * Gets the element that is currently in fullscreen mode.
   *
   * @returns {HTMLElement}
   */
  get element() {
    return document[this.fn('fullscreenElement')];
  },

  /**
   * Returns whether fullscreen is active for an element, or any element if one is not specified.
   *
   * @returns {Boolean}
   */
  get isFullscreen() {
    return Boolean(document[this.fn('fullscreenElement')]);
  },

  /**
   * Returns event name for fullscreen
   *
   * @returns {Object}
   */
  get eventNameMap() {
    return {
      change: this.fn('fullscreenchange'),
      error: this.fn('fullscreenerror')
    }
  },

  /**
   * Requests fullscreen.
   *
   * @param {HTMLElement} el  The element to make the request for. Defaults to the document element.
   */
  request(el) {
    let request = this.fn('requestFullscreen');

    el = el || document.documentElement;

    // Work around Safari 5.1 bug: reports support for
    // keyboard in fullscreen even though it doesn't.
    // Browser sniffing, since the alternative with
    // setTimeout is even worse.
    if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
      el[request]();
    } else {
      let keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;
      el[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
    }
  },
  /**
   * Exits fullscreen.
   */
  exit() {
    document[this.fn('exitFullscreen')]();
  },
  /**
   * Toggles fullscreen.
   *
   * @param {HTMLElement} el  The element to make the request for.
   */
  toggle(el) {
    if (this.isFullscreen) {
      this.exit();
    } else {
      this.request(el);
    }
  },
  /**
   * Adds a listener for the fullscreen change event.
   *
   * @param {Function} cb Callback function on change event
   */
  onchange(cb) {
    this.on('change', cb);
  },
  /**
   * Adds a listener for the fullscreen error event.
   *
   * @param {Function} cb Callback function on error event
   */
  onerror(cb) {
    this.on('error', cb);
  },

  /**
   * Adds a listener for the fullscreen events.
   *
   * @param {String} event Event name
   * @param {Function} cb Callback function
   */
  on(event, cb) {
    var eventName = this.eventNameMap[event];
    if (eventName) {
      document.addEventListener(eventName, cb, false);
    }
  },
  /**
   * Removes a listener for the fullscreen events.
   *
   * @param {String} event Event name
   * @param {Function} cb Callback function
   */
  off(event, cb) {
    var eventName = this.eventNameMap[event];
    if (eventName) {
      document.removeEventListener(eventName, cb, false);
    }
  }
};

export default ScreenFull;
