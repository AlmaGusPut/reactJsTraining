import React from 'react';

export default class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const notes = this.props.notes;

        return <div className="colors"
            ref={(el) => {
                if (el) {
                    el.style.setProperty('border-color', "#FF0000", 'important');
                }
            }}
        >
            Notelist :<br />
            {notes.map((note, key) => {
                return (
                    <div key={key}>{note}     <span style={{ cursor: "pointer" }}
                        onClick={() => this.props.deleteNote(note)}
                    >Remove</span><br /></div>
                )
            })}
        </div>
    }
}