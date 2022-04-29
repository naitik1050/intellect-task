import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/lib'

export const Pyramid = ({ Data, changePyramidValue }) => {
    return (
        <View>
            <Text style={styles.label}>Low</Text>
            {Data?.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.6}
                    onPress={() => changePyramidValue(index)}
                    style={[styles.pyramidShape, { width: item.width, backgroundColor: item.active ? COLORS.white : COLORS.darkBase }]}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        textAlign: 'center',
        color: COLORS.white,
        fontSize: heightPercentageToDP(2.5),
        fontWeight: 'bold'
    },
    pyramidShape: {
        padding: heightPercentageToDP(3.2),
        marginTop: heightPercentageToDP(2),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignSelf: 'center'
    }
})

