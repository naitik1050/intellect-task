import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../theme/colors';
import { Button, Header } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { CONSTANTS } from '../constants/AppConst';
import { Pyramid, ScaleMeter } from './widgets';
import { heightPercentageToDP } from '../helpers/lib';

export const Dashboard = () => {

    const dispatch = useDispatch();
    const response = useSelector(state => state?.dashboardReducer)
    const activeIndex = response.LineData?.filter((data) => data.active)

    function PressNext() {
        dispatch({ type: CONSTANTS.CLICK_NEXT_REQUEST })
    }

    function onValueChange(value) {
        dispatch({ type: CONSTANTS.SCALE_METER_VALUE_CHANGE_REQUEST, payload: parseInt(value) })
    }

    function changePyramidValue(value) {
        dispatch({ type: CONSTANTS.PYRAMID_VALUE_CHANGE_REQUEST, payload: parseInt(value) })
    }

    return (
        <SafeAreaView style={styles.mainContainer} edges={['top']}>
            <Header LineData={response.LineData} />
            <View style={styles.mainWrap}>
                {activeIndex[0].id == 0 ?
                    <ScaleMeter
                        value={response.scaleMeter}
                        onValueChange={(value) => onValueChange(value)}
                    />
                    :
                    activeIndex[0].id == 1 ?
                        <Pyramid
                            Data={response.PyramidData}
                            changePyramidValue={(value) => changePyramidValue(value)}
                        />
                        : null}
            </View>
            <Button
                backgroundColor={COLORS.white}
                buttonTitle='Next'
                buttonStyle={styles.button}
                onButtonPress={() => PressNext()} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.maincolor
    },
    mainWrap: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    button: {
        width: '92%',
        alignSelf: 'center',
        borderRadius: 25,
        marginBottom: heightPercentageToDP(3)
    }
})


