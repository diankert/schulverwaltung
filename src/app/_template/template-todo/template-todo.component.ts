import { EventPing } from './../../_interface/eventping';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../_interface/todo';
import { DataService } from './../../_service/data.service';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent implements OnInit {

  @Input() toDo$: ToDo;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor(public _dataService: DataService) {}

  ngOnInit(): void {
  }

  public changeCheck(event?: any): void {
      this.toDo$.status = !this.toDo$.status;
      this._dataService.putToDo(this.toDo$).subscribe((data: ToDo) => {
        const eventObject: EventPing = {
          label: 'check',
          object: this.toDo$
        };
        this.ping.emit(eventObject);
      }, error => {
          console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
      });
  }

  public changeLabel(event?: any): void {
      this._dataService.putToDo(this.toDo$).subscribe((data: ToDo) => {
        const eventObject: EventPing = {
          label: 'label',
          object: this.toDo$
        };
        this.ping.emit(eventObject);
      }, error => {
          console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
      });
  }

  public deleteToDo(event?: any): void {
      this._dataService.deleteToDo(this.toDo$).subscribe((data: ToDo) => {
        const eventObject: EventPing = {
          label: 'delete',
          object: this.toDo$
        };
        this.ping.emit(eventObject);
      }, error => {
          console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
      });
  }

}
