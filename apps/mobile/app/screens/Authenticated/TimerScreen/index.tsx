import React, { FC, useEffect } from "react"
import { TextStyle, ViewStyle, View } from "react-native"

// COMPONENTS
import { Screen, Text } from "../../../components"
import { AuthenticatedTabScreenProps } from "../../../navigators/AuthenticatedNavigator"

// STYLES
import { colors, spacing } from "../../../theme"
import { GLOBAL_STYLE as GS } from "../../../../assets/ts/styles"
// HELPERS
import { api } from "../../../services/api"
import LocalStorage from "../../../services/api/tokenHandler"
import HomeHeader from "../TeamScreen/components/HomeHeader"
import DropDown from "../../../components/TeamDropdown/DropDown"
import NewTimerCard from "../../../components/TimerCard"
import { useStores } from "../../../models"
import { IOTeams } from "../../../services/teams/organization-team"
import CreateTeamModal from "../TeamScreen/components/CreateTeamModal"
import { observer } from "mobx-react-lite"
import ManageTaskCard from "../../../components/ManageTaskCard"


export const AuthenticatedTimerScreen: FC<AuthenticatedTabScreenProps<"Timer">> = observer(function AuthenticatedTimerScreen(_props) {
  // Get Store data
  const {
    authenticationStore: { user, tenantId, organizationId, employeeId, authToken },
    teamStore: { teams, activeTeam, activeTeamId, getUserTeams, createTeam, setActiveTeam },
    TaskStore: { teamTasks, activeTask, activeTaskId, setActiveTask }
  } = useStores();
  // STATE
  const [organizationTeams, setOrganizationTeams] = React.useState<IOTeams>({
    items: [],
    total: 0
  })
  const [showCreateTeamModal, setShowCreateTeamModal] = React.useState(false)

  // Create New Team
  const createNewTeam = async (text: string) => {
    const responseTeams = {
      tenantId: tenantId,
      organizationId: organizationId,
      access_token: authToken,
      employeeId,
      userId: user?.id,
      teamName: text
    };
    createTeam(responseTeams)

  }

  const loadTeamTasks = async () => {
    await getUserTeams({ tenantId: tenantId, userId: user?.id, authToken: authToken });
  }


  useEffect(() => {

  }, [])

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <CreateTeamModal
        onCreateTeam={createNewTeam}
        visible={showCreateTeamModal}
        onDismiss={() => setShowCreateTeamModal(false)}
      />
      <HomeHeader {..._props} />
      <View style={{ padding: 20, zIndex: 2 }}>
        <DropDown onCreateTeam={() => setShowCreateTeamModal(true)} />
      </View>
      <View style={$timerSection}>
        <ManageTaskCard />
      </View>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
}

const $title: TextStyle = {
  marginBottom: spacing.large,
}

const $timerSection: ViewStyle = {
  flex: 1,
  backgroundColor: "#F7F7F8",
  paddingHorizontal: 20,
  zIndex: 1
}
const $card: ViewStyle = {

}