const ScreenFull = {

  fn(key) {
    let val;
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
  get enabled() {
    return Boolean(document[this.fn('fullscreenEnabled')]);
  },

  get element() {
    return document[this.fn('fullscreenElement')];
  },

  get isFullscreen() {
    return Boolean(document[this.fn('fullscreenElement')]);
  },

  get eventNameMap() {
    return {
      change: this.fn('fullscreenchange'),
      error: this.fn('fullscreenerror')
    }
  },

  request(elem) {
    let request = this.fn('requestFullscreen');

    elem = elem || document.documentElement;

    // Work around Safari 5.1 bug: reports support for
    // keyboard in fullscreen even though it doesn't.
    // Browser sniffing, since the alternative with
    // setTimeout is even worse.
    if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
      elem[request]();
    } else {
      let keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;
      elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
    }
  },

  exit() {
    document[this.fn('exitFullscreen')]();
  },

  toggle(element) {
    if (this.isFullscreen) {
      this.exit();
    } else {
      this.request(element);
    }
  },

  onchange(cb) {
    this.on('change', cb);
  },
  onerror(cb) {
    this.on('error', cb);
  },

  on(event, cb) {
    var eventName = this.eventNameMap[event];
    if (eventName) {
      document.addEventListener(eventName, cb, false);
    }
  },

  off(event, cb) {
    var eventName = this.eventNameMap[event];
    if (eventName) {
      document.removeEventListener(eventName, cb, false);
    }
  }
};

export default ScreenFull;
