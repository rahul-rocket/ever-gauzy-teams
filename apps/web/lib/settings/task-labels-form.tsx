/* eslint-disable no-mixed-spaces-and-tabs */
import { Button, InputField, Text } from 'lib/components';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { userState } from '@app/stores';
import { useRecoilState } from 'recoil';
import { PlusIcon } from '@heroicons/react/20/solid';
import { IColor, ITaskLabelsItemList } from '@app/interfaces';
import { useTaskLabels } from '@app/hooks/features/useTaskLabels';
import { StatusesListCard } from './list-card';
import { Spinner } from '@components/ui/loaders/spinner';
import { useTranslation } from 'lib/i18n';
import { ColorDropdown } from './color-dropdown';

export const TaskLabelForm = () => {
	const [user] = useRecoilState(userState);
	const { register, setValue, handleSubmit } = useForm();
	const [createNew, setCreateNew] = useState(false);
	const [edit, setEdit] = useState<ITaskLabelsItemList | null>(null);
	const { trans } = useTranslation('settingsTeam');

	const {
		loading,
		taskLabels,
		deleteTaskLabels,
		createTaskLabels,
		editTaskLabels,
	} = useTaskLabels();

	useEffect(() => {
		if (!edit) {
			setValue('name', '');
			setValue('color', '');
		}
	}, [edit, setValue]);

	useEffect(() => {
		if (edit) {
			setValue('name', edit.name);
			setValue('color', edit.color);
		} else {
			setValue('name', '');
			setValue('color', '');
		}
	}, [edit, setValue]);

	const onSubmit = useCallback(
		async (values: any) => {
			// TODO: icon
			if (createNew) {
				createTaskLabels({
					name: values.name,
					color: values.color,
					// description: '',
					organizationId: user?.employee.organizationId,
					tenantId: user?.tenantId,
					// icon: '',
					// projectId: '',
				})?.then(() => {
					setCreateNew(false);
				});
			}
			if (edit && (values.name !== edit.name || values.color !== edit.color)) {
				editTaskLabels(edit.id, {
					name: values.name,
					color: values.color,
				})?.then(() => {
					setEdit(null);
				});
			}
		},
		[edit, createNew, editTaskLabels, user, createTaskLabels]
	);

	return (
		<>
			<form
				className="w-full"
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<div className="flex">
					<div className="rounded-md m-h-64 p-[32px] flex gap-x-[2rem]">
						<Text className="flex-none flex-grow-0 text-md text-gray-400 font-medium mb-2 w-[200px]">
							{trans.TASK_LABELS}
						</Text>

						<div className="flex flex-col">
							{!createNew && !edit && (
								<Button
									variant="outline"
									className="font-normal justify-start border-2 rounded-[10px] text-md w-[230px] h-[46px] gap-0"
									onClick={() => {
										setEdit(null);
										setCreateNew(true);
									}}
								>
									<span className="mr-[11px]">
										<PlusIcon className=" font-normal w-[16px] h-[16px]" />
									</span>
									{trans.CREATE_NEW_LABELS}
								</Button>
							)}

							{(createNew || edit) && (
								<>
									<Text className="flex-none flex-grow-0 text-md text-gray-400 font-medium mb-2">
										{createNew && 'New'}
										{edit && 'Edit'} Labels
									</Text>
									<div className="flex w-full gap-x-5 items-center mt-3">
										<InputField
											type="text"
											placeholder="Create Label"
											className="mb-0"
											wrapperClassName="mb-0"
											{...register('name')}
										/>

										<ColorDropdown
											setValue={setValue}
											active={
												edit
													? ({ title: edit.color, color: edit.color } as IColor)
													: null
											}
										/>

										<ColorDropdown
											setValue={setValue}
											active={
												edit
													? ({ title: edit.color, color: edit.color } as IColor)
													: null
											}
										/>
									</div>
									<div className="flex gap-x-4 mt-5">
										<Button
											variant="primary"
											className="font-normal py-4 px-4 rounded-xl text-md"
											type="submit"
										>
											{edit ? 'Save' : 'Create'}
										</Button>
										<Button
											variant="grey"
											className="font-normal py-4 px-4 rounded-xl text-md"
											onClick={() => {
												setCreateNew(false);
												setEdit(null);
											}}
										>
											Cancel
										</Button>
									</div>
								</>
							)}

							<Text className="flex-none flex-grow-0 text-md text-gray-400 font-medium mb-[1rem] w-full mt-[2.4rem]">
								{trans.LIST_OF_LABELS}
							</Text>
							<div className="flex flex-wrap w-full gap-3">
								{loading && !taskLabels?.length && <Spinner dark={false} />}
								{taskLabels && taskLabels?.length ? (
									taskLabels.map((label) => (
										<StatusesListCard
											statusTitle={
												label?.name ? label?.name?.split('-').join(' ') : ''
											}
											bgColor={label?.color || ''}
											statusIcon={label?.icon || ''}
											onEdit={() => {
												setCreateNew(false);
												setEdit(label);
											}}
											onDelete={() => {
												deleteTaskLabels(label.id);
											}}
											key={label.id}
										/>
									))
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};