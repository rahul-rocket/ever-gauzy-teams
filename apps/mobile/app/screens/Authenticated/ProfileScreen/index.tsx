import React, { FC, useEffect, useState } from "react"
import { ScrollView, TextStyle, TouchableOpacity, View, ViewStyle, Dimensions, Text, FlatList, Image } from "react-native"
import FlashMessage from "react-native-flash-message"
// TYPES
import { AuthenticatedTabScreenProps } from "../../../navigators/AuthenticatedNavigator"
// DATA

// COMPONENTS
import { Screen } from "../../../components"

// STYLES
import { GLOBAL_STYLE as GS } from "../../../../assets/ts/styles"
import { typography } from ".././../../theme"
import HomeHeader from "../../../components/HomeHeader"
import ProfileHeader from "./components/ProfileHeader"
import ListCardItem from "./components/ListCardItem"
import { useStores } from "../../../models"
import { observer } from "mobx-react-lite"
import AssingTaskFormModal from "./components/AssignTaskSection"
import { BlurView } from "expo-blur"
import useAuthenticateUser from "../../../services/hooks/features/useAuthentificateUser"
import { translate } from "../../../i18n"
import { useAppTheme } from "../../../app"
import FilterPopup from "./components/FilterPopup"
import useProfileScreenLogic from "./logics/useProfileScreenLogic"
import ProfileTabs from "./components/ProfileTabs"
import { ITeamTask } from "../../../services/interfaces/ITask"

