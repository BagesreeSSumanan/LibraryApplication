import { useState } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import {  Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function BookList(){
    const [books, setBooks] = useState([
        { id: 1, title: 'Harry Potter', author: 'J. K. Rowling', status: 'Available', borrowedBy: null },
        { id: 2, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', status: 'Borrowed', borrowedBy: 'member1' },
        { id: 3, title: 'crime and punishment', author: 'Fyodor Dostoevsky', status: 'Available', borrowedBy: null },
    ]);

    function handlesearch(){
        
    }
    return(
        <Box sx={{ flexGrow: 1 , marginTop:4}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {books.map((book, index) => (
          <Grid item xs={2} sm={4} md={4} key={book.id}>
            <Item>
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="body2">Author: {book.author}</Typography>
              <Typography variant="body2">Status: {book.status}</Typography>
            </Item>
          </Grid>
        ))}
        </Grid>
        </Box>
    )
}
  export default BookList