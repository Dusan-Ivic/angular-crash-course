import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TASKS } from "../data/mock-tasks";
import { Task } from "../types/Task";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
