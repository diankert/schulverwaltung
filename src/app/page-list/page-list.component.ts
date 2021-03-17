import { ToDo } from './../_interface/todo';
import { Component, OnInit } from '@angular/core';
import { EventPing } from '../_interface/eventping';
import { DataService } from '../_service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  public toDoShow: boolean;
  public toDoDoneShow: boolean;
  public $todos: ToDo[];
  public $todosdone: ToDo[];
  public subs = new Subscription();

  constructor(public _dataService: DataService) {

    this.toDoShow = true;
    this.toDoDoneShow = false;
    this.$todos = [];
    this.$todosdone = [];
    this.loadData();

  }

  ngOnInit(): void {
  }

  public loadData(): void {
    this.$todosdone = [];
    this.$todos = [];
    this._dataService.getToDo().subscribe((data: ToDo[]) => {
      data.forEach((toDo: ToDo) => {
        if (toDo.status === true) {
          this.$todosdone.push(toDo);
        } else {
            this.$todos.push(toDo);
        }
      });
    }, error => {
        console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
    });
  }

  public create(event: ToDo): void {
    event.position = this.$todos.length + 1;
    this._dataService.postToDo(event).subscribe((data: ToDo) => {
      console.log(`%cSUC: "${data.label}" wurde erfolgreich erstellt.`, `color: green;`);
      this.$todos.push(data);
    }, error => {
        console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
    });
  }

  public update(event: EventPing): void {
    if ('check' === event.label) {
      console.log(`%c"${event.label}-Event" wurde getriggert. `, `color: green;`);
      if (!event.object.status) {
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
        this.$todos.push(event.object);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosdone.push(event.object);
      }
    }
    if ('delete' === event.label) {
      console.log(`%c"${event.label}-Event" wurde getriggert. `, `color: green;`);
      if (event.object.status) {
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
      }
    }
    if ('label' === event.label) {
      console.log(`%c"${event.label}-Event" wurde getriggert. `, `color: green;`);
      if (event.object.status) {
        this.$todosdone.forEach((toDo: ToDo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      } else {
        this.$todos.forEach((toDo: ToDo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      }
    }
    console.log(this.$todos);
  }
}
