import React from 'react';
import {ImageBackground, View, Text, TextInput, Dimensions, StyleSheet, Button} from 'react-native';

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
        const {showAnswer, answer} = this.props;
        const {value} = this.state;
        const {width} = Dimensions.get('window');
        const w = width / 7 - 10;

        let borderC = '#9f9f9f';

        if (showAnswer) {
            borderC = answer === value ? "#30ea50" : "#ff4738";
        }

        return <View>
            <TextInput value={value} onChangeText={this.onChange} style={{
                width: w,
                height: w,
                marginLeft: 5,
                marginRight: 5,
                borderColor: borderC,
                borderWidth: 2,
                fontSize: 20,
                textAlign: 'center'
            }}/>
            {showAnswer &&
            <Text style={{textAlign: 'center', color: borderC, fontWeight: 'bold', fontSize: 20}}>{answer}</Text>}
        </View>

    }
}

const rowArray = [
    ["چ", "ج", "ث", "ة", "ت", "ب", "ا"],
    ["س", "ز", "ر", "ذ", "د", "خ", "ح",],
    ["غ", "ع", "ظ", "ط", "ض", "ص", "ش"],
    ["ل", "ݢ", "ک", "ق", "ڤ", "ف", "ڠ"],
    ["ي", "ء", "ه", "ۏ", "و", "ن", "م"],
    ["ڽ", "ى"]
];

class Slide7Screen extends React.Component {
    static navigationOptions = {
        title: 'Slide 7',
    };

    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        };
    }

    render() {
        const {showAnswer} = this.state;
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('jawiku/images/HomeScreen/background5.jpg')} style={{flex: 1}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Latihan Pengukuhan</Text>
                    <View style={{flex: 4, paddingTop: 20}}>
                        {rowArray.map((array, index) => <View key={index}
                                                              style={{
                                                                  margin: 0,
                                                                  flex: 1,
                                                                  flexDirection: 'row',
                                                                  justifyContent: 'flex-end'
                                                              }}>
                            {array.reverse().map((huruf, index1) => <CustomInput key={index1} answer={huruf}
                                                                                 showAnswer={showAnswer}/>)}
                        </View>)}
                    </View>
                    <View style={{flex: 1}}>
                        <Button title="Semak" onPress={() => this.setState({showAnswer: true})}/>
                    </View>

                </ImageBackground>

            </View>
        );
    }
}


export default Slide7Screen;
