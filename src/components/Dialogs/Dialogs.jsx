import React from 'react'
import modules from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {

    return (
        <div className={modules.dialog} ><NavLink to={'/messages/' + props.id} activeClassName={modules.active}>{props.name}</NavLink></div>
    )
}

const Messages = (props) => {
    return (
        <div className={modules.message} >{props.message}</div>
    )

}



const Dialogs = (props) => {



    let dialogsArrayNames = props.dialogsData.map((el) => {
        return (
            <DialogItems name={el.name} id={el.id} />

        )
    })

    let dialogsArrayMessages = props.messagesData.map((el) => {
        return (
            <Messages message={el.message} id={el.id} />
        )
    })


    let onchangeMsg = (e) => {

        let text = e.target.value

        props.addTextMsg(text)


    }

    let addMessage = () => {
        props.addMsg();


    }


    return (
        <div className={modules.dialogs}>

            <div className={modules.dialogItems}>
                {dialogsArrayNames}

            </div>
            <div className={modules.messages}>

                {dialogsArrayMessages}

                <div className={modules.newMsgarea}>
                    <textarea onChange={onchangeMsg} value={props.tempValue} ></textarea>
                    <div><button onClick={addMessage}>send message</button></div>


                </div>
            </div>



        </div>

    )
}

export default Dialogs;