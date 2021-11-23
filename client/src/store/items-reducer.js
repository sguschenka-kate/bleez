import * as types from './items-actions'

export const itemsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_ITEMS: {
            const items = action.payload
            return {...state, items}
        }
        case types.FETCH_ITEM: {
            const item = action.payload
            return {...state, item}
        }
        default: 
            return state
    }
}
