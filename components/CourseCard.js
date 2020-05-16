import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

import React from "react";

const componentName = (props) => (
    <View style={styles.container}>

        <View style={styles.titleContainer}>

            <Text style={styles.title}>{props.title}</Text>
            <Image source={{ uri: props.imageUrl }} style={{ height: 120, width: 120, resizeMode: 'cover' }} />
            <Text style={styles.details}>{props.content}</Text>

            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'black', marginTop: 5, padding: 5 }} onPress={() => props.navigation('CourseMaterial', {
                'title': props.title,'un':props.un
            })}>
                <Text style={{ fontFamily: 'bold', fontSize: 20 }}>Watch Videos -></Text>
            </TouchableOpacity>

        </View>
    </View>


)
export default componentName;

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
        marginTop: 10
    }
});