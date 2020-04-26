let initialState = {
    dialogsData: [

        { id: 1, name: 'Name1' },
        { id: 2, name: 'Name2' },
        { id: 3, name: 'Name3' },
        { id: 4, name: 'Name4' },
        { id: 5, name: 'Name5' },
        { id: 6, name: 'Name6' }


    ],
    tempValue: '',
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Cool' },
        { id: 4, message: 'And? Yoy?' },
        { id: 5, message: 'Too' }

    ],
}

export let newMsgActionCreator = () => {
    return (
        { type: 'ADD-MSG' }
    )
}

export let newMsgTextActionCreator = (body) => {
    return (
        { type: 'ADD-TEXT-MSG', textValue: body }
    )
}


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TEXT-MSG': {
            let stateCopy = { ...state }
            stateCopy.tempValue = action.textValue;
            return stateCopy;
        }

        case 'ADD-MSG': {
            let length = state.messagesData.length
            let newMsg = {
                id: length,
                message: state.tempValue
            }

            let stateCopy = { ...state }
            stateCopy.messagesData = [...state.messagesData]

            stateCopy.messagesData.push(newMsg)
            console.log('message added')
            stateCopy.tempValue = ''
            return stateCopy;
        }


        default:
            return state
    }




}

export default dialogReducer;