import {
  Container,
  Typography,
  Box,
  Avatar,
  Paper,
  Button,
} from "@mui/material";

export default function Profile() {
  // Replace with actual user data from your auth context/provider
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    avatar: "",
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Avatar sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}>
          {user.name[0]}
        </Avatar>
        <Typography variant="h5">{user.name}</Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {user.email}
        </Typography>
        <Button variant="outlined" color="primary">
          Edit Profile
        </Button>
      </Paper>
    </Container>
  );
}
