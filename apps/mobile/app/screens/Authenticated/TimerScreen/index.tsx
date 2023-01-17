import React, { FC, useEffect, useState } from "react"
import { TextStyle, ViewStyle, View } from "react-native"

// COMPONENTS
import { Screen, Text } from "../../../components"
import { AuthenticatedTabScreenProps } from "../../../navigators/AuthenticatedNavigator"

// STYLES
import { spacing } from "../../../theme"
import { GLOBAL_STYLE as GS } from "../../../../assets/ts/styles"
// HELPERS
import HomeHeader from "../TeamScreen/components/HomeHeader"
import DropDown from "../../../components/TeamDropdown/DropDown"
import { useStores } from "../../../models"
import CreateTeamModal from "../TeamScreen/components/CreateTeamModal"
import { observer } from "mobx-react-lite"
import ManageTaskCard from "../../../components/ManageTaskCard"
import TimerCard from "../../../components/TimerCard"
import { useFirstLoad } from "../../../services/hooks/useFirstLoad"
import { useAppTheme } from "../../../app"
import { useOrganizationTeam } from "../../../services/hooks/useOrganization"
import FlashMessage, {showMessage} from "react-native-flash-message"


export const AuthenticatedTimerScreen: FC<AuthenticatedTabScreenProps<"Timer">> = observer(function AuthenticatedTimerScreen(_props) {
  // HOOKS
  const { firstLoadData, firstLoad } = useFirstLoad();
  const { loadingTeams, activeTeam, createOrganizationTeam } = useOrganizationTeam();

  // STATES
  const {
    authenticationStore: { user, tenantId, organizationId, employeeId, authToken },
    TaskStore: { teamTasks, setTeamTasks, setCount, count }
  } = useStores();

  const [showCreateTeamModal, setShowCreateTeamModal] = React.useState(false)
  const [start, setStart]=useState(false)

  const { colors, dark } = useAppTheme()

  useEffect(()=>{
 
  },[])

  return (
    <Screen preset="scroll" contentContainerStyle={[$container, { backgroundColor: colors.background2 }]}
      backgroundColor={dark ? "rgb(16,17,20)" : colors.background}
      safeAreaEdges={["top"]}>
      <CreateTeamModal
        onCreateTeam={createOrganizationTeam}
        visible={showCreateTeamModal}
        onDismiss={() => setShowCreateTeamModal(false)}
      />
      <View style={{ zIndex: 1000 }}>
        <HomeHeader props={_props} showTimer={false} />
      </View>
      <View style={{ padding: 20, zIndex: 999, backgroundColor: colors.background }}>
        <DropDown onCreateTeam={() => setShowCreateTeamModal(true)} />
      </View>
      <View style={[$timerSection, { backgroundColor: colors.background }]}>
        <View style={{ zIndex: 100 }}>
          <ManageTaskCard/>
        </View>
        <View style={{ zIndex: 99 }}>
          <TimerCard />
        </View>
      </View>
      <FlashMessage position="bottom" />
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
  marginTop: 20,
  padding: 20,
  marginHorizontal: 20,
  borderRadius: 16,
  ...GS.noBorder,
  borderWidth: 1,
  elevation: 10,
  shadowColor: "rgba(0, 0, 0, 0.1)",
  shadowOffset: { width: 15, height: 15 },
  shadowOpacity: 1,
  shadowRadius: 16,
}
const $card: ViewStyle = {

}