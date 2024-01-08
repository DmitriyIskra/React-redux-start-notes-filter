import { CHANGE_DATA_FILTER, CHANGE_VALUE_FILTER } from "../actions/actions";

const initDATA = {
    value: '',
    data: [],
}

// CHANGE_VALUE_FILTER - данные ввода
// CHANGE_DATA_FILTER - отфильтрованные объекты

const filterReducer = (state = initDATA, action) => {
    switch(action.type) {
        case CHANGE_VALUE_FILTER:
            return {...state, value: action.payload}; 
        case CHANGE_DATA_FILTER:
            return {...state, data: action.payload};
        default:
            return state;
    }
}

export default filterReducer;