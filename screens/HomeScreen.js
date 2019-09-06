import React from 'react';
import {Button, View, ImageBackground, Image, TouchableOpacity, StyleSheet, Text, ScrollView} from 'react-native';


const CustomButton = ({title, onPress}) => <TouchableOpacity
    style={styles.button} onPress={onPress}>
    <View style={styles.buttonWrapper}>
        <Text style={styles.text}>{title}</Text>
    </View>
</TouchableOpacity>;

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Menu Utama',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('jawiku/images/HomeScreen/background0.jpg')} style={{flex: 1}}>
                    <ScrollView>
                        <View style={{flex: 2}}>
                            <Image source={require('jawiku/images/HomeScreen/slide1.png')} style={{
                                width: 400,
                                height: 300,
                                marginTop: -30,
                                resizeMode: 'contain'
                            }}/>
                        </View>
                        <View style={{flex: 3, marginTop: -15}}>
                            <CustomButton
                                title="Jawiku"
                                onPress={() => navigate('Jawiku')}
                            />
                            <CustomButton
                                title="Menu Huruf Jawi"
                                onPress={() => navigate('MenuHurufJawi')}
                            />
                            <CustomButton
                                title="Lagu Jawi"
                                onPress={() => navigate('Slide4')}
                            />
                            <CustomButton
                                title="Padanan Jawi"
                                onPress={() => navigate('Slide5Menu')}
                            />
                            <CustomButton
                                title="Perbezaan Huruf & Sebutannya"
                                onPress={() => navigate('Slide6Menu')}
                            />
                            <CustomButton
                                title="Latihan Pengukuhan"
                                onPress={() => navigate('Slide7')}
                            />
                            <CustomButton
                                title="Tulis Huruf"
                                onPress={() => navigate('Slide8')}
                            />
                            <CustomButton
                                title="Ayuh Isi!"
                                onPress={() => navigate('Slide9')}
                            />
                            <CustomButton
                                title="Padankan"
                                onPress={() => navigate('Slide10')}
                            />
                            <CustomButton
                                title="Jom Kira!"
                                onPress={() => navigate('Slide11')}
                            />
                            <CustomButton
                                title="Padankan"
                                onPress={() => navigate('Slide12')}
                            />
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 350,
        height: 60,
        backgroundColor: '#9749ec',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 5,
        // flex: 1,
        // flexDirection: 'row'
    },
    text: {
        textAlign: 'right',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        // marginRight: 20
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

export default HomeScreen;
