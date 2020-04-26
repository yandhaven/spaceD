let initialState = {

    posts: [
        { id: 0, message: "It's my first post", like_count: '2399' },
        { id: 1, message: "It's my second post", like_count: '232' },
        { id: 2, message: "It's my 3rd post", like_count: '23' }
    ],
    tempValue: '',
    profile: null


}

export let newPostActionCreator = () => {
    return (
        { type: 'ADD-POST' }
    )
}

export let newPostTextActionCreator = (body) => {
    return (
        { type: 'TEXT-CHANGE', textValue: body }
    )
}

export let setProfile = (user) => {
    return (
        { type: 'PROFILE-SELECT', user }
    )
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            console.log(state.posts)
            let lenght = state.posts.length
            let like_range = '131313'
            let newPost = {
                id: lenght,
                message: state.tempValue,
                like_count: like_range,
            }
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.tempValue = '';
            return stateCopy;
        }


        case 'TEXT-CHANGE': {
            let stateCopy = { ...state }
            stateCopy.tempValue = action.textValue;
            return stateCopy;
        }

        case 'PROFILE-SELECT': {

            return { ...state, profile: action.user };
        }


        default:
            return state;
    }



}
export default profileReducer;