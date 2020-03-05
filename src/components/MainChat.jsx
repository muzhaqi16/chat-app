import React from 'react'
import "rbx/index.css";
import { Field, Control, Button, Input, Container, Box } from 'rbx';
import Message from './Message';
import FirebaseService from '../config/firebaseConfig';

class MainChat extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSendMessage = (e) => {
        e.preventDefault();
        // FirebaseService.addMessage("This is a test");
        console.log("Sending message")
    };
    render() {
        return (
            <div>
                <Container>
                    <Box>
                        <Message />
                        <Message />
                        <Message />
                    </Box>
                    <Field kind="group">
                        <Control expanded>
                            <Input placeholder="Send a message..." />
                        </Control>
                        <Control>
                            <Button color="info" onClick={this.handleSendMessage}>Send</Button>
                        </Control>
                    </Field>
                </Container>

            </div >
        )
    }
}

export default MainChat
