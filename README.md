# @jocampo3/slider

A lightweight, minimal carousel built with CSS and vanilla JavaScript.

## Why?

Tired of bulky external NPM packages? This package delivers essential carousel functionality with minimal JavaScript, keeping your projects fast and clean.

## Install

```bash
npm install @jocampo3/slider
```

## Usage

### Single Slider

```javascript
import Slider from '@jocampo3/slider';
import '@jocampo3/slider/styles.css';

const interval = 3500; // update to your interval value
const slider = document.getElementById('my-slider');
new Slider(slider, interval);
```

### Multiple Sliders

```javascript
import Slider from '@jocampo3/slider';
import '@jocampo3/slider/styles.css';

const interval = 3500; // update to your interval value
const slides = document.querySelectorAll('.slideshow');

slides.forEach(s => new Slider(s, interval);
```

## Example
```html
<!-- NOTE: To enable buttons, include the 'js-buttons' class on the slideshow div -->
<div class="slideshow js-buttons"> 
  <figure>
    <!-- self-referenced link -->
    <a id="a-classic" href="#a-classic">
      <img loading="lazy" src="https://cadars.github.io/photosheet/img/john-margolies/A classic.jpg" alt="A classic" title="A classic" />
    </a>
  </figure>

  <div>
    <a id="hello-world" href="#hello-world">
      <h1>Hello World</h1>
    </a>
  </div>
</div>
```


## How it works

Slider uses native CSS scroll snap for positioning and smooth scrolling transitions. The slider auto-advances through slides based on the interval, pauses on hover, and syncs with manual scrolling.

## Features

- Lightweight (~1KB gzipped)
- Zero dependencies
- Native scroll snap positioning
- Smooth scroll transitions
- Button Support

## License

ISC
