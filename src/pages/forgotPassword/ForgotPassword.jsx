import React from "react";
// @mui
import { Box, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
// components

// ----------------------------------------------------------------------

const ForgotPassword = () => {
  const handleClick = () => {
    navigate("/dashboard", { replace: true });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ margin: 3 }}>
        Reset Password
      </Typography>

      <Typography variant="body2" sx={{ mb: 5, margin: 3 }}>
        Don’t have an account? {""}
        <Link variant="subtitle2" to={"/Login"}>
          Go to login
        </Link>
      </Typography>
      <Stack spacing={3} sx={{ margin: 3 }}>
        <TextField name="email" label="Email address" />
      </Stack>
      <LoadingButton
        sx={{ margin: 3, width: 300, height: 50 }}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Reset
      </LoadingButton>
    </Box>
  );
};

export default ForgotPassword;
