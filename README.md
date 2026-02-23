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
const slider = new Slider('#my-slider', interval);
```

### Multiple Sliders

```javascript
import Slider from '@jocampo3/slider';
import '@jocampo3/slider/styles.css';

const interval = 3500; // update to your interval value
const slides = document.querySelectorAll('.slideshow');

slides.forEach(s => new Slider(s, interval));
```

## Features

- Lightweight (~1KB gzipped)
- Zero dependencies
- CSS-driven animations
- Fully customizable via CSS variables

## License

ISC
