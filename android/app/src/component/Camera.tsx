import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Camera(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Camera</Text>
            <Button title="카메라동작" onPress={() => { }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Camera;