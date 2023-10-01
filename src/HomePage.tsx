import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/index';
import { Box, Typography, TextField, Stack, Button } from '@mui/material';
import ProjectCard from './components/ProjectCard';
import { addIssue } from './redux/IssueReducer';
const HomePage = () => {
  const dispatch = useDispatch();
  const issueList = useSelector(
    (state: RootState) => state.issue.projectIssues
  );
  const [textInput, setTextInput] = useState('');
  const handleTextInputChange = (e: any) => {
    setTextInput(e.target.value);
  };
  const handleClick = () => {
    setTextInput('');
    dispatch(addIssue(textInput));
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
            <Button variant="contained" onClick={handleClick}>
              Submit
            </Button>
          </Stack>
        </Box>
        <Box sx={{ ml: '1rem', mt: '3rem' }}>
          <Typography variant="h5">Opened issue</Typography>
          {issueList.map((issue) => {
            return <ProjectCard issueTitle={issue} />;
          })}
        </Box>
      </Box>
    </div>
  );
};
export default HomePage;
