# ScreenFull ES6

<p align="center">
<a href="https://github.com/XpycT/screenfull-es6"><img src="https://travis-ci.org/XpycT/screenfull-es6.svg?branch=master" alt="Build"></a>
</p>

> ScreenFull ES6, based on [screenfull.js](https://github.com/sindresorhus/screenfull.js)


## Overview

Simple wrapper for cross-browser usage of the JavaScript [Fullscreen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode), which lets you bring the page or any element into fullscreen. Smoothens out the browser implementation differences, so you don't have to.

### [Demo](https://xpyct.github.io/screenfull-es6/)

## Install
```
$ npm install --save screenfull-es6
```
Also available on [unpkg.com](https://unpkg.com/screenfull-es6).

## Support

[Supported browsers](http://caniuse.com/fullscreen)

## Documentation


### Examples

#### Fullscreen the page

```js
document.getElementById('button').addEventListener('click', () => {
	if (ScreenFull.enabled) ScreenFull.request();
});
```

#### Fullscreen an element

```js
const el = document.getElementById('target');

document.getElementById('button').addEventListener('click', () => {
	if (ScreenFull.enabled) ScreenFull.request(el); 
});
```

#### Fullscreen an element with jQuery

```js
const target = $('#target')[0]; // Get DOM element from jQuery collection

$('#button').on('click', () => {
	if (ScreenFull.enabled) ScreenFull.request(target);
});
```

#### Detect fullscreen change

```js
if (ScreenFull.enabled) {
	ScreenFull.on('change', () => {
		console.log('Am I fullscreen?', ScreenFull.isFullscreen ? 'Yes' : 'No');
	});
}
```

Remove listeners with:

```js
ScreenFull.off('change', callback);
```

#### Detect fullscreen error

```js
if (ScreenFull.enabled) {
	ScreenFull.on('error', event => {
		console.error('Failed to enable fullscreen', event);
	});
}
```

See the [demo](https://xpyct.github.io/screenfull-es6/) for more examples, or view the [source](./example/src/components/FullScreenComponent.vue).

#### Fullscreen the page with Angular 2

```typescript
import {Directive, HostListener} from '@angular/core';
import ScreenFull from 'screenfull-es6';

@Directive({
	selector: '[toggleFullscreen]'
})
export class ToggleFullscreenDirective {
	@HostListener('click') onClick() {
		if (ScreenFull.enabled) {
			ScreenFull.toggle();
		}
	}
}
```

```html
<button toggleFullscreen>Toggle fullscreen<button>
```

#### Fullscreen the page with Vue.JS

```html
<template>
  <button v-on:click="toggleFullscreen">Toggle fullscreen</button>
</template>

<script>
import ScreenFull from 'screenfull-es6';
export default {
  methods: {
    toggleFullscreen(){
      if (ScreenFull.enabled) {
      			ScreenFull.toggle();
      }
    }
  }
}
</script>
```

### Methods

#### .request()

Make an element fullscreen.

Accepts a DOM element. Default is `<html>`. If called with another element than the currently active, it will switch to that if it's a decendant.

If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).

Keep in mind that the browser will only enter fullscreen when initiated by user events like click, touch, key.

#### .exit()

Brings you out of fullscreen.

#### .toggle()

Requests fullscreen if not active, otherwise exits.

#### .on(event, function)

Events: `change` `error`

Add a listener for when the browser switches in and out of fullscreen or when there is an error.

#### .off(event, function)

Remove a previously registered event listener.

#### .onchange(function)

Alias for `.on('change', function)`

#### .onerror(function)

Alias for `.on('error', function)`

### Properties

#### .isFullscreen

Returns a boolean whether fullscreen is active.

#### .element

Returns the element currently in fullscreen, otherwise `null`.

#### .enabled

Returns a boolean whether you are allowed to enter fullscreen. If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).

## License

MIT © [Sindre Sorhus](https://sindresorhus.com), modified by [Aleksandr Tar](https://github.com/XpycT)
