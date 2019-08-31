import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default class JawikuScreen extends Component {

    static navigationOptions = {
        title: 'Jawiku',
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../images/HomeScreen/background.jpg')} style={styles.backgroundImage}>
                    <Text style={styles.instructions}>
                        Huruf Jawi (حروف خاوي) bermaksud huruf Arab yang ditambah dengan beberapa
                        huruf tambahan yang digunakan untuk menulis dalam bahasa Melayu.
                    </Text>
                    <View style={styles.horizontalLine} />

                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{width: '50%'}}>
                            <Text style={{textAlign: 'center', marginTop: 30, fontSize: 25, color: '#ea525a', fontWeight: 'bold'}}>
                                Smart Jawiku
                            </Text>
                            <Text style={{textAlign: 'center', color: '#ea525a'}}>By Ainul Zakiah</Text>
                        </View>
                        <View>
                            <Image source={require('../images/HomeScreen/image1.jpg')}
                                    style={{width: 200, height: 150}}/>
                        </View>
                    </View>

                    <View style={{flex: 1}}>
                        <Text style={{marginTop: 10, fontSize: 16, color: '#333333', marginLeft: 10, marginRight: 10}}>
                            Satu aplikasi yang dicipta khas buat kanak-kanak mempelajari Jawi dengan
                            seronok dan berkesan. Didatangkan dengan maklumat lengkap mengenai
                            huruf-huruf jawi, sebutan jawi yang betul, lagu jawi yang dicipta khas dan
                            lain-lain lagi.
                        </Text>

                        <Text  style={{marginTop: 10, fontSize: 16, color: '#333333', marginLeft: 10, marginRight: 10}}>
                            Cetusan idea adalah daripada siswi pendidik IPG kampus Pendidikan Islam dan
                            aplikasi ini dibangunkan bagi menjayakan kerja sursus projek Teknologi Untuk
                            Pengajaran dan Pembelajaran semester 3.
                        </Text>
                    </View>

                    <View style={{flex: 4}}></View>

                </ImageBackground>

                {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
                {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // background: require("images/HomeScreen/background.jpg"),
    },
    welcome: {
        fontSize: 21,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        margin: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333333',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10
    }
});
