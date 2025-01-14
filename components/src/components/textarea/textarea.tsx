import {
  Component,
  h,
  Listen,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
})
export class Textarea {
  /** Textinput for focus state */
  textEl?: HTMLTextAreaElement;

  /** Label text */
  @Prop() label: string = '';

  /** Name attribute */
  @Prop() name: string = '';

  /** Helper text */
  @Prop() helper: string = '';

  /** Textarea cols attribute */
  @Prop() cols: number;

  /** Textarea rows attribute */
  @Prop() rows: number;

  /** Label position: `no-label` (default), `inside`, `outside` */
  @Prop() labelPosition = 'no-label';

  /** Placeholder text */
  @Prop() placeholder: string = '';

  /** Value of the input text */
  @Prop() value = '';

  /** Set input in disabled state */
  @Prop() disabled: boolean = false;

  /** Error state of input */
  @Prop() state: string;

  /** Max length of input */
  @Prop() maxlength: number;

  @Prop() autofocus: boolean = false;

  /** Listen to the focus state of the input */
  @State() focusInput;

  /** Change event for the textarea */
  @Event({
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  customChange: EventEmitter;

  // Listener if input enters focus state
  @Listen('focus')
  handleFocusIn() {
    this.focusInput = true;
  }

  // Listener if input leaves focus state
  @Listen('focusout')
  handleFocusOut() {
    this.focusInput = false;
  }

  // Data input event in value prop
  handleInput(e): void {
    this.value = e.target.value;
  }

  /* Set the input as focus when clicking the whole textfield with suffix/prefix */
  handleFocusClick(): void {
    this.textEl.focus();
  }

  handleChange(e): void {
    this.customChange.emit(e);
  }

  render() {
    return (
      <div
        class={`
        sdds-textarea-container
        ${this.labelPosition === 'inside' ? 'sdds-textarea-label-inside' : ''}
        ${this.focusInput ? 'sdds-textarea-focus' : ''}
        ${this.disabled ? 'sdds-textarea-disabled' : ''}
        ${this.value.length > 0 ? 'sdds-textarea-data' : ''}
        ${
          this.state == 'error' || this.state == 'success'
            ? `sdds-textarea-${this.state}`
            : ''
        }
        `}
        onClick={() => this.handleFocusClick()}
      >
        {this.label.length > 0 && (
          <span class={'sdds-textarea-label'}>{this.label}</span>
        )}
        <div class="sdds-textarea-wrapper">
          <textarea
            class={'sdds-textarea-input'}
            ref={(inputEl) => (this.textEl = inputEl as HTMLTextAreaElement)}
            disabled={this.disabled}
            placeholder={this.placeholder}
            value={this.value}
            name={this.name}
            autofocus={this.autofocus}
            maxlength={this.maxlength}
            cols={this.cols}
            rows={this.rows}
            onInput={(e) => this.handleInput(e)}
            onChange={(e) => this.handleChange(e)}
          ></textarea>
          <span class="sdds-textarea-resizer-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8536 0.853553C12.0488 0.658291 12.0488 0.341709 11.8536 0.146447C11.6583 -0.0488155 11.3417 -0.0488155 11.1464 0.146447L0.146447 11.1464C-0.0488155 11.3417 -0.0488155 11.6583 0.146447 11.8536C0.341709 12.0488 0.658291 12.0488 0.853553 11.8536L11.8536 0.853553ZM11.8536 4.64645C12.0488 4.84171 12.0488 5.15829 11.8536 5.35355L5.35355 11.8536C5.15829 12.0488 4.84171 12.0488 4.64645 11.8536C4.45118 11.6583 4.45118 11.3417 4.64645 11.1464L11.1464 4.64645C11.3417 4.45118 11.6583 4.45118 11.8536 4.64645ZM11.8536 8.64645C12.0488 8.84171 12.0488 9.15829 11.8536 9.35355L9.35355 11.8536C9.15829 12.0488 8.84171 12.0488 8.64645 11.8536C8.45118 11.6583 8.45118 11.3417 8.64645 11.1464L11.1464 8.64645C11.3417 8.45118 11.6583 8.45118 11.8536 8.64645Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        {this.helper.length > 0 && (
          <span class={'sdds-textarea-helper'}>{this.helper}</span>
        )}
        {this.maxlength > 0 && (
          <div class={'sdds-textarea-textcounter'}>
            {this.value.length}{' '}
            <span class="sdds-textfield-textcounter-divider"> / </span>{' '}
            {this.maxlength}
          </div>
        )}
      </div>
    );
  }
}
