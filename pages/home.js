import { Box, Paper, Typography } from "@mui/material";
import Filters from "../components/Filters";
import TreeDiagram from "../components/TreeDiagram";
import { useStateContext } from "../state";

export default function Home() {
  const { userInputs } = useStateContext();
  const jobTitle = userInputs["job-title"]?.value;
  const courseTitle = userInputs["course-title"]?.value;
  const university = userInputs["university"]?.value;

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
        <TreeDiagram
          jobTitle={jobTitle}
          courseTitle={courseTitle}
          university={university}
        />
      </Paper>
    </Box>
  );
}
