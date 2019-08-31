import React from 'react';
import { View, Image, ImageBackground } from 'react-native';

class HurufScreen extends React.Component {
    static navigationOptions = {
        title: 'Huruf-huruf Jawi',
    };
    render() {
        const {imageLocation} = this.props.navigation.state.params;
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('jawiku/images/HomeScreen/background2.jpg')} style={{flex: 1, justifyContent: 'center', alignItems: 'stretch',}}>
                    <Image source={imageLocation} style={{
                        width: '80%',
                        height: 300,
                        resizeMode: 'contain',
                        borderRadius: 15,
                        justifyContent: 'space-around',
                        alignSelf: 'center'
                    }} />
                </ImageBackground>
            </View>
        );
    }
}

export default HurufScreen;
