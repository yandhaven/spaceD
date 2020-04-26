import React from 'react'

let initialState = {
    users: [],
    // pageParametrs: {pageSize: 2, pageNumber: 1},
    pageSize: 2,
    pageNumber: 1,
    totalCount: 5,
    userSelected: null
}

export let followAC = (userID) => {
    return { type: 'FOLLOW', userID }
}

export let unfollowAC = (userID) => {
    return { type: 'UNFOLLOW', userID }
}

export let setUsers = (users) => {
    return { type: 'SET_USERS', users }
}

export let setPage = (pageNum) => {
    return { type: 'SET_PAGENUMBER', pageNum }
}

export let selectUser = (userID) => {
    return { type: 'SELECT_USER', userID }
}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;

                })
            }



        }

        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;

                })
            }

        }

        case 'SET_USERS': {
            return { ...state, users: action.users }
        }

        case 'SET_PAGENUMBER': {

            let stateCopy = { ...state }
            stateCopy.pageNumber = action.pageNum
            return stateCopy
        }

        case 'SELECT_USER': {

            let stateCopy = { ...state }
            stateCopy.userSelected = action.userID
            return stateCopy
        }




        default: {
            return { ...state }
        }
    }

}
export default usersReducer;