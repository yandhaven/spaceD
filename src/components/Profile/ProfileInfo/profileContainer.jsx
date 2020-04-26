import React from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'
import * as axios from 'axios'
import { setProfile } from '../../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'

class GetUserInfo extends React.Component {



    componentDidMount() {

        console.log(this.props)

        axios.get(`https://localhost:3000/profile/${this.props.match.params.userid}`).then(response => {
            this.props.setProfile(response.data[0])
            console.log(response)

        })
    }

    render() {
        return <ProfileInfo userInfo={this.props.userInfo} />
    }
}

let mapStateToProps = (state) => ({
    userInfo: state.profilePage.profile,
    userSelected: state.usersPage.userSelected
}




)
let mapDispatchToProps = (dispatch) => (
    {
        setProfile: (user) => {
            dispatch(setProfile(user));
        },

    }

)
let GetUserInfowithRoute = withRouter(GetUserInfo)

export default connect(mapStateToProps, { setProfile })(GetUserInfowithRoute)