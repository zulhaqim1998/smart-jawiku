import React from 'react';
import {Button, Dimensions, Image, ImageBackground, Text, TextInput, View} from 'react-native';

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    onChange = value => {
        // const value = event.target && event.target.value;
        if (value.length > 1) {
            return;
        }
        this.setState({value});
    };

    render() {
        const {width} = Dimensions.get('window');
        const {showAnswer, answer, label} = this.props;
        const {value} = this.state;

        let color = '#a7a7a7';
        let answerColor = '#000';
        if (showAnswer) {
            color = Number(answer) === Number(value) ? "#30ea50" : "#ff4738";
            answerColor = String(answer) === String(value) ? "#30ea50" : "#ff4738";
        }

        const w = width / 2 - 50;
        return <View style={{width: width / 2 - 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start',flexWrap:'wrap'}}>
                <Text style={{textAlign: 'center', width: 30, backgroundColor: color, color: '#000', fontSize: 20, fontWeight: 'bold'}}>{label}</Text>
                <TextInput value={this.state.value} containerStyle={{flexGrow: 1}} onChangeText={this.onChange}
                           style={{width: w, borderWidth: 2, borderColor: color, fontSize: 20, textAlign: 'center'}} />
            </View>
            {showAnswer && <Text style={{textAlign: 'center', fontSize: 20, color: answerColor}}>{answer}</Text>}
        </View>;
    }
}

class Slide11Screen extends React.Component {
    static navigationOptions = {
        title: 'Slide 11',
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
                    <Text style={{fontSize: 16}}>Isi tempat kosong dengan bilangan huruf jawi di dalam gambar.</Text>
                    <View style={{flex: 5}}>
                        <Image source={require('jawiku/images/HomeScreen/slide11.png')} style={{width: width, height: width-100, resizeMode: 'contain'}} />
                    </View>
                    <View style={{flex: 2}}>
                        {rowData.map((data1, index1) => <View key={index1} style={{flexDirection: 'row', margin: 5}}>
                            {data1.map((data2, index2) => <CustomInput key={index2}
                                                                       containerStyle={{flexGrow: 1}}
                                                                       label={data2.label}
                                                                       answer={data2.answer}
                                                                       showAnswer={showAnswer} />)}
                        </View>)}
                        {/*<View key={0} style={{flexDirection: 'row', margin: 5}}>*/}
                        {/*    <CustomInput key={0} containerStyle={{flexGrow: 1}} label="ڤ" answer={4} showAnswer={showAnswer} />*/}
                        {/*    <CustomInput key={1} containerStyle={{flexGrow: 1}} label="چ" answer={3} showAnswer={showAnswer} />*/}
                        {/*</View>*/}
                        {/*<View key={1} style={{flexDirection: 'row', margin: 5}}>*/}
                        {/*    <CustomInput key={0} containerStyle={{flexGrow: 1}} label="ڠ" answer={3} showAnswer={showAnswer} />*/}
                        {/*    <CustomInput key={1} containerStyle={{flexGrow: 1}} label="ڽ" answer={3} showAnswer={showAnswer} />*/}
                        {/*</View>*/}
                    </View>

                    <Button title="SEMAK"
                            onPress={() => this.setState({showAnswer: true})} />
                </ImageBackground>

            </View>
        );
    }
}

const rowData = [
    [{label: "ڤ", answer: 4}, {label: "چ", answer: 3}],
    [{label: "ڠ", answer: 33}, {label: "ڽ", answer: 3}]
];

export default Slide11Screen;
