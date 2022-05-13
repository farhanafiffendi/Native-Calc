import React from "react";
import { TouchableOpacity, Text, StatusBar, View, StyleSheet } from 'react-native';

export default function CalcTouch() {

    const [number, setNumber] = React.useState("")
    console.log("calculator" + setNumber);

    const handleTouch = ((value) => {
        setNumber(number + value)
    });

    const result = () => {
        let hasil = eval(number)
        return setNumber(hasil)
    }

    const clear = () => {
        setNumber("");
    };

    const delt = () => {
        setNumber(number.slice(0, -1))
    }



    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.board}>{number}</Text>
            <View style={styles.numStyle}>
                <TouchableOpacity onPress={() => handleTouch('1')}>
                    <Text style={styles.num}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('2')}>
                    <Text style={styles.num}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clear()}>
                    <Text style={styles.operator}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => delt()}>
                    <Text style={styles.operator}>D</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.numStyle}>
                <TouchableOpacity onPress={() => handleTouch('3')}>
                    <Text style={styles.num}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('4')}>
                    <Text style={styles.num}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('*')}>
                    <Text style={styles.operator}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('/')}>
                    <Text style={styles.operator}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.numStyle}>
                <TouchableOpacity onPress={() => handleTouch('5')}>
                    <Text style={styles.num}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('6')}>
                    <Text style={styles.num}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('-')}>
                    <Text style={styles.operator}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('+')}>
                    <Text style={styles.operator}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.numStyle}>
                <TouchableOpacity onPress={() => handleTouch('7')}>
                    <Text style={styles.num}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('8')}>
                    <Text style={styles.num}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('.')}>
                    <Text style={styles.operator}>,</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('%')}>
                    <Text style={styles.operator}>%</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.numStyle}>
                <TouchableOpacity onPress={() => handleTouch('9')}>
                    <Text style={styles.num}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTouch('0')}>
                    <Text style={styles.num}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => result()}>
                    <Text style={styles.result}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA0A0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    num: {
        display: "flex",
        backgroundColor: "#FF5757",
        borderWidth: 1,
        borderColor: "#FFA0A0",
        alignItems: "center",
        fontFamily: "Roboto",
        color: "white",
        fontSize: 50,
        fontWeight: 700,
        borderColor: "#fff",
        width: 70,
        height: 70,
        justifyContent: "center",
    },

    numStyle: {
        display: "flex",
        flexDirection: "row",
    },

    operator: {
        backgroundColor: "#930707",
        display: "flex",
        borderWidth: 1,
        borderColor: "#FFA0A0",
        alignItems: "center",
        fontFamily: "Roboto",
        color: "white",
        fontSize: 50,
        fontWeight: 700,
        borderColor: "#fff",
        width: 70,
        height: 70,
        justifyContent: "center",
    },

    result: {
        display: "flex",
        backgroundColor: "#930707",
        borderWidth: 1,
        borderColor: "#FFA0A0",
        alignItems: "center",
        fontFamily: "Roboto",
        color: "white",
        fontSize: 50,
        fontWeight: 700,
        borderColor: "#fff",
        width: 140,
        height: 70,
        justifyContent: "center",
    },

    board: {
        height: 100,
        width: 280,
        borderWidth: 1,
        borderColor: "#FFA0A0",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        fontSize: 50,
    }
});

