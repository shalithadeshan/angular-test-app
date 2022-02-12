import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {AuthService} from '../../../../+auth/services/auth.service';
import {Users} from '../../../../classes/users';
import {ToDoService} from './to-do.service';
import {Subscription} from 'rxjs';
import {ToDo} from '../../../../classes/to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  user = {} as Users;
  todoList = {} as Subscription;
  todoList$ = [] as ToDo[];

  constructor(private authService: AuthService,
              private todoService: ToDoService) {
    const jsonData = localStorage.getItem('userData');
    if (jsonData != null) {
      this.user = JSON.parse(jsonData);
    }
  }


  ngOnInit(): void {
    this.authService.getTodosById(this.user.id.toString())
      .subscribe(res => {
        // console.log(res);
        this.todoService.setTodoList(res);
      });


    this.todoList = this.todoService.getTodoList()
      .subscribe(res => {
        this.todoList$ = res;
      });
  }

  onToDo(event: MatTabChangeEvent): void {
    this.todoService.filterTodoList(event.tab.ariaLabel);
  }

  ngOnDestroy(): void {
    this.todoList.unsubscribe();
  }
}
