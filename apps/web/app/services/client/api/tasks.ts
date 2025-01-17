import {
	DeleteReponse,
	PaginationResponse,
} from '@app/interfaces/IDataResponse';
import { ICreateTask, ITeamTask } from '@app/interfaces/ITask';
import { ITasksTimesheet } from '@app/interfaces/ITimer';
import api from '../axios';

export function getTeamTasksAPI() {
	return api.get<PaginationResponse<ITeamTask>>('/tasks/team');
}

export function deleteTaskAPI(taskId: string) {
	return api.delete<DeleteReponse>(`/tasks/${taskId}`);
}

export function updateTaskAPI(taskId: string, body: Partial<ITeamTask>) {
	return api.put<PaginationResponse<ITeamTask>>(`/tasks/${taskId}`, body);
}

export function createTeamTaskAPI(
	body: Partial<ICreateTask> & { title: string }
) {
	return api.post<PaginationResponse<ITeamTask>>('/tasks/team', body);
}

export function tasksTimesheetStatisticsAPI(employeeId?: string) {
	return api.get<{ global: ITasksTimesheet[]; today: ITasksTimesheet[] }>(
		`/timer/timesheet/statistics-tasks${
			employeeId ? '?employeeId=' + employeeId : ''
		}`
	);
}

export function activeTaskTimesheetStatisticsAPI() {
	return api.get<{ global: ITasksTimesheet[]; today: ITasksTimesheet[] }>(
		`/timer/timesheet/statistics-tasks?activeTask=true`
	);
}
