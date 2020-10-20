const saveLocation = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_LOCATION':
            state = { startPoint: action.startPoint, endPoint: action.endPoint }
        default:
            return state
    }
}

export default saveLocation