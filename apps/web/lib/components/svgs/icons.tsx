import { IClassName } from '@app/interfaces';
import { clsxm } from '@app/utils';

// ============================= BoxIcon ===========================//

export function BoxIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 21.61V12.54"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.92965 2.47979L4.58965 5.43979C3.37965 6.10979 2.38965 7.78979 2.38965 9.16979V14.8198C2.38965 16.1998 3.37965 17.8798 4.58965 18.5498L9.92965 21.5198C11.0696 22.1498 12.9396 22.1498 14.0796 21.5198L19.4196 18.5498C20.6296 17.8798 21.6196 16.1998 21.6196 14.8198V9.16979C21.6196 7.78979 20.6296 6.10979 19.4196 5.43979L14.0796 2.46979C12.9296 1.83979 11.0696 1.83979 9.92965 2.47979Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= BoxIcon ===========================//

export function SettingsOutlineIcon({ className }: IClassName) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={clsxm('w-6 h-6', className)}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	);
}

// ============================= MoonIcon ===========================//

export function MoonIcon({
	className,
}: {
	className?: string;
	pathClassName?: string;
}) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#7E7991]', className)}
		>
			<path
				d="M1.52232 9.31521C1.79232 13.1777 5.06982 16.3202 8.99232 16.4927C11.7598 16.6127 14.2348 15.3227 15.7198 13.2902C16.3348 12.4577 16.0048 11.9027 14.9773 12.0902C14.4748 12.1802 13.9573 12.2177 13.4173 12.1952C9.74982 12.0452 6.74982 8.97772 6.73482 5.35522C6.72732 4.38022 6.92982 3.45772 7.29732 2.61772C7.70232 1.68771 7.21482 1.24522 6.27732 1.64272C3.30732 2.89522 1.27482 5.88771 1.52232 9.31521Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function MoonDarkIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.1475 11.9475C16.0275 11.745 15.69 11.43 14.85 11.58C14.385 11.6625 13.9125 11.7 13.44 11.6775C11.6925 11.6025 10.11 10.8 9.00753 9.56253C8.03253 8.47503 7.43253 7.05753 7.42502 5.52753C7.42502 4.67253 7.59002 3.84753 7.92753 3.06753C8.25752 2.31003 8.02502 1.91253 7.86002 1.74753C7.68752 1.57503 7.28253 1.33503 6.48752 1.66503C3.42002 2.95503 1.52253 6.03003 1.74753 9.32253C1.97253 12.42 4.14753 15.0675 7.02752 16.065C7.71753 16.305 8.44503 16.4475 9.19503 16.4775C9.31503 16.485 9.43503 16.4925 9.55503 16.4925C12.0675 16.4925 14.4225 15.3075 15.9075 13.29C16.41 12.5925 16.275 12.15 16.1475 11.9475Z"
				fill="white"
			/>
		</svg>
	);
}

// ============================= PeopleIcon ===========================//

export function PeopleIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.9704 14.4402C18.3404 14.6702 19.8504 14.4302 20.9104 13.7202C22.3204 12.7802 22.3204 11.2402 20.9104 10.3002C19.8404 9.59016 18.3104 9.35016 16.9404 9.59016"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.00043 14.4402C5.63043 14.6702 4.12043 14.4302 3.06043 13.7202C1.65043 12.7802 1.65043 11.2402 3.06043 10.3002C4.13043 9.59016 5.66043 9.35016 7.03043 9.59016"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.08973 17.7804C7.67973 18.7204 7.67973 20.2603 9.08973 21.2003C10.6897 22.2703 13.3097 22.2703 14.9097 21.2003C16.3197 20.2603 16.3197 18.7204 14.9097 17.7804C13.3197 16.7204 10.6897 16.7204 9.08973 17.7804Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= SunIcon ===========================//

