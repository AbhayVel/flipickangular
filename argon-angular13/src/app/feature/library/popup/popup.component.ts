import { EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit, OnChanges } from '@angular/core';
import { PopUpConfig } from './PopUpConfig';

@Component({
  selector: 'qdn-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit, OnChanges {

  @Input() isShowPopup: boolean = false;

  @Input() config: PopUpConfig=new PopUpConfig();

  @Output() CloseEvent: EventEmitter<any> = new EventEmitter<any>();

  close() {
    this.config.isShowLeft = false;
    setTimeout(() => {
      this.config.isShowPopup = false;
      this.CloseEvent.next(false);
    }, 5000)
  }
  constructor() { }
    ngOnChanges(changes: any): void {
      debugger;

      if (changes.config != null && changes.config.currentValue.isShowPopup) {
        setTimeout(() => {
          this.config.isShowLeft = true;
        }, 10)
        
      }
    }

  public open(config: PopUpConfig) {
    this.config = config;
    setTimeout(() => {
      this.config.isShowLeft = true;
    }, 10)
  }
  ngOnInit(): void {
    debugger;
  }

}
