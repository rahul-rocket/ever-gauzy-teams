import { authFormValidate } from '@app/helpers/validations';
import { useQuery } from '@app/hooks/useQuery';
import { useSyncRef } from '@app/hooks/useSyncRef';
import {
	sendAuthCodeAPI,
	signInWithEmailAndCodeAPI,
} from '@app/services/client/api';
import AuthCodeInput from '@components/ui/inputs/auth-code-input';
import { Spinner } from '@components/common/spinner';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Input from '@components/common/input';
import LockIcon from '@components/common/passcode/lockIcon';
import Footer from '@components/layout/footer/footer';

const Passcode = () => {
	const { query } = useRouter();
	const { queryCall } = useQuery(signInWithEmailAndCodeAPI);

	const [passcode, setPasscode] = useState({
		email: query.email as string | undefined,
		code: query.code as string | undefined,
	});
	const passcodeRef = useSyncRef(passcode);

	useEffect(() => {
		const { email, code } = passcodeRef.current;
		if (email && code) {
			queryCall(email, code)
				.then((res) => {
					console.log(res);
				})
				.catch(() => {
					setPasscode({
						email: undefined,
						code: undefined,
					});
				});
		}
	}, [passcodeRef]);

	return (
		<div className="flex flex-col h-screen justify-between">
			<div />
			<div className="w-[436px] mx-auto py-[50px] px-[70px] rounded-[40px] shadow-2xl bg-white dark:bg-dark_card_background_color dark:bg-opacity-30">
				<div className="flex justify-center w-full">
					<div className=" bg-[#F5F6FB] rounded-full p-8">
						<LockIcon />
					</div>
				</div>
				<div className="text-[22px] mt-[30px] text-center text-[#1B005D] font-bold dark:text-white">
					Join existed Team
				</div>

				{passcode.code && passcode.email && (
					<div className="flex justify-center mt-20">
						<Spinner height="30px" width="30px" dark={false} />
					</div>
				)}

				{(!passcode.code || !passcode.email) && (
					<PasscodeForm email={passcode.email || ''} />
				)}
			</div>
			<Footer />
		</div>
	);
};

function PasscodeForm({ email }: { email: string }) {
	const [formValues, setFormValues] = useState({ email, code: '' });
	const [errors, setErrors] = useState({} as { [x: string]: any });

	// Queries
	const { queryCall: sendCodeQueryCall, loading: sendCodeLoading } =
		useQuery(sendAuthCodeAPI);

	const { queryCall, loading, infiniteLoading } = useQuery(
		signInWithEmailAndCodeAPI
	);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setErrors({});
		const { errors, valid } = authFormValidate(
			['email', 'code'],
			formValues as any
		);

		if (!valid) {
			setErrors(errors);
			return;
		}

		infiniteLoading.current = true;

		queryCall(formValues.email, formValues.code)
			.then((res) => {
				console.log(res.data);
				window.location.reload();
			})
			.catch((err: AxiosError) => {
				if (err.response?.status === 400) {
					setErrors((err.response?.data as any)?.errors || {});
				}
			});
	};

	const sendAuthCodeHandler = useCallback(() => {
		sendCodeQueryCall(formValues['email'])
			.then(() => setErrors({}))
			.catch((err: AxiosError) => {
				if (err.response?.status === 400) {
					setErrors((err.response?.data as any)?.errors || {});
				}
			});
	}, [formValues, sendCodeQueryCall]);

	return (
		<form onSubmit={handleSubmit} method="post" autoComplete="off">
			<div className="text-[14px] mt-[30px] font-light text-center text-[#ACB3BB] w-full p-0">
				Please enter the invitation code we sent to your Email
			</div>
			<AuthCodeInput
				allowedCharacters="numeric"
				length={6}
				containerClassName="mt-[21px] flex justify-between"
				inputClassName="rounded-md w-[45px] round-[8px] border border-[#F5F6FB] bg-[#F5F6FB]
			py-2 px-2 text-xl text-center font-light text-[#9490A0] outline-none focus:border-[#7D56fd]
			focus:border focus:shadow-md dark:bg-dark_background_color"
				onChange={(code) => {
					setFormValues((v) => ({ ...v, code }));
				}}
			/>
			{errors['code'] && (
				<span className="text-sm text-red-600 font-light">
					{errors['code']}
				</span>
			)}

			<div className="justify-center text-[14px] mt-[21px] flex">
				<span className="text-[#ACB3BB] font-light">Didn’t receive code? </span>
				{!sendCodeLoading && (
					<button
						className="text-primary dark:text-white font-medium cursor-pointer ml-3"
						onClick={sendAuthCodeHandler}
					>
						Resend code
					</button>
				)}
				{sendCodeLoading && (
					<span className="ml-3">
						<Spinner dark={false} />
					</span>
				)}
			</div>
			<div className="mt-[40px]">
				<Input
					label="Your Email"
					type="email"
					placeholder="Your email"
					required={true}
					name="email"
					value={formValues.email}
					onChange={handleChange}
					centered={true}
				/>
				{errors['email'] && (
					<span className="text-sm text-red-600 text-center font-light">
						{errors['email']}
					</span>
				)}
			</div>
			<div className="flex justify-between items-center">
				<div />
				<button
					className="w-full h-[55px] text-[18px] mt-10 font-bold
			tracking-wide text-white dark:text-primary transition-colors
			duration-200 transform bg-primary dark:bg-white rounded-[12px]
			hover:text-opacity-90 focus:outline-none inline-flex justify-center items-center"
					disabled={loading}
					type="submit"
				>
					{loading && (
						<span>
							<Spinner dark={true} />
						</span>
					)}{' '}
					<span>Join Team</span>
				</button>
				<div />
			</div>
		</form>
	);
}

export default Passcode;
