import React from "react"
import {AntDesign} from "@expo/vector-icons"
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { useAppTheme } from "../../../../app";
import { translate } from "../../../../i18n";
import { typography } from "../../../../theme";

const SettingHeader = (props) => {
    const {colors}=useAppTheme();
    const { navigation } = props;
    return (
        <View style={[styles.container,{backgroundColor:colors.background}]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color={colors.primary} />
            </TouchableOpacity>
            <Text style={[styles.title,{color:colors.primary}]}>{translate("settingScreen.name")}</Text>
            <AntDesign name="exclamationcircleo" size={24} color={colors.primary} />
        </View>
    )
}

export default SettingHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingVertical:20
    },
    title: {
        fontFamily: typography.primary.semiBold,
        fontSize: 16,
    }
})