import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function CameraScreen(): React.JSX.Element {
    
    function openCamera() {
        console.log("openCamera");
    }
    
    return (
        <View style={styles.container}>
            <Text>Camera</Text>
            <Button title="카메라동작" onPress={() => {openCamera()}} />
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

export default CameraScreen;