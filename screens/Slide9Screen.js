import React from 'react';
import {ImageBackground, Image, View, Dimensions, TextInput, Text, Button} from 'react-native';

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    render() {
        const {width} = Dimensions.get('window');
        const {showAnswer, answer, label} = this.props;
        const {value} = this.state;

        let color = '#a7a7a7';
        let answerColor = '#000';
        if (showAnswer) {
            color = answer === value ? "#30ea50" : "#ff4738";
            answerColor = answer === value ? "#30ea50" : "#ff4738";
        }

        const w = width / 2 - 50;
        return <View style={{width: width / 2}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start',flexWrap:'wrap'}}>
                <Text style={{textAlign: 'center', width: 30, backgroundColor: color, color: '#000', fontSize: 20, fontWeight: 'bold'}}>{label}</Text>
                <TextInput value={value} containerStyle={{flexGrow: 1}} onChangeText={(value) => this.setState({value})}
                       style={{width: w, borderWidth: 2, borderColor: color, fontSize: 20, textAlign: 'center'}} />
            </View>
            {showAnswer && <Text style={{textAlign: 'center', fontSize: 20, color: answerColor}}>{answer}</Text>}
        </View>;
    }
}


class Slide9Screen extends React.Component {
    static navigationOptions = {
        title: 'Soalan',
    };

    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        };
    }

    render() {
        const {width} = Dimensions.get('window');
        const {showAnswer} = this.state;

        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('jawiku/images/HomeScreen/background5.jpg')} style={{flex: 1}}>
                    <Text style={{fontSize: 16}}>Isi tempat kosong dengan perkataan jawi yang betul.</Text>
                    <View style={{flex: 3}}>
                        <Image source={require('jawiku/images/HomeScreen/slide9.png')} style={{width: width, height: width-100, resizeMode: 'contain'}} />
                    </View>
                    <View style={{flex: 2, paddingTop: 30}}>
                        <View key={0} style={{flexDirection: 'row', margin: 5}}>
                            <CustomInput key={0} containerStyle={{flexGrow: 1}} label="k" answer="كڤالا" showAnswer={showAnswer} />
                            <CustomInput key={1} containerStyle={{flexGrow: 1}} label="m" answer="مات" showAnswer={showAnswer} />
                        </View>
                        <View key={1} style={{flexDirection: 'row', margin: 5}}>
                            <CustomInput key={2} containerStyle={{flexGrow: 1}} label="t" answer="تليڠا" showAnswer={showAnswer} />
                            <CustomInput key={3} containerStyle={{flexGrow: 1}} label="h" answer="هيدوڠ" showAnswer={showAnswer} />
                        </View>
                        <View key={2} style={{flexDirection: 'row', margin: 5}}>
                            <CustomInput key={4} containerStyle={{flexGrow: 1}} label="p" answer="ڤيڤي" showAnswer={showAnswer} />
                            <CustomInput containerStyle={{flexGrow: 1}} label="j" answer="جاري" showAnswer={showAnswer} />
                        </View>
                        <View key={3} style={{flexDirection: 'row', margin: 5}}>
                            <CustomInput key={5} containerStyle={{flexGrow: 1}} label="s" answer="سيكو" showAnswer={showAnswer} />
                            <CustomInput key={6} containerStyle={{flexGrow: 1}} label="l" answer="لوتوت" showAnswer={showAnswer} />
                        </View>

                    </View>
                    <Button title="SEMAK"
                            onPress={() => this.setState({showAnswer: true})} />
                </ImageBackground>
            </View>
        );
    }
}

export default Slide9Screen;
