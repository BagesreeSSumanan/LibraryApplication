import * as React from 'react';
import {
  Box, Grid, Typography, List, ListItem, Avatar, Button, Container
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useBooks } from './BooksContext';
function Borrowlist(){
const {  BorrowrequestedBooks, allbooks,setBooks,setFilteredBooks} = useBooks();

    const handleAccept = (id) => {
        console.log('Accepted request ID:', id);
        const book = allbooks.find(b => b.id === id);
       
        const updatedBook = {
            ...book,
            borrowedBy: book.borrowRequestby,
            borrowRequest: null,
            dueDate: null,
            status: 'Not Available',
        };

        const updatedBooks = allbooks.map(b =>
            b.id === id ? updatedBook : b
        );

        setBooks(updatedBooks);
        setFilteredBooks(updatedBooks); 
    };
  return (
    <Container>
      <Box sx={{ flexGrow: 1, maxWidth: 752, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Return Requests
        </Typography>
        <List>
          {BorrowrequestedBooks.map((req) => (
            <ListItem key={req.id} sx={{ display: 'flex', alignItems: 'center' }}>
           
              <Avatar sx={{ mr: 2, bgcolor: 'success.main' }}>
                <CheckCircleIcon />
              </Avatar>

            
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1">{req.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Borrowed by: {req.borrowedBy}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={() => handleAccept(req.id)}
              >
                Accept
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
export default Borrowlist;