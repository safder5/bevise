import { Container, Typography, Box, Paper } from "@mui/material";

export default function Dashboard() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography>
          Here you’ll see your teams, projects, and activity overview.
        </Typography>
      </Paper>
    </Container>
  );
}
