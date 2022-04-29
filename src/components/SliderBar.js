import { StyleSheet } from 'react-native'
import React from 'react'
import Slider from 'react-native-slider';
import { COLORS } from '../theme/colors';

const SliderBar = ({
    sliderStyle,
    value,
    onValueChange
}) => {
    return (
        <Slider
            style={sliderStyle}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor={COLORS.base}
            maximumTrackTintColor={COLORS.white}
            thumbTintColor={COLORS.base}
            disabledHoverEffect={false}
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
            value={value}
            onValueChange={(value) => onValueChange(value)} />
    )
}

export default SliderBar

const styles = StyleSheet.create({
    track: {
        height: 8,
        borderRadius: 5,
    },
    thumb: {
        width: 25,
        height: 25,
        backgroundColor: COLORS.base,
        borderColor: COLORS.lightbase,
        borderWidth: 5,
        borderRadius: 13,
    }
})