import { useLocation } from 'react-router-dom';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useBooks } from './BooksContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function IssueBooks(){
   const [formValues, setFormValues] = useState({
    username: '',
    duedate: ''
  });
    const navigate = useNavigate(); 
    const [open, setOpen] = React.useState(false);
        const handleClose = () => {
      setOpen(false);
      navigate('/adminDashboard');
    };
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };
    const { state } = useLocation();
    const { book } = state || {};
     if (!book) {
    return <p>No book selected.</p>;
  }
  const {allbooks, books, setBooks,setFilteredBooks } = useBooks();
  const handleIssueBook = () => {
    const updatedBook = {
      ...book,
      borrowedBy: formValues.username,
      dueDate: formValues.duedate,
      status: 'Not available'
    };
    const updatedBooks = allbooks.map(b =>
      b.id === book.id ? updatedBook : b
    );
      setBooks(updatedBooks);            
      setFilteredBooks(updatedBooks);
      setOpen(true);
    
    
  };

return(
        <>
    <React.Fragment>
      <CssBaseline />
      
      <Container fixed>
        <Box sx={{ height: 400  ,margin:10}} >
        <div style={{display: 'flex',flexDirection: 'column',justifyContent:'center', textAlign:'center'}}> 
            <h2> Issue Book</h2>
        </div>
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label="User Name"
        name="username"
        value={formValues.name}
        onChange={handleChange}
      />
      <TextField
        label="duedate"
        name="duedate"
        type="date"
        value={formValues.email}
        InputLabelProps={{
            shrink: true,
        }}
        onChange={handleChange}
      />
    </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleIssueBook}>
      Issue Book
     </Button>
      </Box>
      </Container>
       <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Book issued"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                 Book issued successfully!.
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
)
}
export default IssueBooks