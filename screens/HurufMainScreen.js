import React from 'react';
import {StyleSheet, ImageBackground, View, Image, Text, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import hurufJawi from "../constants/hurufJawi";
import hurufTambahan from "../constants/hurufTambahan";

class HurufMainScreen extends React.Component {
    static navigationOptions = {
        title: 'Huruf-huruf Jawi',
    };

    renderHurufList = () => {
        const {navigate} = this.props.navigation;
        const type = this.props.navigation.state.params.type;
        const senaraiHuruf = type === 'huruf-tambahan' ? hurufTambahan : hurufJawi;
        const list = [];
        let d = [];
        senaraiHuruf.forEach((huruf, index) => {
            d.push(huruf);
            if (d.length >= 3 || index === senaraiHuruf.length - 1) {
                list.push(d.reverse());
                d = [];
            }

        });

        if (list.length < Math.floor(senaraiHuruf.length / 3)) {
            return <Text>Loading...</Text>;
        }
        // console.log(list);

        const {width} = Dimensions.get('window');
        const w = width / 3 - 10;


        return (<View>
            {list.map((listItem, index1) => <View key={index1} style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                {/*{console.log(listItem)}*/}
                {/*<Text key={index1}>dcdcdc</Text>*/}
                {listItem.map((huruf, index2) => <TouchableOpacity  key={index2} onPress={() => navigate('Huruf', {imageLocation: huruf.imageLocation})}>
                    <Image source={huruf.imageLocation}
                           style={{width: w, height: w, marginLeft: 5, marginRight: 5, resizeMode: 'contain'}}
                    />
                    {type === 'huruf-jawi' && <Text style={{color: '#fff',
                        backgroundColor: "#373730",
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: -20,
                        fontSize: 20}}>
                        {huruf.name}
                    </Text>}
                    {/*<Text>{huruf.name}</Text>*/}
                </TouchableOpacity>)}
            </View>)}
        </View>);
    };

    render() {
        const {state} = this.props.navigation;
        console.log(state.params.type);
        const mainImage = state.params.type === 'huruf-tambahan' ?
            <Image source={require(`jawiku/images/MenuHurufJawi/Slide2.jpg`)} style={styles.mainImage}/> :
            <Image source={require(`jawiku/images/MenuHurufJawi/Slide1.jpg`)} style={styles.mainImage}/>;

        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('jawiku/images/HomeScreen/background2.jpg')} style={{flex: 1}}>
                    <ScrollView>
                        <View style={{flex: 1}}>
                            {mainImage}
                            <Text style={{
                                textAlign: 'center',
                                color: '#333333',
                                fontSize: 16,
                                fontWeight: 'bold',
                                marginTop: 15
                            }}>
                                {state.params.type === 'huruf-tambahan' ? 'Huruf Tambahan Jawi' : 'Huruf-huruf Jawi'}
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            {this.renderHurufList()}
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainImage: {
        width: 200,
        height: 200,
        borderRadius: 500,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

export default HurufMainScreen;
