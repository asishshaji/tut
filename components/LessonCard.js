import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, { useRef, useState } from "react";

import Modal from 'modal-enhanced-react-native-web';
import { WebView } from 'react-native-web-webview';

const LessonCard = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>

                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.details}>{props.content}</Text>
                <WebView
                    style={{ flex: 1, marginTop: 8, height: 300 }}
                    javaScriptEnabled={true}
                    source={{ uri: props.videoUrl }}
                />


            </View>
        </View>


    )
}
export default LessonCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 10, maxWidth: 800, alignSelf: 'center',
        minWidth: 270
    },
    title: {
        fontFamily: 'bold',
        fontSize: 22,
        color: 'black',
        padding: 5, marginBottom: 10,
        textAlign: 'center'
    },
    titleContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 2, padding: 10, minWidth: 270
    },

    details: {
        fontFamily: 'medium',
        fontSize: 16,
        color: '#8a8a8a',
        marginTop: 2
    }
});