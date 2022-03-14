import React, { useState } from "react";

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
  const [content, setContent] = useState<string>("");
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [priority, setPriority] = useState<number | null>(1);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleDeadlineChange = (value: Date | null) => {
    setDeadline(value);
  };

  const handlePriorityChange = (e: React.SyntheticEvent<Element, Event>, value: number | null) => {
    setPriority(value);
  };

  return (
    <DialogContent>
      <DialogContentText>登録するタスクの情報を入力してください．</DialogContentText>
      <Stack spacing={2}>
        <TextField
          label="内容"
          value={content}
          onChange={handleContentChange}
          margin="normal"
          placeholder="内容を入力..."
          fullWidth
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            label="期限"
            value={deadline}
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
              value={priority}
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