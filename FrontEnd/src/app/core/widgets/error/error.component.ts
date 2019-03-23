import {Component, Input, OnInit} from '@angular/core';
import {NgControl, NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() control: NgControl;
  @Input() form: NgForm;
  constructor() { }

  ngOnInit() {
  }

}
