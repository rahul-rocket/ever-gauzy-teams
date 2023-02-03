import {
	IClassName,
	ITaskLabel,
	ITaskProperty,
	ITaskSize,
	ITaskStatus,
	ITaskStatusField,
	ITaskStatusStack,
	ITeamTask,
	Nullable,
} from '@app/interfaces';
import { clsxm } from '@app/utils';
import { Listbox, Transition } from '@headlessui/react';
import { Card } from 'lib/components';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
	CircleIcon,
	ClockIcon,
	CloseCircleIcon,
	LoginIcon,
	RecordIcon,
	SearchStatusIcon,
	TickCircleIcon,
	TimerIcon,
} from 'lib/components/svgs';
import {
	Fragment,
	PropsWithChildren,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useCallbackRef, useTeamTasks } from '@app/hooks';

type TStatusItem = {
	bgColor?: string;
	icon: React.ReactNode;
	name?: string;
};

type TStatus<T extends string> = {
	[k in T]: TStatusItem;
};

type TTaskStatusesDropdown<T extends ITaskStatusField> = IClassName & {
	defaultValue?: ITaskStatusStack[T];
	onValueChange?: (v: ITaskStatusStack[T]) => void;
};

type IActiveTaskStatuses<T extends ITaskStatusField> =
	TTaskStatusesDropdown<T> & {
		task?: Nullable<ITeamTask>;
	};

function useActiveTaskStatus<T extends ITaskStatusField>(
	props: IActiveTaskStatuses<T>,
	status: TStatus<ITaskStatusStack[T]>,
	field: T
) {
	const { activeTeamTask, handleStatusUpdate } = useTeamTasks();

	const task = props.task !== undefined ? props.task : activeTeamTask;

	function onItemChange(status: ITaskStatusStack[T]) {
		handleStatusUpdate(status, field, task, true);
	}

	const { item, items, onChange } = useStatusValue<T>(
		status,
		task ? task[field] : undefined,
		onItemChange
	);

	return {
		item,
		items,
		onChange,
		task,
		field,
	};
}

function useStatusValue<T extends ITaskStatusField>(
	statusItems: TStatus<ITaskStatusStack[T]>,
	$value: ITaskStatusStack[T] | undefined,
	onValueChange?: (v: ITaskStatusStack[T]) => void
) {
	const onValueChangeRef = useCallbackRef(onValueChange);

	const items = useMemo(() => {
		return Object.keys(statusItems).map((key) => {
			const value = statusItems[key as ITaskStatusStack[T]];
			return {
				...value,
				name: key,
			} as Required<TStatusItem>;
		});
	}, [statusItems]);

	const [value, setValue] = useState<ITaskStatusStack[T] | undefined>($value);

	const item = items.find((r) => r.name === value);

	useEffect(() => {
		setValue($value);
	}, [$value]);

	const onChange = useCallback(
		(value: ITaskStatusStack[T]) => {
			setValue(value);
			onValueChangeRef.current && onValueChangeRef.current(value);
		},
		[setValue, onValueChangeRef]
	);

	return {
		items,
		item,
		onChange,
	};
}

export function TaskStatus({
	children,
	name,
	icon,
	bgColor: backgroundColor,
	className,
	active = true,
}: PropsWithChildren<TStatusItem & IClassName & { active?: boolean }>) {
	return (
		<div
			className={clsxm(
				'py-2 px-4 rounded-xl flex items-center text-sm space-x-3',
				active ? ['dark:text-default'] : ['bg-gray-200 dark:bg-gray-700'],
				className
			)}
			style={{ backgroundColor: active ? backgroundColor : undefined }}
		>
			<div className="flex items-center space-x-3 whitespace-nowrap">
				{active ? icon : <RecordIcon />}

				<span>{name}</span>
			</div>
			{children}
		</div>
	);
}

//! =============== Task Status ================= //

export const taskStatus: TStatus<ITaskStatus> = {
	Todo: {
		icon: <LoginIcon />,
		bgColor: '#D6E4F9',
	},
	'In Progress': {
		icon: <TimerIcon />,
		bgColor: '#ECE8FC',
	},
	'In Review': {
		icon: <SearchStatusIcon />,
		bgColor: ' #F3D8B0',
	},
	Ready: {
		icon: <ClockIcon />,
		bgColor: '#F5F1CB',
	},
	Completed: {
		icon: <TickCircleIcon className="stroke-[#292D32]" />,
		bgColor: '#D4EFDF',
	},
	Blocked: {
		icon: <CloseCircleIcon />,
		bgColor: '#F5B8B8',
	},
	Backlog: {
		icon: <CircleIcon />,
		bgColor: '#F2F2F2',
	},
	Closed: {
		icon: <TickCircleIcon className="stroke-[#acacac]" />,
		bgColor: '#eaeaea',
	},
};

/**
 * Task status dropwdown
 */
export function TaskStatusDropdown({
	className,
	defaultValue,
	onValueChange,
}: TTaskStatusesDropdown<'status'>) {
	const { item, items, onChange } = useStatusValue<'status'>(
		taskStatus,
		defaultValue,
		onValueChange
	);

	return (
		<StatusDropdown
			className={className}
			items={items}
			value={item}
			onChange={onChange}
		/>
	);
}

/**
 * If no task hasn't been passed then the auth active task will used
 *
 * @param props
 * @returns
 */
export function ActiveTaskStatusDropdown(props: IActiveTaskStatuses<'status'>) {
	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		taskStatus,
		'status'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
		/>
	);
}

//! =============== Task properties ================= //

