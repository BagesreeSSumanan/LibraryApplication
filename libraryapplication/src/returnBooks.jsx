import { useLocation } from 'react-router-dom';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useBooks } from './BooksContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';


function  ReturnBooks(){
     const { state } = useLocation();
     const { book, user } = state || {};  
     const {allbooks, setBooks,setFilteredBooks } = useBooks();
     const navigate = useNavigate(); 
     const [open, setOpen] = React.useState(false);
             const handleClose = () => {
           setOpen(false);
           navigate('/userDashboard', { state: { user: user } });
         };
    const handleReturnBook = () => {
    const updatedBook = {
      ...book,
      returnRequest: true
    };
    const updatedBooks = allbooks.map(b =>
      b.id === book.id ? updatedBook : b
    );
      setBooks(updatedBooks);            
      setFilteredBooks(updatedBooks);
      setOpen(true); 
  };
    return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#fff', height: 400  ,margin:10 ,display: 'flex',flexDirection: 'column',justifyContent:'center', textAlign:'center', alignItems:'center'}} >
        <div> 
            <h2> Return Book</h2>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Status: {book.status}</p>
            <p>Borrowed By: {book.borrowedBy || "N/A"}</p>
            <p>Due Date: {book.dueDate || "N/A"}</p>
        </div>  
        <Button variant="contained" onClick={() => handleReturnBook(book)} style={{width:150}}>Return Book</Button>
      
      </Box>
      </Container>
      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Return Request"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                 Book return request send successfully!.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
    </React.Fragment>
    </>

  );
};
export default ReturnBooks;