export function SunIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 14.25C11.8995 14.25 14.25 11.8995 14.25 9C14.25 6.10051 11.8995 3.75 9 3.75C6.10051 3.75 3.75 6.10051 3.75 9C3.75 11.8995 6.10051 14.25 9 14.25Z"
				className="fill-primary dark:fill-primary-light"
			/>
			<path
				d="M9 17.22C8.5875 17.22 8.25 16.9125 8.25 16.5V16.44C8.25 16.0275 8.5875 15.69 9 15.69C9.4125 15.69 9.75 16.0275 9.75 16.44C9.75 16.8525 9.4125 17.22 9 17.22ZM14.355 15.105C14.16 15.105 13.9725 15.03 13.8225 14.8875L13.725 14.79C13.4325 14.4975 13.4325 14.025 13.725 13.7325C14.0175 13.44 14.49 13.44 14.7825 13.7325L14.88 13.83C15.1725 14.1225 15.1725 14.595 14.88 14.8875C14.7375 15.03 14.55 15.105 14.355 15.105ZM3.645 15.105C3.45 15.105 3.2625 15.03 3.1125 14.8875C2.82 14.595 2.82 14.1225 3.1125 13.83L3.21 13.7325C3.5025 13.44 3.975 13.44 4.2675 13.7325C4.56 14.025 4.56 14.4975 4.2675 14.79L4.17 14.8875C4.0275 15.03 3.8325 15.105 3.645 15.105ZM16.5 9.75H16.44C16.0275 9.75 15.69 9.4125 15.69 9C15.69 8.5875 16.0275 8.25 16.44 8.25C16.8525 8.25 17.22 8.5875 17.22 9C17.22 9.4125 16.9125 9.75 16.5 9.75ZM1.56 9.75H1.5C1.0875 9.75 0.75 9.4125 0.75 9C0.75 8.5875 1.0875 8.25 1.5 8.25C1.9125 8.25 2.28 8.5875 2.28 9C2.28 9.4125 1.9725 9.75 1.56 9.75ZM14.2575 4.4925C14.0625 4.4925 13.875 4.4175 13.725 4.275C13.4325 3.9825 13.4325 3.51 13.725 3.2175L13.8225 3.12C14.115 2.8275 14.5875 2.8275 14.88 3.12C15.1725 3.4125 15.1725 3.885 14.88 4.1775L14.7825 4.275C14.64 4.4175 14.4525 4.4925 14.2575 4.4925ZM3.7425 4.4925C3.5475 4.4925 3.36 4.4175 3.21 4.275L3.1125 4.17C2.82 3.8775 2.82 3.405 3.1125 3.1125C3.405 2.82 3.8775 2.82 4.17 3.1125L4.2675 3.21C4.56 3.5025 4.56 3.975 4.2675 4.2675C4.125 4.4175 3.93 4.4925 3.7425 4.4925ZM9 2.28C8.5875 2.28 8.25 1.9725 8.25 1.56V1.5C8.25 1.0875 8.5875 0.75 9 0.75C9.4125 0.75 9.75 1.0875 9.75 1.5C9.75 1.9125 9.4125 2.28 9 2.28Z"
				className="fill-primary dark:fill-primary-light"
			/>
		</svg>
	);
}

export function SunDarkIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 13.875C11.6924 13.875 13.875 11.6924 13.875 9C13.875 6.30761 11.6924 4.125 9 4.125C6.30761 4.125 4.125 6.30761 4.125 9C4.125 11.6924 6.30761 13.875 9 13.875Z"
				stroke="#969CA6"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.355 14.355L14.2575 14.2575M14.2575 3.7425L14.355 3.645L14.2575 3.7425ZM3.645 14.355L3.7425 14.2575L3.645 14.355ZM9 1.56V1.5V1.56ZM9 16.5V16.44V16.5ZM1.56 9H1.5H1.56ZM16.5 9H16.44H16.5ZM3.7425 3.7425L3.645 3.645L3.7425 3.7425Z"
				stroke="#969CA6"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= BriefcaseIcon ===========================//

export function BriefcaseIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M7.99983 22H15.9998C20.0198 22 20.7398 20.39 20.9498 18.43L21.6998 10.43C21.9698 7.99 21.2698 6 16.9998 6H6.99983C2.72983 6 2.02983 7.99 2.29983 10.43L3.04983 18.43C3.25983 20.39 3.97983 22 7.99983 22Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.62012 11.27C4.87012 12.81 7.41012 13.74 10.0001 14.03"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= ArrowLeft ===========================//

