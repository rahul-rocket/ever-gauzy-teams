import React, { useEffect, useState } from "react"
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Dimensions } from "react-native"
import { ActivityIndicator } from "react-native-paper";
import { GLOBAL_STYLE as GS } from "../../assets/ts/styles";
import { useStores } from "../models";
import ComboBox from "../screens/Authenticated/TimerScreen/components/ComboBox";
import EstimateTime from "../screens/Authenticated/TimerScreen/components/EstimateTime";
import TaskStatusDropdown from "../screens/Authenticated/TimerScreen/components/TaskStatusDropdown";
import { ITeamTask } from "../services/interfaces/ITask";
import { colors } from "../theme/colors";
import { Feather } from '@expo/vector-icons';
import { observer } from "mobx-react-lite";
import TaskSize from "./TaskSize";
import TaskPriorities from "./TaskPriorities";
import TaskStatus from "../screens/Authenticated/ProfileScreen/components/TaskStatus";
import TaskLabel from "./TaskLabel";
import { typography } from "../theme";
import TimerCard from "./TimerCard";

const { width, height } = Dimensions.get("window");
const ManageTaskCard = observer(() => {
    const {
        authenticationStore: { tenantId, organizationId, authToken },
        teamStore: { activeTeamId, activeTeam },
        TaskStore: { createNewTask, setActiveTask, activeTask, getTeamTasks, fetchingTasks },
        TimerStore: { timerStatusState, localTimerStatusState, timeCounterState }
    } = useStores();

    const [showCombo, setShowCombo] = useState(false)
    const [taskInputText, setTaskInputText] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showCheckIcon, setShowCheckIcon] = useState<boolean>(false)



    const onCreateNewTask = async () => {
        setShowCheckIcon(false)
        setIsLoading(true)
        await createNewTask({ organizationId, teamId: activeTeamId, authToken, taskTitle: taskInputText, tenantId })
        setIsLoading(false)
        setShowCombo(false)
    }


    const handleChangeText = (value: string) => {
        setTaskInputText(value)
        if (value.trim().length > 0) {
            setShowCombo(true)
            setShowCheckIcon(false)
        } else {
            setShowCombo(false)
        }

        if (value.trim().length >= 3) {
            setShowCheckIcon(true)
        }
    }

    const handleActiveTask = (value: ITeamTask) => {
        setActiveTask(value);
        setShowCheckIcon(false)
        setTaskInputText(value.title)
        setShowCombo(false)
        console.log(value)
    }

    useEffect(() => {
        setTaskInputText(activeTask.title)
    }, [activeTask])

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.wrapInput,
                    {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    },
                ]}
            >
                <TextInput
                    selectionColor={colors.primary}
                    placeholderTextColor={"rgba(40, 32, 72, 0.4)"}
                    style={styles.textInput}
                    defaultValue={activeTask.title}
                    placeholder="What you working on"
                    value={taskInputText}
                    onFocus={() => setShowCombo(true)}
                    onChangeText={(newText) => handleChangeText(newText)}
                />
                {showCheckIcon && (
                    <TouchableOpacity onPress={() => onCreateNewTask()}>
                        <Feather name="check" size={24} color="green" />
                    </TouchableOpacity>
                )}
                {isLoading ? <ActivityIndicator color="#1B005D" style={styles.loading} /> : null}
            </View>

            {showCombo ? <ComboBox onCreateNewTask={onCreateNewTask} handleActiveTask={handleActiveTask} /> :
                <View>
                    <View
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            marginVertical: 20,
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Text style={{ textAlign: 'center', fontSize: 12, color: "#7E7991" }}>Estimate: </Text>
                            <EstimateTime />
                        </View>
                        <TaskSize />
                    </View>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", zIndex: 1000 }}>

                        <View style={{ width: 136, height: 32 }}>
                            <TaskStatusDropdown task={activeTask} />
                        </View>
                        <TaskPriorities />
                    </View>
                    <View style={{ width: "100%", marginVertical: 20, zIndex: 999 }}>
                        <TaskLabel />
                    </View>
                    {/* <TimerCard /> */}
                </View>
            }
        </View>
    )
})
export default ManageTaskCard;

const styles = StyleSheet.create({
    container: {

    },
    mainContainer: {
        // marginTop: 20,
        paddingTop: 30,
        backgroundColor: "#fff",
        borderRadius: 25,
        padding: 20,
        ...GS.noBorder,
        borderWidth: 1,
        elevation: 5,
        shadowColor: "#1B005D0D",
        shadowOffset: { width: 10, height: 10.5 },
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    estimate: {
        color: "#9490A0",
        fontWeight: "600",
        fontSize: 12,
        marginBottom: 10,
        alignSelf: "flex-end",
    },
    working: {
        color: "#9490A0",
        fontWeight: "600",
        marginBottom: 10,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    textInput: {
        color: "rgba(40, 32, 72, 0.4)",
        width: "90%",
        height: 43,
        paddingVertical: 13,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 10,
        fontSize: 12,
        fontFamily: typography.fonts.PlusJakartaSans.semiBold
    },
    textInputOne: {
        height: 30,
    },
    horizontalInput: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    dashed: {
        borderBottomColor: "#fff",
        borderBottomWidth: 10,
    },
    separator: {
        backgroundColor: colors.border,
        width: 2,
        marginHorizontal: 5,
        transform: [{ rotate: "20deg" }],
        height: 20,
    },
    wrapInput: {
        width: "100%",
        height: 45,
        backgroundColor: "#fff",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 2
    },
    loading: {
        position: 'absolute',
        right: 10,
        top: 15
    }

})