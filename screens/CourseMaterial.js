import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import React, { useEffect, useState } from "react";

import { Ionicons } from '@expo/vector-icons';
import LessonCard from '../components/LessonCard'
import axios from "axios";

const CourseList = ({ navigation, route }) => {
    const { title, un } = navigation.state.params;
    const [data, setData] = useState([])
    console.log(navigation.state.params)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://raw.githubusercontent.com/asishshaji/DS/master/${un}.json`,
            );

            setData(result.data);
        };

        fetchData();
    }, []);


    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Ionicons name="ios-arrow-back" size={32} color="Black" onPress={() => navigation.goBack()} style={{
                    position: 'absolute', bottom: 5, left: 20, zIndex: 100000000
                }} />
                <Text style={styles.projectHeader}>{title}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {

                    data.map(item =>
                        <LessonCard title={item.title} content={item.content} videoUrl={item.videoUrl} />
                    )
                }
            </View>
        </ScrollView>
    )
}
export default CourseList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    projectHeader: {
        fontFamily: 'bold',
        color: 'Black',
        fontSize: 22,
        textAlign: 'center',
    },
    titleContainer: {
        marginTop: 30,
        position: 'relative',
        backgroundColor: '#fff',
        marginBottom: 20
    }
});