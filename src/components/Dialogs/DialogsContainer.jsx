import React from 'react'
import modules from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Dialogs from './Dialogs';
import { newMsgActionCreator, newMsgTextActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';





const DialogsContainer1 = (props) => {

    let addMsg = () => {

        props.dispatch(newMsgActionCreator());

    }

    let addTextMsg = (e) => {
        props.dispatch(newMsgTextActionCreator(e));


    }




    return (
        <Dialogs addMsg={addMsg} addTextMsg={addTextMsg} tempValue={props.tempValue} dialogsData={props.dialogsData} messagesData={props.messagesData} />

    )
}

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        tempValue: state.dialogsPage.tempValue,
        messagesData: state.dialogsPage.messagesData




    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        addMsg: () => {

            dispatch(newMsgActionCreator());

        },
        addTextMsg: (e) => {
            dispatch(newMsgTextActionCreator(e));


        }


    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;