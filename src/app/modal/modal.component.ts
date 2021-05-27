import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() texto: string;
  @Output() accion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setAccion(event) {
    event.stopPropagation();
    if(event.srcElement.id === 'accept-btn') {
      this.accion.emit(true);
    }
    if(event.srcElement.id === 'cancel-btn' || event.srcElement.id === 'close-btn' || event.srcElement.id === 'overlay') {
      this.accion.emit(false);
    }
  }

}