export function ArrowLeft({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M9.57 5.93018L3.5 12.0002L9.57 18.0702"
				className="stroke-[#292D32] dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.4999 12H3.66992"
				className="stroke-[#292D32] dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= StopIcon ===========================//

export function StopIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-primary dark:stroke-primary-light', className)}
		>
			<path
				d="M6.975 15.75H11.025C14.4 15.75 15.75 14.4 15.75 11.025V6.975C15.75 3.6 14.4 2.25 11.025 2.25H6.975C3.6 2.25 2.25 3.6 2.25 6.975V11.025C2.25 14.4 3.6 15.75 6.975 15.75Z"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= DevicesIcon ===========================//

export function DevicesIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M17.0104 12.7298C17.6014 12.7298 18.0804 12.2507 18.0804 11.6598C18.0804 11.0688 17.6014 10.5898 17.0104 10.5898C16.4195 10.5898 15.9404 11.0688 15.9404 11.6598C15.9404 12.2507 16.4195 12.7298 17.0104 12.7298Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 6V7.78998C19.75 7.75998 19.46 7.73999 19.15 7.73999H14.87C12.73 7.73999 12.02 8.45003 12.02 10.59V15.7H6C2.8 15.7 2 14.9 2 11.7V6C2 2.8 2.8 2 6 2H16C19.2 2 20 2.8 20 6Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 15.7002V20.0002"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 11.8999H12"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.9502 20H12.0002"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.0095 12.7303C17.6004 12.7303 18.0794 12.2512 18.0794 11.6603C18.0794 11.0693 17.6004 10.5903 17.0095 10.5903C16.4185 10.5903 15.9395 11.0693 15.9395 11.6603C15.9395 12.2512 16.4185 12.7303 17.0095 12.7303Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.9995 7.79022C19.7495 7.76022 19.4595 7.74023 19.1495 7.74023H14.8695C12.7295 7.74023 12.0195 8.45027 12.0195 10.5903V19.1503C12.0195 21.2903 12.7295 22.0002 14.8695 22.0002H19.1495C21.2895 22.0002 21.9995 21.2903 21.9995 19.1503V10.5903C21.9995 8.76027 21.4795 7.98022 19.9995 7.79022ZM17.0096 10.5903C17.5996 10.5903 18.0795 11.0702 18.0795 11.6602C18.0795 12.2502 17.5996 12.7302 17.0096 12.7302C16.4196 12.7302 15.9395 12.2502 15.9395 11.6602C15.9395 11.0702 16.4196 10.5903 17.0096 10.5903ZM17.0096 19.1503C15.8296 19.1503 14.8695 18.1903 14.8695 17.0103C14.8695 16.5203 15.0395 16.0603 15.3195 15.7003C15.7095 15.2003 16.3196 14.8702 17.0096 14.8702C17.5496 14.8702 18.0395 15.0703 18.4095 15.3903C18.8595 15.7903 19.1495 16.3703 19.1495 17.0103C19.1495 18.1903 18.1896 19.1503 17.0096 19.1503Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.1491 17.0101C19.1491 18.1901 18.1892 19.1501 17.0092 19.1501C15.8292 19.1501 14.8691 18.1901 14.8691 17.0101C14.8691 16.5201 15.0392 16.0601 15.3192 15.7001C15.7092 15.2001 16.3192 14.8701 17.0092 14.8701C17.5492 14.8701 18.0391 15.0701 18.4091 15.3901C18.8591 15.7901 19.1491 16.3701 19.1491 17.0101Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.0095 12.7303C17.6004 12.7303 18.0794 12.2512 18.0794 11.6603C18.0794 11.0693 17.6004 10.5903 17.0095 10.5903C16.4185 10.5903 15.9395 11.0693 15.9395 11.6603C15.9395 12.2512 16.4185 12.7303 17.0095 12.7303Z"
				className="stroke-default dark:stroke-white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// ============================= Timer Stop ===============================//

export function TimerStopIcon() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23.7533 9.07667L5.29667 20.16C4.585 20.5917 3.62833 20.16 3.535 19.3317C3.51167 19.11 3.5 18.8883 3.5 18.6667V9.33333C3.5 5.83333 5.83333 3.5 9.33333 3.5H18.6667C22.1667 3.5 23.6017 5.29667 24.2783 7.75833C24.4183 8.27167 24.1967 8.80833 23.7533 9.07667Z"
				fill="white"
			/>
			<path
				d="M24.4999 12.9383V18.6666C24.4999 22.1666 22.1666 24.4999 18.6666 24.4999H9.33323C8.2599 24.4999 7.2449 24.2083 6.38156 23.6949C5.6349 23.2633 5.68156 22.1666 6.41656 21.7233L22.7266 11.9349C23.5082 11.4683 24.4999 12.0283 24.4999 12.9383Z"
				fill="white"
			/>
		</svg>
	);
}

