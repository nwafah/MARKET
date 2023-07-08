import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  constructor() { }
  @Input() title!:string;
  @Input() dataSource:any[]=[];
  @Output() selectedValue =new EventEmitter();

  ngOnInit(): void {
  }

  detectChange(event:any){
    this.selectedValue.emit(event);
  }

}
