import styles from './OptionSlider.module.css';

interface SliderOptions {
  min: number;
  max: number;
  cur: number;
}

class Slider {
  private rangeElement: HTMLInputElement;
  private valueElement: HTMLElement;
  private options: SliderOptions;

  constructor(rangeElement: HTMLInputElement, valueElement: HTMLElement, options: SliderOptions) {
    this.rangeElement = rangeElement;
    this.valueElement = valueElement;
    this.options = options;

    // Attach a listener to "input" event
    this.rangeElement.addEventListener('input', this.updateSlider.bind(this));
  }

  // Initialize the slider
  init() {
    this.rangeElement.setAttribute('min', String(this.options.min));
    this.rangeElement.setAttribute('max', String(this.options.max));
    this.rangeElement.value = String(this.options.cur);

    this.updateSlider();
  }

  // Format the money
  asMoney(value: number) {
    return '$' + parseFloat(value.toFixed(2)).toLocaleString('en-US');
  }

  generateBackground() {
    if (this.rangeElement.value === String(this.options.min)) {
      return '';
    }

    const percentage = ((Number(this.rangeElement.value) - this.options.min) / (this.options.max - this.options.min)) * 100;
    return `background: linear-gradient(to right, #50299c, #7a00ff ${percentage}%, #d3edff ${percentage}%, #dee1e2 100%)`;
  }

  updateSlider() {
    this.valueElement.innerHTML = this.asMoney(Number(this.rangeElement.value));
    this.rangeElement.style.cssText = this.generateBackground();
  }
}

const rangeElement = document.querySelector('.range [type="range"]') as HTMLInputElement | null;
const valueElement = document.querySelector('.range .range__value span') as HTMLElement | null;

const options: SliderOptions = {
  min: 2000,
  max: 75000,
  cur: 37500,
};

if (rangeElement && valueElement) {
  const slider = new Slider(rangeElement, valueElement, options);
  slider.init();
}

const OptionSlider = () => {
  return (
    <div className={styles.container}>
      <form className={styles.range}>
        <div className={`${styles.formGroup} ${styles.rangeSlider}`}>
          <input type="range" step="500"></input>
        </div>
        <div className={`${styles.formGroup} ${styles.rangeValue}`}>
          <label>Loan Amount</label>
          <span></span>
        </div>
      </form>
    </div>
  );
};
export default OptionSlider
