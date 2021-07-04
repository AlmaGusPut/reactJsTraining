import './App.css';
import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';
import PostListA from './PostListA';
import Note from './Note';
import NoteListA from './NoteListA';

function App() {
  
  const [posts, setPosts] = useState(["Posting", "Tentang", "Sesuatu"]);

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  const deletePost = (deletedPost) => {
    setPosts([...posts.filter(post => post != deletedPost)]);
  }

  const [notes, setNotes] = useState(["catatan", "Apa", "Ini"]);

  const addNote = (note) => {
    setNotes([...notes, note])
  }

  const deleteNote = (deletedNote) => {
    setNotes([...notes.filter(note => note != deletedNote)]);
  }
  return (
    <React.Fragment>
      <Header title="Latihan ReactJs"></Header>
      <div className="split left">
        <Post addPost={addPost}></Post>
        <PostListA posts={posts} deletePost={deletePost}></PostListA>
      </div>

      <div className="split right">
        <Note addNote={addNote}></Note>
        <NoteListA notes={notes} deleteNote={deleteNote}></NoteListA>
      </div>
    </React.Fragment>
  );
}

export default App;
