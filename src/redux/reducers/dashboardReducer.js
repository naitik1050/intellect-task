import { CONSTANTS } from '../../constants/AppConst';
import { widthPercentageToDP } from '../../helpers/lib';


const Data = [
    {
        id: 0,
        active: true
    },
    {
        id: 1,
        active: false
    },
    {
        id: 2,
        active: false
    },
    {
        id: 3,
        active: false
    },
    {
        id: 4,
        active: false
    },
]

const PyramidData = [
    {
        id: 0,
        active: false,
        width: widthPercentageToDP(80)
    },
    {
        id: 1,
        active: false,
        width: widthPercentageToDP(65)
    },
    {
        id: 2,
        active: false,
        width: widthPercentageToDP(50)
    },
    {
        id: 3,
        active: false,
        width: widthPercentageToDP(35)
    },
    {
        id: 4,
        active: false,
        width: widthPercentageToDP(20)
    }
]

const initialState = {
    LineData: Data,
    scaleMeter: 5,
    PyramidData: PyramidData,
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.CLICK_NEXT_REQUEST: return { ...state };
        case CONSTANTS.CLICK_NEXT_SUCCESS:
            const previousLineData = state.LineData.filter((data) => data.active)
            if (state.LineData[state.LineData.length - 1].active) {
                state.LineData[0].active = true
                state.LineData[previousLineData[0].id].active = false
            } else {
                state.LineData[previousLineData[0].id + 1].active = true
                state.LineData[previousLineData[0].id].active = false
            }
            return { ...state, LineData: state.LineData };
        case CONSTANTS.CLICK_NEXT_FAILURE: return { ...state };

        case CONSTANTS.SCALE_METER_VALUE_CHANGE_REQUEST: return { ...state };
        case CONSTANTS.SCALE_METER_VALUE_CHANGE_SUCCESS:
            return { ...state, scaleMeter: action.payload };
        case CONSTANTS.SCALE_METER_VALUE_CHANGE_FAILURE: return { ...state };

        case CONSTANTS.PYRAMID_VALUE_CHANGE_REQUEST: return { ...state };
        case CONSTANTS.PYRAMID_VALUE_CHANGE_SUCCESS:
            state.PyramidData.map((data, index) => {
                if (data.id >= action.payload) {
                    state.PyramidData[index].active = true
                } else {
                    state.PyramidData[index].active = false
                }
            })
            return { ...state };
        case CONSTANTS.PYRAMID_VALUE_CHANGE_FAILURE: return { ...state };

        default:
            return state;
    }
};

export default dashboardReducer;

