# react-chat-window

`react-chat-window` provides an intercom-like chat window that can be included easily in any project for free. It provides no messaging facilities, only the view component.

<a href="https://www.npmjs.com/package/react-chat-window" target="\_parent">
  <img alt="" src="https://img.shields.io/npm/dm/react-chat-window.svg" />
</a>
<a href="https://github.com/kingofthestack/react-chat-window" target="\_parent">
  <img alt="" src="https://img.shields.io/github/stars/kingofthestack/react-chat-window.svg?style=social&label=Star" />
</a>
<br/>
<h4>This project is fuelled by donations and maple syrup:</h4>
<a href="https://www.patreon.com/bePatron?u=12544159" target="\_parent">
  <img
    width="150px"
    src="https://c5.patreon.com/external/logo/become_a_patron_button.png">
</a>
<br/>
<br/>

![Alt Text](https://puu.sh/xei2F/fd4a121185.gif)

## Features

- Customizeable
- Backend agnostic
- Free

## [Demo](https://kingofthestack.github.io/react-chat-window/)

## Table of Contents
- [Installation](#installation)
- [Example](#example)
- [Components](#api)

## Installation

```
$ npm install react-chat-window
```

## Example

``` javascript
import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'

class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}
```

For more detailed examples see the demo folder.

## Components

# Launcher

`Launcher` is the only component needed to use react-chat-window. It will react dynamically to changes in messages. All new messages must be added via a change in props as shown in the example.

Launcher props:

|      prop        | type   | required | description |
|------------------|--------|----------|-------------|
| agentProfile     | [object](#agent-profile-objects) | yes | Represents your product or service's customer service agent. Fields: imageUrl (string), teamName (string). |
| handleClick      | function | yes | Intercept the click event on the launcher. No argument sent when function is called. |
| isOpen           | boolean | yes | Force the open/close state of the chat window. If this is not set, it will open and close when clicked. |
| messageList      | [[message](#message-objects)] | yes | An array of message objects to be rendered as a conversation. |
| newMessagesCount | number | no | The number of new messages. If greater than 0, this number will be displayed in a badge on the launcher. |
| onFilesSelected  | function([fileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)) | no | Called after file has been selected from dialogue in chat window. |
| onMessageWasSent | function([message](#message-objects)) | yes | Called when a message is sent, with a message object as an argument. |
| showEmoji        | boolean | no | Whether or not to show the emoji button in the input bar.


### Message Objects

Message objects are rendered differently depending on their type. Currently, only text, file, and emoji types are supported. Each message object has an `author` field which can have the value 'me' or 'them'.

``` javascript
{
  author: 'them',
  type: 'text',
  data: {
    text: 'some text'
  }
}

{
  author: 'me',
  type: 'emoji',
  data: {
    code: 'someCode'
  }
}


{
  author: 'me',
  type: 'file',
  data: {
    url: 'somefile.mp3',
    fileName: 'Any old name'
  }
}

```

### Agent Profile Objects

Look like this:

```js
{
  imageUrl: 'https://somewhere.on/the_web.png',
  teamName: 'Da best'
}
```

## People Using react-chat-window

If you're using react-chat-window in a product I'd love to see what you're making! Email me at dylan@kingofthestack.com
