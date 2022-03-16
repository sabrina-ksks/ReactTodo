import React from "react";

import { useRecoilState } from "recoil";
import { dialogContentState } from "../atoms/DialogContent";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Rating from "@mui/material/Rating";

const RegisterDialogContent: React.FC = () => {
  const [dialogContent, setDialogContent] = useRecoilState(dialogContentState);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newDialogContent = {...dialogContent};
    newDialogContent.content = e.target.value
    setDialogContent(newDialogContent);
  };

  const handleDeadlineChange = (value: Date | null) => {
    const newDialogContent = {...dialogContent};
    newDialogContent.deadline = value
    setDialogContent(newDialogContent);
  };

  const handlePriorityChange = (e: React.SyntheticEvent<Element, Event>, value: number | null) => {
    const newDialogContent = {...dialogContent};
    newDialogContent.priority = value
    setDialogContent(newDialogContent);;
  };

  return (
    <DialogContent>
      <DialogContentText>登録するタスクの情報を入力してください．</DialogContentText>
      <Stack spacing={2}>
        <TextField
          label="内容"
          value={dialogContent.content}
          onChange={handleContentChange}
          margin="normal"
          placeholder="内容を入力..."
          fullWidth
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            label="期限"
            value={dialogContent.deadline}
            onChange={handleDeadlineChange}
            inputFormat="yyyy/MM/dd HH:mm"
            mask="____/__/__ __:__"
            minDateTime={new Date()}
            ampm={false}
            minutesStep={5}
          />
        </LocalizationProvider>
        <Box>
          <Typography mt={2}>優先度</Typography>
          <Box textAlign="center">
            <Rating
              value={dialogContent.priority}
              onChange={handlePriorityChange}
              sx={{
                fontSize: "3rem"
              }}
            />
          </Box>
        </Box>
      </Stack>
    </DialogContent>
  );
}

export default RegisterDialogContent;