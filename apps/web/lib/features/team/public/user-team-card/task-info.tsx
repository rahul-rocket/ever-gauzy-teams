import { I_TeamMemberCardHook, I_TMCardTaskEditHook } from '@app/hooks';
import { IClassName } from '@app/interfaces';
import { clsxm } from '@app/utils';
import {
	TaskAllStatusTypes,
	TaskInput,
	TaskNameInfoDisplay,
} from 'lib/features';

type Props = IClassName & {
	edition: I_TMCardTaskEditHook;
	memberInfo: I_TeamMemberCardHook;
};

export function PublicTaskInfo({ className, memberInfo, edition }: Props) {
	return (
		<div
			className={clsxm(
				'h-full flex flex-col items-start justify-center',
				className
			)}
		>
			{/* task */}
			<div
				className={clsxm(
					'w-full h-[40px]',
					edition.editMode ? ['mb-2'] : ['overflow-hidden']
				)}
			>
				{edition.task && (
					<PublicTaskDetailAndEdition memberInfo={memberInfo} edition={edition} />
				)}
				{!edition.task && <div className="text-center">--</div>}
			</div>

			{edition.task && <TaskAllStatusTypes task={edition.task} />}
			{!edition.task && <div className="text-center self-center">--</div>}
		</div>
	);
}

/**
 *  A component that is used to display the task name and also allow the user to edit the task name.
 */
function PublicTaskDetailAndEdition({ edition, memberInfo }: Props) {
	const task = edition.task;
	const hasEditMode = edition.editMode && task;

	edition.taskEditIgnoreElement.onOutsideClick(() => {
		edition.setEditMode(false);
	});

	return (
		<>
			{/* Task value */}
			<div
				ref={edition.taskEditIgnoreElement.targetEl}
				className={clsxm(
					'text-sm text-ellipsis cursor-default overflow-hidden',
					hasEditMode && ['hidden']
				)}
				onDoubleClick={() =>
					(memberInfo.isAuthTeamManager || memberInfo.isAuthUser) &&
					task &&
					edition.setEditMode(true)
				}
			>
				<TaskNameInfoDisplay task={task} />
			</div>

			{/* Show task input combobox when in edit mode */}
			<div
				ref={edition.taskEditIgnoreElement.ignoreElementRef}
				className={clsxm(!hasEditMode && ['hidden'])}
			>
				{hasEditMode && (
					<TaskInput
						task={task}
						initEditMode={true}
						keepOpen={true}
						showCombobox={false}
						onTaskClick={(e) => {
							console.log(e);
						}}
					/>
				)}
			</div>
		</>
	);
}