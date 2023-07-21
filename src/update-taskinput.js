/* eslint-disable import/prefer-default-export */

import { saveTasks } from '../modules/taskStatus.js';

export function updateTaskDescription(tasks, taskIndex, description) {
  tasks[taskIndex].description = description.trim();
  saveTasks(tasks);
  return tasks;
}
