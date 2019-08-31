import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Video } from 'expo-av';



class Slide5Video extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: String(navigation.state.params.tajuk)
        };

    };

    render() {
        const {videoLocation} = this.props.navigation.state.params;
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('jawiku/images/HomeScreen/background3.jpg')} style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ecf0f1',
                }}>

                    <Video
                        source={videoLocation}
                        // rate={1.0}
                        // volume={1.0}
                        muted={false}
                        resizeMode="stretch"
                        shouldPlay
                        useNativeControls
                        style={{ width: 400, height: 300 }}
                    />
                </ImageBackground>
            </View>
        );
    }
}

export default Slide5Video;