export const taskProperties: TStatus<ITaskProperty> = {
	Medium: {
		icon: <LoginIcon />,
		bgColor: '#ECE8FC',
	},
	High: {
		icon: <LoginIcon />,
		bgColor: '#B8D1F5',
	},
	Low: {
		icon: <LoginIcon />,
		bgColor: '#D4EFDF',
	},
	Urgent: {
		icon: <LoginIcon />,
		bgColor: '#F5B8B8',
	},
};

/**
 * Task dropdown that allows you to select a task property
 * @param {IClassName}  - IClassName - This is the interface that the component will accept.
 * @returns A dropdown with the task properties
 */
export function TaskPropertiesDropdown({ className }: IClassName) {
	const { item, items, onChange } = useStatusValue<'property'>(
		taskProperties,
		'Low'
	);

	return (
		<StatusDropdown
			className={className}
			items={items}
			value={item}
			onChange={onChange}
		/>
	);
}

export function ActiveTaskPropertiesDropdown(
	props: IActiveTaskStatuses<'property'>
) {
	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		taskProperties,
		'property'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
		/>
	);
}

//! =============== Task Sizes ================= //

export const taskSizes: TStatus<ITaskSize> = {
	'Extra Large': {
		icon: <TickCircleIcon className="stroke-[#292D32]" />,
		bgColor: '#F5B8B8',
	},
	Large: {
		icon: <TickCircleIcon className="stroke-[#292D32]" />,
		bgColor: '#F3D8B0',
	},
	Medium: {
		icon: <TickCircleIcon className="stroke-[#292D32]" />,
		bgColor: '#F5F1CB',
	},
	Small: {
		icon: <TickCircleIcon className="stroke-[#292D32]" />,
		bgColor: '#B8D1F5',
	},
	Tiny: {
		icon: <TickCircleIcon className="stroke-[#292D32]" />,
		bgColor: '#ECE8FC',
	},
};

/**
 * Task dropdown that lets you select a task size
 * @param {IClassName}  - IClassName - This is the interface that the component will accept.
 * @returns A React component
 */
export function TaskSizesDropdown({ className }: IClassName) {
	const { item, items, onChange } = useStatusValue<'size'>(taskSizes, 'Medium');

	return (
		<StatusDropdown
			className={className}
			items={items}
			value={item}
			onChange={onChange}
		/>
	);
}

export function ActiveTaskSizesDropdown(props: IActiveTaskStatuses<'size'>) {
	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		taskSizes,
		'size'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
		/>
	);
}

//! =============== Task Label ================= //

export const taskLabels: TStatus<ITaskLabel> = {
	'UI/UX': {
		icon: <ClockIcon />,
		bgColor: '#c2b1c6',
	},
	Mobile: {
		icon: <ClockIcon />,
		bgColor: '#7c7ab7',
	},
	WEB: {
		icon: <ClockIcon />,
		bgColor: '#97b7c1',
	},
	Tablet: {
		icon: <ClockIcon />,
		bgColor: '#b0c8a8',
	},
};

export function TaskLabelsDropdown({ className }: IClassName) {
	const { item, items, onChange } = useStatusValue<'label'>(taskLabels, 'WEB');

	return (
		<StatusDropdown
			className={className}
			items={items}
			value={item}
			onChange={onChange}
		/>
	);
}

export function ActiveTaskLabelsDropdown(props: IActiveTaskStatuses<'label'>) {
	const { item, items, onChange, field } = useActiveTaskStatus(
		props,
		taskLabels,
		'label'
	);

	return (
		<StatusDropdown
			className={props.className}
			items={items}
			value={item}
			defaultItem={!item ? field : undefined}
			onChange={onChange}
		/>
	);
}

//! =============== FC Status drop down ================= //
/**
 * Fc Status drop down
 */
function StatusDropdown<T extends Required<TStatusItem>>({
	value,
	onChange,
	items,
	className,
	defaultItem,
}: {
	value: T | undefined;
	onChange?(value: string): void;
	items: T[];
	className?: string;
	defaultItem?: ITaskStatusField;
}) {
	const defaultValue: TStatusItem = {
		bgColor: undefined,
		icon: <span></span>,
		name: defaultItem,
	};

	return (
		<div className={clsxm('relative', className)}>
			<Listbox value={value?.name || null} onChange={onChange}>
				{({ open }) => (
					<>
						<Listbox.Button className="w-full">
							<TaskStatus
								{...(value || defaultValue)}
								active={!!value}
								className={clsxm(
									'justify-between w-full capitalize',
									!value && [
										'text-dark dark:text-white bg-[#F2F2F2] dark:bg-dark--theme-light',
									]
								)}
							>
								<ChevronDownIcon
									className={clsxm(
										'ml-2 h-5 w-5 text-default transition duration-150 ease-in-out group-hover:text-opacity-80',
										!value && ['text-dark dark:text-white']
									)}
									aria-hidden="true"
								/>
							</TaskStatus>
						</Listbox.Button>

						<Transition
							show={open}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
							className="relative z-40"
						>
							<Listbox.Options className="absolute right-0 z-40">
								<Card
									shadow="bigger"
									className="!px-2 py-2 shadow-xlcard dark:shadow-lgcard-white"
								>
									{items.map((item, i) => (
										<Listbox.Option key={i} value={item.name} as={Fragment}>
											<li className="mb-3 cursor-pointer">
												<TaskStatus {...item} />
											</li>
										</Listbox.Option>
									))}
								</Card>
							</Listbox.Options>
						</Transition>
					</>
				)}
			</Listbox>
		</div>
	);
}
