import React from 'react'
import "rbx/index.css";
import { Media, Image, Content } from 'rbx';

function Message() {
    return (
        <Media>
            <Media.Item align="left">
                <Image.Container size={64}>
                    <Image
                        alt="Image"
                        src="https://bulma.io/images/placeholders/128x128.png"
                    />
                </Image.Container>
            </Media.Item>
            <Media.Item>
                <Content>
                    <p>
                        <strong>John Smith</strong> <small>1 minute ago</small> <br />
                        Hey, What's Up</p>
                </Content>
            </Media.Item>
        </Media>
    )
}

export default Message
