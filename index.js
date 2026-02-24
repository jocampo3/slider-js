export default class Slider {
  constructor(slider, interval, includeButtons) {
    this.slider = slider;
    this.slides = this.slider.children;
    this.index = 0;
    this.interval = interval;
    this.timer = null;
    if (includeButtons === true) { this.addButtons(this.slider); }
    this.restartTimer();
    this.addListeners();
  }

  addButtons(slider) {
    slider.classList.add('js-buttons');
  }

  slideWidth() {
    return this.slider.clientWidth;
  }

  restartTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.next(), this.interval);
  }

  goTo(i) {
    this.index = (i + this.slides.length) % this.slides.length;
    this.slider.scrollTo({ left: this.index * this.slideWidth(), behavior: 'smooth' });
    this.restartTimer();
  }

  next() {
    this.goTo(this.index + 1);
  }

  getCurrentIndex() {
    return Math.round(this.slider.scrollLeft / this.slideWidth());
  }

  addListeners() {
    this.slider.addEventListener('scroll', () => {
      this.index = this.getCurrentIndex();
    })
    this.slider.addEventListener('mouseenter', () => {
      clearInterval(this.timer);
    });

    this.slider.addEventListener('mouseleave', () => {
      this.restartTimer();
    });

    window.addEventListener('resize', () => {
      this.goTo(this.index);
    });
  }
}
