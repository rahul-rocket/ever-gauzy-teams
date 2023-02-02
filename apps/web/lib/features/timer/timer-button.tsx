import { IClassName } from '@app/interfaces';
import { clsxm } from '@app/utils';
import { Button } from 'lib/components';
import { TimerPlayIcon, TimerStopIcon } from 'lib/components/svgs';
import { MouseEventHandler } from 'react';

type Props = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	running: boolean | undefined;
	disabled: boolean;
} & IClassName;

export function TimerButton({ onClick, running, disabled, className }: Props) {
	return (
		<Button
			onClick={onClick}
			className={clsxm(
				'bg-primary dark:bg-dark-lighter w-14 h-14 rounded-full inline-block min-w-[14px] !px-0 !py-0',
				'flex justify-center items-center dark:border-[#28292F] dark:border',
				'shadow-primary/30 shadow-xl drop-shadow-3xl dark:shadow-none',
				disabled && ['opacity-70 cursor-default'],
				className
			)}
		>
			{running ? (
				<TimerStopIcon className="w-[60%] h-[60%]" />
			) : (
				<TimerPlayIcon className="w-[60%] h-[60%]" />
			)}
		</Button>
	);
}