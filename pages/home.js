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
                    <Chip label="SQL" />
                    <Chip label="Python" />
                    <Chip label="Power BI" />
                    <Chip label="Apache Kafka" />
                    <Chip label="TensorFlow" />
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
                  <Typography>$50K - $100K</Typography>
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
                    <li>
                      <a
                        href="https://www.linkedin.com/in/benjamin-rollins-bbb2a872"
                        target="_blank"
                        style={{ textDecoration: "underline" }}
                      >
                        Benjamin Rollins
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://in.linkedin.com/in/data-scientist-6616b616b"
                        target="_blank"
                        style={{ textDecoration: "underline" }}
                      >
                        Hossein Zahed
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ca.linkedin.com/in/data-scientist-9659071a7"
                        target="_blank"
                        style={{ textDecoration: "underline" }}
                      >
                        Victor Grazon
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ca.linkedin.com/in/data-scientist-2271391b8"
                        target="_blank"
                        style={{ textDecoration: "underline" }}
                      >
                        Lok Yi Lam
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/brianballer"
                        target="_blank"
                        style={{ textDecoration: "underline" }}
                      >
                        Brian Baller
                      </a>
                    </li>
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
                    <li>University of California Berkeley</li>
                    <li>Massachusetts Institute of Technology</li>
                    <li>Carnegie Mellon University</li>
                    <li>Georgia Institute of Technology</li>
                    <li>Stanford University</li>
                    <li>University of Washington</li>
                    <li>Cornell University</li>
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
                    <li>Google</li>
                    <li>Facebook</li>
                    <li>Amazon</li>
                    <li>Microsoft</li>
                    <li>Apple</li>
                    <li>IBM</li>
                    <li>Oracle</li>
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
