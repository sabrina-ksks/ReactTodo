import React from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const RegisterDialogContent: React.FC = () => {
  return(
    <DialogContent>
      <DialogContentText>登録するタスクの情報を入力してください．</DialogContentText>
    </DialogContent>
  );
}

export default RegisterDialogContent;