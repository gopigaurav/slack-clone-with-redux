import React, {useRef} from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import firebase from "firebase"

function Chatinput({ channelName, channelId }) {
  const inputRef = useRef(null);
  const sendMessage = (e) => {
    e.preventDefault();
    if(channelId){
        return false;
    }
    db.collection('rooms').doc(channekId).collection("messages").add({
        message : inputRef.current.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  };
  return (
    <ChatInputConatiner>
      <form>
        <input ref={inputRef} placeholder={`Message #Room`}></input>
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputConatiner>
  );
}

export default Chatinput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button{
      display : none !important;
  }
`;
