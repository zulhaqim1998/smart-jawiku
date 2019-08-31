import React from 'react';
import { Button, View } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Padanan Perkataan',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Button
                    title="Jawiku"
                    onPress={() => navigate('Jawiku')}
                />
                <Button
                    title="Menu Huruf Jawi"
                    onPress={() => navigate('MenuHurufJawi')}
                />
                <Button
                    title="Slide 4"
                    onPress={() => navigate('Slide4')}
                />
            </View>
        );
    }
}

export default HomeScreen;
