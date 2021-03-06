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
  @Output() saveEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnChanges(changes: any): void {}
  ngOnInit(): void {  }

  close() {
    this.config.isShowLeft = false;
    this.config.isShowPopup = false;
    this.CloseEvent.next(false);
  }
  public open(config: PopUpConfig) {
    this.config = config;  } 

  saveChanges() {   this.saveEvent.next(false); }   

}
