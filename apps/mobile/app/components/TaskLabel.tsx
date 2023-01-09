import React from "react";
import { AntDesign } from "@expo/vector-icons"
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { useAppTheme } from "../app";
import { typography } from "../theme";

const TaskLabel = () => {
    const {colors}=useAppTheme();
    return (
        <View style={{ width: "100%" }}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.container, {borderColor:colors.border}]}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../../assets/images/new/record-blue.png")} />
                    <Text style={{ left: 10, color: colors.primary, fontSize: 10, fontFamily:typography.fonts.PlusJakartaSans.semiBold }}>Label</Text>
                </View>
                <AntDesign name="down" size={20} color={colors.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default TaskLabel;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderColor: "rgba(0, 0, 0, 0.13)",
        borderWidth: 1,
        borderRadius: 10,
        width: "100%",
        height: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

})