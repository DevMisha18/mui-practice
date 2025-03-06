import { Card, Typography } from "@mui/material";

export default function App() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        p: 2,
        py: 1,
      }}
    >
      <Typography variant="h3">Hello</Typography>
    </Card>
  );
}
