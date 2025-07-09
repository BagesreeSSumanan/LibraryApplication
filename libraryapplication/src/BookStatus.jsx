import { useLocation } from 'react-router-dom';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function BookStatus() {
  const { state } = useLocation();
  const { book } = state || {};

  if (!book) {
    return <p>No book selected.</p>;
  }

  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: 400  ,margin:10}} >
        <div style={{display: 'flex',flexDirection: 'column',justifyContent:'center', textAlign:'center'}}> 
            <h2>Book Status</h2>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Status: {book.status}</p>
            <p>Borrowed By: {book.borrowedby || "N/A"}</p>
            <p>Due Date: {book.dueDate || "N/A"}</p>
        </div>
        
      </Box>
      </Container>
    </React.Fragment>
    </>

  );
}

export default BookStatus;



