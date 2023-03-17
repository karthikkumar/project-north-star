import { Box, Paper, Typography } from "@mui/material";
import Filters from "../components/Filters";
import TreeDiagram from "../components/TreeDiagram";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        padding: "1rem",
        display: "grid",
        gridTemplateRows: "max-content 1fr",
        gridTemplateColumns: "1fr",
        backgroundColor: "secondary.main",
      }}
    >
      <div>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          Explore career paths
        </Typography>
        <Filters />
      </div>
      <Paper
        elevation={1}
        sx={{
          backgroundColor: "#f0f0f0",
          height: "100%",
          padding: "1rem",
        }}
      >
        <TreeDiagram />
      </Paper>
    </Box>
  );
}
