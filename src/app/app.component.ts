import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task Manager';
  newTaskName: string = '';
  showTaskList: boolean = true;
  tasks: { name: string; completed: boolean }[] = [];

  addTask() {
    if (this.newTaskName.trim()) {
      this.tasks.push({ name: this.newTaskName.trim(), completed: false });
      this.newTaskName = '';
    }
  }

  markAsCompleted(task: { name: string; completed: boolean }) {
    task.completed = true;
  }

  toggleTaskList() {
    this.showTaskList = !this.showTaskList;
  }
}
