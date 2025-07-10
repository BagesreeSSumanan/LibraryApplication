
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import {  Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useBooks } from './BooksContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ebebeb',
  height:'120px',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function BookList({ books , role, user}) {
 const navigate = useNavigate(); 
 const {allbooks, setBooks,setFilteredBooks } = useBooks();
 function handleCheckStatus(book){
    navigate('/bookStatus', { state: { book } });
  };
  function handleIssueBook(book){
    navigate('/issueBooks', { state: { book } });
  };
  function handleReturn(book,user){
    navigate('/returnBooks', { state: { book, user } });
  }
   function handleBorrow(book,user){
    const updatedBook = {
      ...book,
      borrowRequestby: user,
      borrowRequest : true,
    };
    const updatedBooks = allbooks.map(b =>
      b.id === book.id ? updatedBook : b
    );
      setBooks(updatedBooks);            
      setFilteredBooks(updatedBooks);
      setOpen(true);
  }
    return(
        <Box sx={{ flexGrow: 1 , margin:4}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {books.map((book, index) => (
          <Grid item xs={2} sm={4} md={4} key={book.id}>
            <Item>
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="body2">Author: {book.author}</Typography>
              <Typography variant="body2">Status: {book.status}</Typography>
               {  role === 'admin' && (
                    <div style={{display: 'flex',flexDirection: 'row-reverse',justifyContent: 'space-around'}}>
                         <Stack direction="row" spacing={4}>
                            {book.status === 'Available' ? (
                                <Button variant="contained" onClick={() => handleIssueBook(book)}>
                                    Issue Book
                                </Button>
                                ) : <Button variant="contained" disabled>
                                    Issue Book
                                </Button>}
                            <Button variant="contained" onClick={() => handleCheckStatus(book)}>Check Status</Button>
                        </Stack>
                    </div>
                )}
                {  role === 'member' && (
                    <div style={{display: 'flex',flexDirection: 'row-reverse',justifyContent: 'space-around'}}>
                         <Stack direction="row" spacing={4}>
                            {book.status === 'Available' && book.borrowRequest === false ? (
                                <Button variant="contained" onClick={() => handleBorrow(book,user)}>
                                    Borrow
                                </Button>
                                ) : <Button variant="contained" disabled>
                                    Borrow
                                </Button>}
                            {book.status === 'Not Available'  && user === book.borrowedBy && book.returnRequest === false? (
                                <Button variant="contained"  onClick={() => handleReturn(book,user)}>
                                    Return
                                </Button>
                                ) : <Button variant="contained" disabled >
                                    Return
                                </Button>}
                        </Stack>
                    </div>
                )}
            </Item>
          </Grid>
        ))}
        </Grid>
        </Box>
    )
}
  export default BookList;