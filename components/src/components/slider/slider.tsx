import { Component, h, State, Listen, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class Slider {
  /** type of slider */
  @Prop() type: string;

  /** Minmum value of input */
  @Prop() min: string = '0';

  /** Maximum value of input */
  @Prop() max: string = '100';

  /** value of input */
  @Prop() value: string = '20';

  /** inputRange for listening the value*/
  inputRange!: HTMLInputElement;

  @State() rangeProp = {
    '--min': this.min,
    '--max': this.max,
    '--val': this.value,
  };

  // Validate the max, min, value
  @Watch('value')
  watchValue() {
    if (this.value > this.max || this.value < this.min) {
      //console.warn('The provided value should be between min and max');
      this.rangeProp = { ...this.rangeProp, '--val': this.min };
    }
  }

  componentWillLoad() {
    this.watchValue();
  }
  // Update the input range
  private updateSlider(value: number) {
    this.inputRange.value = value.toString();
    this.rangeProp = { ...this.rangeProp, '--val': value.toString() };
  }

  // Listen the input change
  @Listen('input')
  handleChange() {
    this.updateSlider(this.inputRange.valueAsNumber);
  }

  inputBasic() {
    return (
      <div style={this.rangeProp} class="container">
        <input
          style={{ position: 'relative' }}
          value={`${this.rangeProp['--val']}`}
          min={`${this.rangeProp['--min']}`}
          max={`${this.rangeProp['--max']}`}
          ref={(el) => (this.inputRange = el as HTMLInputElement)}
          type="range"
        ></input>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.type === 'basic' && this.inputBasic()}
        {this.type === 'continuousValue' && <slot></slot>}
        {this.type === 'dualPoint' && <slot></slot>}
      </div>
    );
  }
}
