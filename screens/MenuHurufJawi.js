import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class MenuHurufJawi extends Component {
    static navigationOptions = {
        title: 'Huruf-huruf Jawi',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (<View style={{flex: 1}}>
            <ImageBackground source={require('jawiku/images/HomeScreen/background.jpg')} style={{flex: 1, resizeMode: 'cover'}}>
                <View style={{flex: 1, margin: 10}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress={() => navigate('HurufMain', {type: 'huruf-jawi'})}>
                                <Image source={require('jawiku/images/MenuHurufJawi/Slide1.jpg')} style={styles.imageMenu} />
                                <Text style={styles.imageTitle}>Huruf-huruf Jawi</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress={() => navigate('HurufMain', {type: 'huruf-tambahan'})}>
                                <Image source={require('jawiku/images/MenuHurufJawi/Slide2.jpg')} style={styles.imageMenu} />
                                <Text style={styles.imageTitle}>Huruf Tambahan Jawi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </View>);
    }
}

const styles = StyleSheet.create({
    imageMenu: {
        width: "95%", height: 200
    },
    imageTitle: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

