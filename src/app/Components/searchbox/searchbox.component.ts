import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string):void {
    this.onValue.emit(value);
  }
}