// ============================= Timer Play ===============================//

export function TimerPlayIcon({ className }: IClassName) {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-white', className)}
		>
			<path d="M20.4043 11.2L6.53268 19.565C5.71602 20.055 4.66602 19.4717 4.66602 18.515V9.18168C4.66602 5.11002 9.06435 2.56668 12.5993 4.59668L17.9544 7.67668L20.3927 9.07668C21.1977 9.55502 21.2094 10.7217 20.4043 11.2Z" />
			<path d="M21.1056 18.0367L16.3806 20.7667L11.6673 23.485C9.97559 24.4533 8.06226 24.255 6.67393 23.275C5.99726 22.8083 6.07893 21.77 6.79059 21.35L21.6189 12.46C22.3189 12.04 23.2406 12.4367 23.3689 13.2417C23.6606 15.05 22.9139 16.9983 21.1056 18.0367Z" />
		</svg>
	);
}

//  ============================= Logout Icons ============================= //

export function LogoutIcon({ className }: IClassName) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={clsxm('w-6 h-6', className)}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
			/>
		</svg>
	);
}

//  ============================= Tick Circle Icon ============================= //

export function TickCircleIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#BEBCC8]', className)}
		>
			<path
				d="M7.99992 14.6666C11.6666 14.6666 14.6666 11.6666 14.6666 7.99992C14.6666 4.33325 11.6666 1.33325 7.99992 1.33325C4.33325 1.33325 1.33325 4.33325 1.33325 7.99992C1.33325 11.6666 4.33325 14.6666 7.99992 14.6666Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.16675 7.99995L7.05341 9.88661L10.8334 6.11328"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Timer Icon ============================= //

export function TimerIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M11.43 1.5H6.57003C3.75003 1.5 3.53253 4.035 5.05503 5.415L12.945 12.585C14.4675 13.965 14.25 16.5 11.43 16.5H6.57003C3.75003 16.5 3.53253 13.965 5.05503 12.585L12.945 5.415C14.4675 4.035 14.25 1.5 11.43 1.5Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Login Icon ============================= //

export function LoginIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M6.67505 5.67018C6.90755 2.97018 8.29505 1.86768 11.3325 1.86768H11.43C14.7825 1.86768 16.125 3.21018 16.125 6.56268V11.4527C16.125 14.8052 14.7825 16.1477 11.43 16.1477H11.3325C8.31755 16.1477 6.93005 15.0602 6.68255 12.4052"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.5 9H11.16"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.48755 6.4873L12 8.99981L9.48755 11.5123"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Search Status Icon ============================= //

export function SearchStatusIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M10.5 3.75H15"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.5 6H12.75"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.75 8.625C15.75 12.5625 12.5625 15.75 8.625 15.75C4.6875 15.75 1.5 12.5625 1.5 8.625C1.5 4.6875 4.6875 1.5 8.625 1.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.5 16.5L15 15"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Clock Icon ============================= //

export function ClockIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.7825 11.3848L9.45753 9.99732C9.05253 9.75732 8.72253 9.17982 8.72253 8.70732V5.63232"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Close Circle Icon ============================= //

export function CloseCircleIcon({ className }: IClassName) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.87744 11.1224L11.1224 6.87744"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.1224 11.1224L6.87744 6.87744"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Circle Icon ============================= //

