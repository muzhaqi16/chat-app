import React from 'react'
import "rbx/index.css";
import { Field, Control, Button, Input, Container, Box } from 'rbx';
import Message from './Message';

function MainChat() {
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
                        <Button color="info">Send</Button>
                    </Control>
                </Field>
            </Container>

        </div >
    )
}

export default MainChat
