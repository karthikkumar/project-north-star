import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Filters from "../components/Filters";
import TreeDiagram from "../components/TreeDiagram";
import { useStateContext } from "../state";
import { Defaults } from "../constants";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { userInputs, selectedNode } = useStateContext();
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
      <div className={styles.canvasAndDetails}>
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
        {selectedNode?.name && (
          <div className={styles.details}>
            <Paper elevation={1} sx={{ width: "100%", height: "100%" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "600", padding: "1rem" }}
              >
                {selectedNode?.name}
              </Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.skillTags}>
                    {(selectedNode?.skills || Defaults.skills).map((skill) => (
                      <Chip label={skill} key={skill} />
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Salary range</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {selectedNode?.salaryRange || Defaults.salaryRange}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Mentors</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <ul>
                    {(selectedNode?.mentors || Defaults.mentors)?.map(
                      ({ name, linkedIn }) => {
                        return (
                          <li key={name + "-" + linkedIn}>
                            <a
                              href={linkedIn}
                              target="_blank"
                              style={{ textDecoration: "underline" }}
                            >
                              {name}
                            </a>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Universities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {(selectedNode?.universities || Defaults.universities).map(
                      (university) => (
                        <li key={university}>{university}</li>
                      )
                    )}
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Top employers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {(selectedNode?.employers || Defaults.employers).map(
                      (employer) => (
                        <li key={employer}>{employer}</li>
                      )
                    )}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </div>
        )}
      </div>
    </Box>
  );
}
