import { useState } from 'react';
import { Box, Typography, TextField, Stack, Button } from '@mui/material';
import ProjectCard from './components/ProjectCard';
const HomePage = () => {
  const [textInput, setTextInput] = useState('');
  const handleTextInputChange = (e: any) => {
    setTextInput(e.target.value);
  };
  return (
    <div className="home_page">
      <Box sx={{ ml: '5rem', mr: '5rem' }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Project Issue Tracker
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Stack spacing={2}>
            <Typography variant="h5">Add new issue</Typography>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={handleTextInputChange}
              value={textInput}
            />
            <Button variant="contained">Submit</Button>
          </Stack>
        </Box>
        <Box sx={{ ml: '1rem', mt: '3rem' }}>
          <Typography variant="h5">Opened issue</Typography>
          <ProjectCard issueTitle="Bug: Issue 1" />
          <ProjectCard issueTitle="Bug: Issue 2" />
        </Box>
      </Box>
    </div>
  );
};
export default HomePage;
