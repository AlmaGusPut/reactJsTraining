import NoteList from './NoteList.js';
import React from 'react';

export default class NoteListA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <NoteList notes={this.props.notes} deleteNote={this.props.deleteNote}></NoteList>
        )
    }
}