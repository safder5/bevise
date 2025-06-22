import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Stack,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.100",
        py: 4,
        mt: 8,
        borderTop: 1,
        borderColor: "grey.200",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Bevise. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <MuiLink href="/privacy" color="inherit" underline="hover">
              Privacy Policy
            </MuiLink>
            <MuiLink href="/terms" color="inherit" underline="hover">
              Terms of Service
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
