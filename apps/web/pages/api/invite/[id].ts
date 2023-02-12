import { authenticatedGuard } from '@app/services/server/guards/authenticated-guard';
import {
	getTeamInvitationsRequest,
	removeTeamInvitationsRequest,
} from '@app/services/server/requests';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { $res, user, access_token, tenantId, organizationId, teamId } =
		await authenticatedGuard(req, res);
	if (!user) return $res();

	const invitationId = req.query.id as string;

	if (!req.query.id) {
		return $res.status(400).json({});
	}

	await removeTeamInvitationsRequest({
		bearer_token: access_token,
		tenantId: tenantId,
		invitationId,
	});

	const { data } = await getTeamInvitationsRequest(
		{
			tenantId,
			teamId,
			organizationId,
			role: 'EMPLOYEE',
		},
		access_token
	);

	$res.json(data);
}
