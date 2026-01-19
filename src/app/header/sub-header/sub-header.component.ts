import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ngg-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {
  _title = 'sub-header title';
  counter: number = 0;
  @Input() set title(value: string) {
    this._title = value;
    this.counter++;
  }
  @Input() fontSize = 20;
  @Input() color = 'blue';

  @Input() subheader: Subheader = {};

  // @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() titleUpdated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    console.log('Sub-header component initialized');
    // this.subheader.color!.baseColor = this.color;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Sub-header component changes', changes['title'].currentValue);
  }

  updateTitle(str: string) {
    this.titleUpdated.emit(str);
  }
}

export interface Subheader {
  color?: Color;
  fontSize?: number;
}

export interface Color {
  baseColor: string;
}
