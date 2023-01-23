import { useTaskStatistics, useTimer } from '@app/hooks';
import { clsxm } from '@app/utils';
import { Button, ProgressBar, Text, Tooltip } from 'lib/components';
import { TimerPlayIcon, TimerStopIcon } from 'lib/components/svgs';
import { pad } from '@app/helpers';
import { IClassName } from '@app/interfaces';

export function Timer({ className }: IClassName) {
	const {
		fomatedTimeCounter: { hours, minutes, seconds, ms_p },
		timerStatus,
		timerStatusFetching,
		startTimer,
		stopTimer,
		canRunTimer,
		timerSeconds,
	} = useTimer();

	const { activeTaskEstimation } = useTaskStatistics(timerSeconds);

	const timerHanlder = () => {
		if (timerStatusFetching || !canRunTimer) return;
		if (timerStatus?.running) {
			stopTimer();
		} else {
			startTimer();
		}
	};

	return (
		<div className={clsxm('flex flex-row', className)}>
			<div className="border-r-[2px] dark:border-r-[#28292F] pr-5">
				<div className="w-[186px]">
					<Text.Heading as="h3" className="text-4xl tracking-wide font-normal">
						{pad(hours)}:{pad(minutes)}:{pad(seconds)}
						<span className="text-sm">:{pad(ms_p)}</span>
					</Text.Heading>

					<ProgressBar
						width="100%"
						className="mt-2"
						progress={`${activeTaskEstimation}%`}
					/>
				</div>
			</div>

			<div className="ml-5 z-[50]">
				<Tooltip
					label="Please, select or create a new task to start tracking the time"
					placement="top-start"
					enabled={!canRunTimer}
				>
					<Button
						onClick={!timerStatusFetching ? timerHanlder : undefined}
						className={clsxm(
							'bg-primary dark:bg-dark-lighter w-14 h-14 rounded-full inline-block min-w-[14px] !px-0 !py-0',
							'flex justify-center items-center dark:border-[#28292F] dark:border',
							'shadow-primary/30 shadow-xl drop-shadow-3xl dark:shadow-none',
							(timerStatusFetching || !canRunTimer) && [
								'opacity-70 cursor-default',
							]
						)}
					>
						{timerStatus?.running ? <TimerStopIcon /> : <TimerPlayIcon />}
					</Button>
				</Tooltip>
			</div>
		</div>
	);
}