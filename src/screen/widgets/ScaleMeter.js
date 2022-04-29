import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import * as Progress from 'react-native-progress';
import SliderBar from '../../components/SliderBar';
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/lib';

export const ScaleMeter = ({ value, onValueChange }) => {
    return (
        <View>
            <View style={styles.cirlcedashed}>
                <Progress.Circle
                    size={widthPercentageToDP(54)}
                    color={COLORS.white}
                    borderWidth={0}
                    backgroundColor={COLORS.darkBase}
                    borderRadius={widthPercentageToDP(27)}
                    strokeCap='round'
                    progress={value / 10}
                    style={styles.Progress}>
                    <View style={styles.circle}>
                        <Text style={styles.counter}>{value}</Text>
                    </View>
                </Progress.Circle >
            </View>
            <SliderBar
                value={value}
                sliderStyle={styles.sliderStyle}
                onValueChange={(value) => onValueChange(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Progress: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: widthPercentageToDP(36),
        height: widthPercentageToDP(36),
        borderRadius: widthPercentageToDP(18),
        backgroundColor: COLORS.base,
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center'
    },
    counter: {
        color: COLORS.white,
        fontSize: widthPercentageToDP(12),
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    cirlcedashed: {
        width: widthPercentageToDP(70),
        height: widthPercentageToDP(70),
        borderWidth: 3,
        borderColor: COLORS.grey,
        borderRadius: widthPercentageToDP(35),
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    sliderStyle: {
        width: '70%',
        alignSelf: 'center',
        marginTop: heightPercentageToDP(5)
    }
})