export function CircleIcon({ className }: IClassName) {
	return (
		<svg
			width="17"
			height="18"
			viewBox="0 0 17 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32]', className)}
		>
			<path
				d="M8.5 16.5C12.625 16.5 16 13.125 16 9C16 4.875 12.625 1.5 8.5 1.5C4.375 1.5 1 4.875 1 9C1 13.125 4.375 16.5 8.5 16.5Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Close Icon ============================= //

export function CloseIcon({ className }: IClassName) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#7E7991]', className)}
		>
			<path
				d="M4.16748 4.16675L15.8334 15.8326"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.16664 15.8326L15.8325 4.16675"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Mail Icon ============================= //

export function MailIcon({ className }: IClassName) {
	return (
		<svg
			width="16"
			height="17"
			viewBox="0 0 16 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#B1AEBC]', className)}
		>
			<path
				d="M4.6665 6.5L7.99984 8.83333L11.3332 6.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.33325 11.8333V5.16659C1.33325 4.81296 1.47373 4.47382 1.72378 4.22378C1.97382 3.97373 2.31296 3.83325 2.66659 3.83325H13.3333C13.6869 3.83325 14.026 3.97373 14.2761 4.22378C14.5261 4.47382 14.6666 4.81296 14.6666 5.16659V11.8333C14.6666 12.1869 14.5261 12.526 14.2761 12.7761C14.026 13.0261 13.6869 13.1666 13.3333 13.1666H2.66659C2.31296 13.1666 1.97382 13.0261 1.72378 12.7761C1.47373 12.526 1.33325 12.1869 1.33325 11.8333Z"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

//  ============================= Edit Icon ============================= //

export function EditIcon({ className }: IClassName) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#292D32] dark:stroke-slate-300', className)}
		>
			<path
				d="M9.1665 1.6665H7.49984C3.33317 1.6665 1.6665 3.33317 1.6665 7.49984V12.4998C1.6665 16.6665 3.33317 18.3332 7.49984 18.3332H12.4998C16.6665 18.3332 18.3332 16.6665 18.3332 12.4998V10.8332"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.3666 2.51688L6.7999 9.08354C6.5499 9.33354 6.2999 9.82521 6.2499 10.1835L5.89157 12.6919C5.75823 13.6002 6.3999 14.2335 7.30823 14.1085L9.81657 13.7502C10.1666 13.7002 10.6582 13.4502 10.9166 13.2002L17.4832 6.63354C18.6166 5.50021 19.1499 4.18354 17.4832 2.51688C15.8166 0.850211 14.4999 1.38354 13.3666 2.51688Z"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.4248 3.4585C12.9831 5.45016 14.5415 7.0085 16.5415 7.57516"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

//  ============================= Edit Icon ============================= //

export function DraggerIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-[#CCCCCC]', className)}
		>
			<path
				d="M9 3H11V5H9V3ZM13 3H15V5H13V3ZM9 7H11V9H9V7ZM13 7H15V9H13V7ZM9 11H11V13H9V11ZM13 11H15V13H13V11ZM9 15H11V17H9V15ZM13 15H15V17H13V15ZM9 19H11V21H9V19ZM13 19H15V21H13V19Z"
				fill="#CCCCCC"
			/>
		</svg>
	);
}

//  ============================= More Icon ============================= //

export function MoreIcon({ className }: IClassName) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('stroke-[#282048] dark:stroke-[#CCCCCC]', className)}
		>
			<path
				d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
				strokeWidth="1.5"
			/>
			<path
				d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
				strokeWidth="1.5"
			/>
			<path
				d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

//  ============================= Pause Icon ============================= //

export function PauseIcon({ className }: IClassName) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-[#B87B1E]', className)}
		>
			<path d="M4.44395 7.92772V2.07242C4.44395 1.51654 4.20924 1.29419 3.6163 1.29419H2.12159C1.52865 1.29419 1.29395 1.51654 1.29395 2.07242V7.92772C1.29395 8.4836 1.52865 8.70595 2.12159 8.70595H3.6163C4.20924 8.70595 4.44395 8.4836 4.44395 7.92772Z" />
			<path d="M8.70566 7.92772V2.07242C8.70566 1.51654 8.47096 1.29419 7.87802 1.29419H6.38331C5.79449 1.29419 5.55566 1.51654 5.55566 2.07242V7.92772C5.55566 8.4836 5.79037 8.70595 6.38331 8.70595H7.87802C8.47096 8.70595 8.70566 8.4836 8.70566 7.92772Z" />
		</svg>
	);
}

//  ============================= Stop Circle Icon ============================= //

export function StopCircleIcon({ className }: IClassName) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={clsxm('fill-[#E65B5B]', className)}
		>
			<path d="M4.98728 0.882324C2.71433 0.882324 0.869629 2.72703 0.869629 4.99997C0.869629 7.27291 2.71433 9.11762 4.98728 9.11762C7.26022 9.11762 9.10492 7.27291 9.10492 4.99997C9.10492 2.72703 7.26434 0.882324 4.98728 0.882324ZM6.74139 5.50644C6.74139 6.18997 6.18963 6.74174 5.5061 6.74174H4.49316C3.80963 6.74174 3.25786 6.18997 3.25786 5.50644V4.4935C3.25786 3.80997 3.80963 3.25821 4.49316 3.25821H5.5061C6.18963 3.25821 6.74139 3.80997 6.74139 4.4935V5.50644Z" />
		</svg>
	);
}
