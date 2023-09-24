import { Component } from "@angular/core";
import { TASKS } from "../../data/mock-tasks";
import { Task } from "../../types/Task";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
