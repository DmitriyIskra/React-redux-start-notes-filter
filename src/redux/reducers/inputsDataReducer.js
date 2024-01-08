import { CHANGE_INPUT_TEXT, CHANGE_INPUT_SUM, EDIT_INPUT, SAVE_INPUT, CANCEL_INPUT } from '../actions/actions';

const initialText = {
    valueText: '',
    valueSum: '',
}; 

const inputTextReducer = (state = initialText, action) => {
    switch(action.type) {
        case CHANGE_INPUT_TEXT:
            return {...state, valueText: action.payload};
        case CHANGE_INPUT_SUM:
            return {...state, valueSum: action.payload};
        case EDIT_INPUT:
            return {
                valueText: action.payload.text,
                valueSum: action.payload.sum
            };
        case SAVE_INPUT:
            return {
                valueText: action.payload,
                valueSum: action.payload,
            };
        case CANCEL_INPUT:
            return {
                valueText: action.payload,
                valueSum: action.payload,
            };
        default:
            return state;
    }
}

export default inputTextReducer;