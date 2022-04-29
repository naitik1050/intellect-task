import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export const Button = (
    { onButtonPress,
        buttonTitle,
        backgroundColor,
        buttonStyle,
        disabled
    }
) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            disabled={disabled}
            onPress={onButtonPress}
            style={[buttonStyle, { backgroundColor: disabled ? COLORS.lightgrey : backgroundColor }]}>
            <Text style={styles.text}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 15,
        color: COLORS.maincolor
    }
});

