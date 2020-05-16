import * as Font from 'expo-font';

import {
    Dimensions,
    Image,
    ImageBackground,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { Component } from 'react';

import CourseCard from '../components/CourseCard'

class Home extends Component {

    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Font.loadAsync({
            'bold': require('../assets/fonts/ProductSans-Bold.ttf'),
            'medium': require('../assets/fonts/ProductSans-Medium.ttf')
        });
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ padding: 50, justifyContent: 'center' }}>
                <CourseCard
                    title="Do It Yourself(DIY)"
                    un="diy"
                    imageUrl="https://blog.fixxoo.com/wp-content/uploads/2019/01/do-it-yourself.jpg"
                    content=" Do it yourself is the method of building, modifying, or repairing things without the direct aid of experts or professionals."
                    navigation={navigate}
                />
                <CourseCard
                    title="Ethical Hacking"
                    un="eth"
                    imageUrl="https://cdn.mindmajix.com/blog/images/ethical-hacking-03.png"
                    navigation={navigate}
                    content="The term white hat in Internet slang refers to an ethical computer hacker, or a computer security expert, who specializes in penetration testing and in other testing methodologies that ensures the security of an organization's information systems." />
                
            </ScrollView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({


});
