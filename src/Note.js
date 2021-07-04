import React from 'react';

export default class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ""
        }
    }

    updateNote = (e) => {
        this.setState({ note: e.target.value })
    }

    addNote = () => {
        const note = this.state.note;
        this.props.addNote(note);
        this.setState({ note: "" })
    }

    render() {
        return <div>
            Note :
            <input type="text" name="note" value={this.state.note} onChange={this.updateNote}></input><br />
            <button onClick={this.addNote}>Add Note</button>
        </div>
    }
}