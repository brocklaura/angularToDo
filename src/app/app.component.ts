import { Component, ɵisBoundToModule__POST_R3__, Injectable } from '@angular/core';
import { ngOnInit } from './interfaces/task';
import { Todo } from './interfaces/task';
import { HttpClient, HttpParams } from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements ngOnInit {
  title = 'Your To-Do List:';

  // todoArray: Task[] = [
  //   { task:"Do Homework", completed: false },
  //   { task:"Clean room", completed: false },
  //   { task:"Do dishes", completed: false },
  //   { task:"Pay bills", completed: true },
  //   { task:"Online shop", completed: true },
  // ];

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  filter: string;
  searchTodos: string;
  

ngOnInit() {
  this.filter = 'all';
  this.idForTodo = 4;
  this.todoTitle='';
  this.todos = [
    {
      'id': 1,
      'title': 'Do Homework',
      'completed': false,
      'editing': false,
    },
    {
      'id': 2,
      'title': 'Go to bed',
      'completed': false,
      'editing': false,
    },
    {
      'id': 3,
      'title': 'Take a shower',
      'completed': false,
      'editing': false,
    },
  ];

  
}
addTodo(): void {
  if (this.todoTitle.trim().length == 0)
  {
    return;
  }
  this.todos.push({
    id: this.idForTodo,
    title: this.todoTitle,
    completed: false,
    editing: false

  })

  this.todoTitle = '';
  this.idForTodo++;
}

deleteTodo(id: number): void {
this.todos = this.todos.filter(todo => todo.id != id)
}

editTodo(todo: Todo): void {
  todo.editing = true;
}

doneEdit(todo: Todo): void {
  todo.editing = false;
}

remaining(): number {
  
  return this.todos.filter(todo => !todo.completed).length;
}

congrats(): string {
  if(this.remaining()==0)
  {
    return 'Congrats you are all done!!';
  }
}

atLeastOneCompleted(): boolean {
  return this.todos.filter(todo => !todo.completed).length > 0;
  
}

clearCompleted(): void {
  this.todos = this.todos.filter(todo => !todo.completed);
}

checkAllTodos(): void {
  this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked);
}

todosFiltered(): Todo[] {
  if(this.filter == 'all')
  {
    return this.todos
  } else if (this.filter == 'active') {
    return this.todos.filter(todo => !todo.completed)
  } else if (this.filter == 'completed') {
    return this.todos.filter(todos => todos.completed)
  }

  return this.todos
}

FilterTodos = '';


Search(): string {
  if (this.todoTitle.includes(this.FilterTodos))
  {
    return this.todoTitle;
  } else 
  {
    return;
  }
  
}

}


// Search(): Todo[] {
// if (this.filter == this.FilterTodos)
// {
//   return this.todos.filter(todo => !todo.title)
// } else if (this.todos.filter != this.todosFiltered)
// {
//   return ;
// }

// this.todos = this.todos.filter(res=>{
// return res.title.match(this.todoTitle)
// });
// if(this.title != '')
//   {

//   } else if (this.title == '')
//   {
//     this.ngOnInit();
//   }

//   return this.todos
  
// }



