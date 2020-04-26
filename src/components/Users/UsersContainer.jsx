import React from "react"
import { connect } from "react-redux"
import Users from "./Users"
import { followAC, unfollowAC, setUsers, setPage, selectUser } from "../../redux/users-reducer"
import * as axios from 'axios'

class UsersClass extends React.Component {

    componentDidMount() {
        axios.get(`https://localhost:3000/users/page=${this.props.pageNumber}&pagesize=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data);
            console.log(response.data)
        })
    }

    onPagenumberChanged = (pageNumber) => {
        this.props.setPageNum(pageNumber);
        axios.get(`https://localhost:3000/users/page=${pageNumber}&pagesize=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data);
            console.log(response.data)
        })

    }

    render() {
        return <Users

            users={this.props.users}
            unfollowAction={this.props.unfollowAction}
            followAction={this.props.followAction}
            setPage={this.onPagenumberChanged}
            pageNumber={this.props.pageNumber}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            setUser={this.props.setUser}

        />
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNumber: state.usersPage.pageNumber,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount

    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        followAction: (userID) => {
            dispatch(followAC(userID));

        },
        unfollowAction: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },


        setPageNum: (pageNum) => {
            dispatch(setPage(pageNum));
        },

        setUser: (userID) => {
            dispatch(selectUser(userID))
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)