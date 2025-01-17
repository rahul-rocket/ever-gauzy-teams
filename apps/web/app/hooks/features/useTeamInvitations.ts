import { MyInvitationActionEnum } from '@app/interfaces';
import {
	getTeamInvitationsAPI,
	inviteByEmailsAPI,
	removeTeamInvitationsAPI,
	resendTeamInvitationsAPI,
	getMyInvitationsAPI,
	acceptRejectMyInvitationsAPI,
} from '@app/services/client/api';
import {
	activeTeamIdState,
	fetchingTeamInvitationsState,
	getTeamInvitationsState,
	myInvitationsState,
	teamInvitationsState,
} from '@app/stores';
import { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useFirstLoad } from '../useFirstLoad';
import { useQuery } from '../useQuery';
import { useAuthenticateUser } from './useAuthenticateUser';
import { useOrganizationTeams } from './useOrganizationTeams';

export function useTeamInvitations() {
	const setTeamInvitations = useSetRecoilState(teamInvitationsState);
	const [myInvitationsList, setMyInvitationsList] =
		useRecoilState(myInvitationsState);

	const teamInvitations = useRecoilValue(getTeamInvitationsState);
	const [fetchingInvitations, setFetchingInvitations] = useRecoilState(
		fetchingTeamInvitationsState
	);

	const activeTeamId = useRecoilValue(activeTeamIdState);
	const { firstLoad, firstLoadData: firstLoadTeamInvitationsData } =
		useFirstLoad();

	const { isTeamManager } = useAuthenticateUser();
	const { loadTeamsData } = useOrganizationTeams();

	// Queries
	const { queryCall, loading } = useQuery(getTeamInvitationsAPI);

	const { queryCall: inviteQueryCall, loading: inviteLoading } =
		useQuery(inviteByEmailsAPI);

	const { queryCall: removeInviteQueryCall, loading: removeInviteLoading } =
		useQuery(removeTeamInvitationsAPI);

	const { queryCall: resendInviteQueryCall, loading: resendInviteLoading } =
		useQuery(resendTeamInvitationsAPI);

	const { queryCall: myInvitationsQueryCall, loading: myInvitationsLoading } =
		useQuery(getMyInvitationsAPI);

	const {
		queryCall: acceptRejectMyInvitationsQueryCall,
		loading: acceptRejectMyInvitationsLoading,
	} = useQuery(acceptRejectMyInvitationsAPI);

	const inviteUser = useCallback((email: string, name: string) => {
		return inviteQueryCall({ email, name }).then((res) => {
			setTeamInvitations(res.data?.items || []);
			return res;
		});
	}, []);

	useEffect(() => {
		if (activeTeamId && firstLoad && isTeamManager) {
			queryCall().then((res) => {
				setTeamInvitations(res.data?.items || []);
			});
		}
	}, [activeTeamId, firstLoad, isTeamManager]);

	useEffect(() => {
		if (firstLoad) {
			setFetchingInvitations(loading);
		}
	}, [loading, firstLoad]);

	const removeTeamInvitation = useCallback((invitationId: string) => {
		removeInviteQueryCall(invitationId).then((res) => {
			setTeamInvitations(res.data?.items || []);
		});
	}, []);

	const resendTeamInvitation = useCallback((invitationId: string) => {
		resendInviteQueryCall(invitationId);
	}, []);

	const myInvitations = useCallback(() => {
		myInvitationsQueryCall().then((res) => {
			setMyInvitationsList(res.data.items);
			return res.data;
		});
	}, [myInvitationsQueryCall]);
	const removeMyInvitation = useCallback(
		(id: string) => {
			setMyInvitationsList(
				myInvitationsList.filter((invitation) => invitation.id !== id)
			);
		},
		[myInvitationsList, setMyInvitationsList]
	);
	const acceptRejectMyInvitation = useCallback(
		(id: string, action: MyInvitationActionEnum) => {
			return acceptRejectMyInvitationsQueryCall(id, action).then((res: any) => {
				if (res.data.data.message) {
					return res.data.data;
				}

				if (action === MyInvitationActionEnum.ACCEPTED) {
					loadTeamsData();
				}
				setMyInvitationsList(
					myInvitationsList.filter((invitation) => invitation.id !== id)
				);
				return res.data;
			});
		},
		[acceptRejectMyInvitationsQueryCall, myInvitationsList]
	);

	return {
		teamInvitations,
		firstLoadTeamInvitationsData,
		fetchingInvitations,
		inviteLoading,
		inviteUser,
		removeTeamInvitation,
		resendTeamInvitation,
		removeInviteLoading,
		resendInviteLoading,
		myInvitationsQueryCall,
		myInvitationsLoading,
		myInvitations,
		myInvitationsList,
		removeMyInvitation,
		acceptRejectMyInvitation,
		acceptRejectMyInvitationsLoading,
	};
}