const { width, height } = Dimensions.get("window")
export const AuthenticatedProfileScreen: FC<AuthenticatedTabScreenProps<"Profile">> = observer(
  function AuthenticatedProfileScreen(_props) {
   
    const { colors, dark } = useAppTheme();
    const { user } = useAuthenticateUser();
    const { tabIndex, userId } = _props.route.params;
    const {
      TimerStore: { localTimerStatus }
    } = useStores();
    
    const {
      hangleAssignTask,
      hangleUnassignTask,
      showFilterPopup,
      showModal,
      currentUser,
      setShowFilterPopup,
      setShowModal,
      selectedTabIndex,
      setSelectedTabIndex,
      countTasksByTab,
      otherTasks,
      member,
      assignedTasks,
      unassignedTasks,
      activeTask,
      assignListRefresh
    } = useProfileScreenLogic({ userId: userId || user.id, activeTabIndex: tabIndex || 0 });


    const isAuthUser = currentUser.id === user.id;

    return (
      <>
        {showModal || showFilterPopup ? <BlurView tint="dark" intensity={18} style={$blurContainer} /> : null}
        <Screen preset="fixed" contentContainerStyle={$container} safeAreaEdges={["top"]}>
          <AssingTaskFormModal memberId={currentUser?.id} visible={showModal} onDismiss={() => setShowModal(false)} />
          <FilterPopup visible={showFilterPopup} onDismiss={() => setShowFilterPopup(false)} />
          <HomeHeader props={_props} showTimer={localTimerStatus.running} />
          <View style={{ paddingTop: 10 }}>
            <ProfileHeader {...currentUser} />
          </View>

          <View style={{ ...$wrapButtons, backgroundColor: colors.background }}>
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              style={[$assignStyle, {
                backgroundColor: colors.background,
                borderColor: colors.secondary
              }]}
            >
              <Text style={[$createTaskTitle, { color: colors.secondary }]}>{isAuthUser ? translate("tasksScreen.createTaskButton") : translate("tasksScreen.assignTaskButton")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...$filterButton, borderColor: colors.border }} onPress={() => setShowFilterPopup(true)} >
              {dark ?
                <Image source={require("../../../../assets/icons/new/setting-dark.png")} />
                : <Image source={require("../../../../assets/icons/new/setting-light.png")} />}
              <Text style={{ ...$createTaskTitle, color: colors.primary, marginLeft: 10 }}>Filter</Text>
            </TouchableOpacity>
          </View>

          <ProfileTabs
            onChangeTab={setSelectedTabIndex}
            activeTab={selectedTabIndex}
            countTasksByTab={countTasksByTab}
          />
          <View
            style={{
              flex: 1,
              zIndex: 998,
              paddingHorizontal: 20,
              backgroundColor: dark ? "rgb(16,17,20)" : colors.background2,
            }}
          >
            {/* START WORKED TAB CONTENT */}
            {selectedTabIndex === 0 &&
              <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  <View>
                    <View
                      style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}
                    >
                      <Text style={[$textLabel, { color: colors.primary }]}>{translate("tasksScreen.now")}</Text>
                      <View style={{ width: width / 1.8, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: colors.border }} />
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: colors.primary, fontSize: 12, fontFamily: typography.secondary.medium }}>{translate("tasksScreen.totalTimeLabel")}:</Text>
                        <Text style={[$textLabel, { marginLeft: 5, color: colors.primary, fontFamily: typography.primary.semiBold, fontSize: 12 }]}>03:31</Text>
                      </View>
                    </View>
                    {activeTask &&
                      <ListCardItem
                        tabIndex={selectedTabIndex} isActive={true}
                        member={member}
                        index={1000}
                        item={activeTask as ITeamTask}
                        enableEstimate={false} handleEstimate={() => { }}
                        handleTaskTitle={() => { }}
                      />
                    }
                  </View>
                  <View>
                    <View
                      style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}
                    >
                      <Text style={[$textLabel, { color: colors.primary }]}>{translate("tasksScreen.last24hours")} ({otherTasks.length})</Text>
                      <View style={{ width: width / 1.5, alignSelf: 'center', top: 3, borderBottomWidth: 1, borderBottomColor: colors.border }} />
                    </View>
                    {otherTasks.map((item, index) => (
                      <View key={index.toString()} style={{ ...GS.mt2 }}>
                        <ListCardItem
                          tabIndex={selectedTabIndex}
                          isActive={false}
                          member={member}
                          index={index}
                          item={item as any}
                          enableEstimate={false}
                        />
                      </View>
                    ))}
                  </View>

                </View>
              </ScrollView>
            }
            {/* END WORKED TAB CONTENT */}
            {/* ------------------------------------------------------------ */}
            {/* START ASSIGNED TAB CONTENT */}

            {selectedTabIndex === 1 &&
              <View style={{ ...GS.mt2 }}>

                <FlatList
                  data={assignedTasks}
                  renderItem={({ item, index }) =>
                    <View key={index} style={{ marginVertical: 4 }}>
                      <ListCardItem
                        tabIndex={selectedTabIndex}
                        member={member}
                        index={index}
                        isActive={false}
                        key={index.toString()}
                        onUnassignTask={hangleUnassignTask}
                        item={item as any}
                        enableEstimate={false}
                      />
                    </View>
                  }
                  extraData={assignListRefresh}
                  legacyImplementation={true}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(_, index) => index.toString()}
                />

              </View>
            }

            {/* END ASSIGNED TAB CONTENT */}
            {/* ----------------------------------------------------------------------- */}

            {/* START UNASSIGNED TAB CONTENT */}
            {selectedTabIndex === 2 &&
              <View style={{ ...GS.mt2 }}>
                <FlatList
                  data={unassignedTasks}
                  renderItem={({ item, index }) => (
                    <View key={index} style={{ marginBottom: 8 }}>
                      <ListCardItem
                        tabIndex={selectedTabIndex}
                        member={member}
                        index={index}
                        isActive={false}
                        key={index.toString()}
                        onAssignTask={hangleAssignTask}
                        item={item as any}
                        enableEstimate={false}
                      />
                    </View>
                  )}
                  extraData={assignListRefresh}
                  legacyImplementation={true}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(_, index) => index.toString()}
                />
              </View>
            }
            {/* END UNASSIGNED TAB CONTENT */}
          </View>
          <FlashMessage position={"bottom"} />
        </Screen>
      </>
    )
  }
)

const $container: ViewStyle = {
  flex: 1,
}

const $wrapButtons: ViewStyle = {
  zIndex: 1000,
  paddingHorizontal: 20,
  paddingBottom: 30,
  flexDirection: "row",
  justifyContent: "space-between",
}

const $textLabel: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 12
}

const $filterButton: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: 149,
  borderWidth: 1,
  borderRadius: 10,
  paddingVertical: 12,
  paddingHorizontal: 24,
  justifyContent: "center"
}


const $blurContainer: ViewStyle = {
  height: height,
  width: "100%",
  position: "absolute",
  top: 0,
  zIndex: 1001
}

const $assignStyle: ViewStyle = {
  borderColor: "#3826A6",
  borderWidth: 2,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 20,
  paddingVertical: 5,
  width: width / 2.5,
  borderRadius: 8
}

const $createTaskTitle: TextStyle = {
  fontSize: 14,
  fontFamily: typography.primary.semiBold
}

