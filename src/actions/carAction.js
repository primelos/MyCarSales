export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const buyItem = (id) => ({
    type: ADD_ITEM, payload: id
})

export const removeFeature = (id) => ({
    type: REMOVE_ITEM, payload: id
})