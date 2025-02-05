"use client";
import { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

export default function SimpleModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            color: "text.primary",
          }}
        >
          <Typography variant="h6" component="h2">
            Simple Modal
          </Typography>
          <Typography sx={{ mt: 2 }}>
            This is a basic Material UI modal.
          </Typography>
          <Button sx={{ mt: 2 }} variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
