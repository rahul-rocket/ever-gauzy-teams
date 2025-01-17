import {
	DeleteReponse,
	PaginationResponse,
	SingleDataResponse,
} from '@app/interfaces/IDataResponse';
import { ICreateTask, ITeamTask } from '@app/interfaces/ITask';
import { serverFetch } from '../fetch';
import { IUser } from '@app/interfaces';

export function getTeamTasksRequest({
	tenantId,
	organizationId,
	bearer_token,
	relations = ['tags', 'teams', 'members', 'members.user', 'creator'],
}: {
	tenantId: string;
	organizationId: string;
	bearer_token: string;
	relations?: string[];
}) {
	const obj = {
		'where[organizationId]': organizationId,
		'where[tenantId]': tenantId,
		'join[alias]': 'task',
		'join[leftJoinAndSelect][members]': 'task.members',
		'join[leftJoinAndSelect][user]': 'members.user',
	} as Record<string, string>;

	relations.forEach((rl, i) => {
		obj[`relations[${i}]`] = rl;
	});

	const query = new URLSearchParams(obj);
	return serverFetch<PaginationResponse<ITeamTask>>({
		path: `/tasks/team?${query.toString()}`,
		method: 'GET',
		bearer_token,
		tenantId,
	});
}

export function deleteTaskRequest({
	tenantId,
	taskId,
	bearer_token,
}: {
	tenantId: string;
	taskId: string;
	bearer_token: string;
}) {
	return serverFetch<DeleteReponse>({
		path: `/tasks/${taskId}?tenantId=${tenantId}`,
		method: 'DELETE',
		bearer_token,
		tenantId,
	});
}

export function getTaskCreator({
	userId,
	bearer_token,
}: {
	userId: string;
	bearer_token: string;
}) {
	return serverFetch<SingleDataResponse<IUser>>({
		path: `/user/${userId}`,
		method: 'GET',
		bearer_token,
	});
}

export function createTaskRequest({
	data,
	bearer_token,
}: {
	data: ICreateTask;
	bearer_token: string;
}) {
	return serverFetch({
		path: '/tasks',
		method: 'POST',
		body: data,
		bearer_token,
	});
}

export function updateTaskRequest<ITeamTask>(
	{ data, id }: { data: ITeamTask; id: string },
	bearer_token: string
) {
	return serverFetch({
		path: `/tasks/${id}`,
		method: 'PUT',
		body: data,
		bearer_token,
	});
}
