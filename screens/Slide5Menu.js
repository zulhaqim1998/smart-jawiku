import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class Slide5Menu extends React.Component {
    static navigationOptions = {
        title: 'Padanan Jawi',
    };
    render() {
        const {navigate} = this.props.navigation;
        const tajuk = 'Padanan Jawi';
        return (
            <View style={{flex: 1}}>
                <ImageBackground  source={require('jawiku/images/HomeScreen/background4.jpg')} style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ecf0f1',
                }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate('Slide5Video', {videoLocation: require('jawiku/video/slide5-1.mp4'), tajuk})}>
                        <View style={styles.buttonWrapper}><Text style={styles.text}>Video 1</Text><AntDesign style={styles.icon} name="playcircleo" size={32} color="white" /></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate('Slide5Video', {videoLocation: require('jawiku/video/slide5-2.mp4'), tajuk})}>
                        <View style={styles.buttonWrapper}><Text style={styles.text}>Video 2</Text><AntDesign style={styles.icon} name="playcircleo" size={32} color="white" /></View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonWrapper}><Text style={styles.text}>Video 3</Text><AntDesign style={styles.icon} name="playcircleo" size={32} color="white" /></View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 100,
        backgroundColor: '#9749ec',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 20,
        // flex: 1,
        // flexDirection: 'row'
    },
    text: {
        textAlign: 'right',
        alignItems: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 20
    },
    icon: {
        fontSize: 40,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    }
});

export default Slide5Menu;
