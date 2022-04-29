import { takeEvery, put, call } from 'redux-saga/effects';
import { CONSTANTS } from '../../constants/AppConst';

export function* handleClickNext() {
    try {
        yield put({ type: CONSTANTS.CLICK_NEXT_SUCCESS });
    } catch (error) {
        yield put({ type: CONSTANTS.CLICK_NEXT_FAILURE });
    }
}

export function* handleChangeValue(data) {
    try {
        yield put({ type: CONSTANTS.SCALE_METER_VALUE_CHANGE_SUCCESS, payload: data.payload });
    } catch (error) {
        yield put({ type: CONSTANTS.SCALE_METER_VALUE_CHANGE_FAILURE });
    }
}

export function* handlePyramidChangeValue(data) {
    try {
        yield put({ type: CONSTANTS.PYRAMID_VALUE_CHANGE_SUCCESS, payload: data.payload });
    } catch (error) {
        yield put({ type: CONSTANTS.PYRAMID_VALUE_CHANGE_FAILURE });
    }
}


export default function* dashboardSaga() {
    yield takeEvery(CONSTANTS.CLICK_NEXT_REQUEST, handleClickNext);
    yield takeEvery(CONSTANTS.SCALE_METER_VALUE_CHANGE_REQUEST, handleChangeValue);
    yield takeEvery(CONSTANTS.PYRAMID_VALUE_CHANGE_REQUEST, handlePyramidChangeValue);
}