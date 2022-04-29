import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors'

export const Header = ({
    LineData
}) => {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                {LineData?.map((item, index) => (
                    <View
                        key={index}
                        style={[styles.line,
                        { backgroundColor: item.active ? COLORS.white : COLORS.grey }
                        ]}
                    />
                ))}
            </View>
            <Text
                style={styles.labelText}>
                RESCUE SESSION:ANGER & FRUSTATION
            </Text>
            <Text
                style={styles.headingText}>
                Pick the level  your anger & frustion right now
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        marginTop: 15,
        width: '100%',
        height: 4,
        borderRadius: 5,
        margin: 10,
        flex: 1
    },
    labelText: {
        margin: 10,
        color: COLORS.white,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    headingText: {
        margin: 10,
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 21,
        lineHeight: 28
    }
})

