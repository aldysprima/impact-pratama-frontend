import {
  Modal,
  Box,
  Typography,
  Button,
  styled,
  ButtonGroup,
  Stack,
} from "@mui/material";

// Custom Component
const CustomModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledModal = ({ open, onClose, onCancel, onConfirm, action, value }) => {
  return (
    <CustomModal open={open} onClose={onClose}>
      <Box height="250px" width="350px" bgcolor="white" borderRadius={5} p={3}>
        <Stack alignItems="center" spacing="50px">
          <Typography id="modal-modal-title" variant="h4" fontWeight="bold">
            Hold On
          </Typography>
          <Typography id="modal-modal-title" variant="p">
            Are you sure want to {action} <strong>{value}</strong> ?
          </Typography>
          <ButtonGroup>
            <Button onClick={onConfirm}>Yes</Button>
            <Button onClick={onCancel} color="error">
              No
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </CustomModal>
  );
};

export default StyledModal;
