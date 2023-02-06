/* eslint-disable no-mixed-spaces-and-tabs */
import { withAuthentication } from 'lib/app/authenticator';
import { Button, InputField, Text } from 'lib/components';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { userState } from '@app/stores';
import { useRecoilState } from 'recoil';
import ListCard from './list-card';
import { LanguageDropDown } from './language-dropdown';

import { PlusIcon } from '@heroicons/react/20/solid';
import { useTaskPriorities } from '@app/hooks/features/useTaskPriorities';
import { Spinner } from '@components/ui/loaders/spinner';

const TaskPrioritiesForm = () => {
	const [user] = useRecoilState(userState);
	const { register, setValue, handleSubmit } = useForm();
	const [createNew, setCreateNew] = useState(false);

	const {
		loading,
		taskPriorities,
		deleteTaskPriorities,
		createTaskPriorities,
	} = useTaskPriorities();

	useEffect(() => {
		setValue('name', '');
	}, [taskPriorities]);

	const onSubmit = useCallback(
		async (values: any) => {
			console.log(values);
			// TODO: Color, icon
			createTaskPriorities({
				name: values.name,
				color: '#f5b8b8',
				// description: '',
				organizationId: user?.employee.organizationId,
				tenantId: user?.tenantId,
				// icon: '',
				// projectId: '',
			});
			setCreateNew(false);
		},
		[taskPriorities]
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
						<Text className="flex-none flex-grow-0 text-md text-gray-400 font-medium mb-2 w-[20%]">
							Task Priorities
						</Text>

						<div className="flex flex-col">
							{!createNew && (
								<Button
									variant="outline"
									className="font-normal justify-start border-2 rounded-[10px] text-md w-[230px] h-[46px] gap-0"
									onClick={() => {
										setCreateNew(true);
									}}
								>
									<span className="mr-[11px]">
										<PlusIcon className=" font-normal w-[16px] h-[16px]" />
									</span>
									Create new Priorities
								</Button>
							)}

							{createNew && (
								<>
									<Text className="flex-none flex-grow-0 text-md text-gray-400 font-medium mb-2">
										New Priorities
									</Text>
									<div className="flex  w-full gap-x-5 items-center mt-3">
										<InputField
											type="text"
											placeholder="Create Priority"
											className="mb-0"
											wrapperClassName="mb-0"
											{...register('name')}
										/>

										<LanguageDropDown />

										<LanguageDropDown />
									</div>
									<div className="flex gap-x-4 mt-5">
										<Button
											variant="primary"
											className="font-normal py-4 px-4 rounded-xl text-md"
											type="submit"
										>
											Create
										</Button>
										<Button
											variant="grey"
											className="font-normal py-4 px-4 rounded-xl text-md"
											onClick={() => {
												setCreateNew(false);
											}}
										>
											Cancel
										</Button>
									</div>
								</>
							)}

							<Text className="flex-none flex-grow-0 text-md text-gray-400 font-medium mb-[1rem] w-full mt-[2.4rem]">
								List of Priorities
							</Text>
							<div className="flex flex-wrap w-full gap-3">
								{loading && !taskPriorities?.length && <Spinner dark={false} />}
								{taskPriorities &&
									taskPriorities?.length &&
									taskPriorities.map((priority) => (
										<ListCard
											statusTitle={
												priority?.value
													? priority?.value?.split('-').join(' ')
													: ''
											}
											bgColor={priority?.color || ''}
											statusIcon={priority?.icon || ''}
											onEdit={() => {
												console.log('Edit');
											}}
											onDelete={() => {
												deleteTaskPriorities(priority.id);
											}}
										/>
									))}
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
export default withAuthentication(TaskPrioritiesForm, {
	displayName: 'TaskPrioritiesForm',
});