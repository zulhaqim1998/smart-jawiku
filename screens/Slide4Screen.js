import React from 'react';
import { Button, View, Text, ImageBackground, Image } from 'react-native';
import { Audio } from 'expo-av';

class Slide4Screen extends React.Component {
    static navigationOptions = {
        title: 'Lagu Jawi',
    };

    constructor(props) {
        super(props);

        this.state = {
            soundObject: null
        };
    }

    componentDidMount() {
        const soundObject = new Audio.Sound();
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('jawiku/images/HomeScreen/background3.jpg')} style={{flex: 1}}>
                <Image source={require('jawiku/images/HomeScreen/slide4-image1.jpg')}
                       style={{flex: 1, width: undefined, height: undefined, resizeMode: 'contain', marginTop: 0}} />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{flex: 1, margin: 5}}>
                        <Button style={{flex: 1}} title="Play audio" onPress={async() => {
                    const soundObject = new Audio.Sound();
                    try {
                        await soundObject.loadAsync(require('jawiku/audio/slide4-audio.mp3'));
                        await soundObject.playAsync();
                        this.setState({soundObject});
                        // Your sound is playing!
                    } catch (error) {
                        console.log("error playing sound");
                    }
                    }} />
                    </View>
                    <View style={{flex: 1, margin: 5}}>
                        <Button style={{flex: 1}} title="Stop" onPress={() => {
                            if(this.state.soundObject) {
                                this.state.soundObject.pauseAsync();
                            }
                        }} />
                    </View>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Slide4Screen;
