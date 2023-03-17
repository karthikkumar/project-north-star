import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Index.module.css";
import { Box, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.titleAndLogo}>
          <div className={styles.title}>
            <span className={styles.titlePrefix}>Project</span>
            <h1 className={styles.title}>North Star</h1>
          </div>
          <Image
            src="/images/star.svg"
            alt="logo"
            width={56}
            height={56}
            className={styles.logo}
          />
        </div>

        <div className={styles.message}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "700", textAlign: "center" }}
          >
            Chart your career path with confidence
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            By harnessing the power of data driven insights and personalized
            guidance, our platform maps out potential career trajectories
            tailored to your ambition, interests and skills.
          </Typography>
        </div>
        <Image
          src="/images/banner.png"
          alt="logo"
          width={800}
          height={500}
          className={styles.banner}
        />

        <div className={styles.grid}>
          <Link href="/onboard" className={styles.card}>
            <h2>Get started &rarr;</h2>
            {/* <p>Chart your career path with confidence</p> */}
            {/* <p>
              By harnessing the power of data driven insights and personalized
              guidance, our platform maps out potential career trajectories
              tailored to your ambition, interests and skills.
            </p> */}
          </Link>
        </div>
        <div className={styles.infoPanel}>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src="/images/1.png" alt="1" width={100} height={100} />
            <div>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                Future proof career planning
              </Typography>
              <Typography variant="h7" sx={{ fontWeight: "500" }}>
                Get a head start with a personalized career vision
              </Typography>
            </div>
          </Box>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src="/images/2.png" alt="1" width={100} height={100} />
            <div>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                Find your way to the dream job
              </Typography>
              <Typography variant="h7" sx={{ fontWeight: "500" }}>
                Explore potential career trajectories and explore the right next
                move
              </Typography>
            </div>
          </Box>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src="/images/3.png" alt="1" width={100} height={100} />
            <div>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                Find your guide
              </Typography>
              <Typography variant="h7" sx={{ fontWeight: "500" }}>
                Connect with people who have taken similar paths in your network
              </Typography>
            </div>
          </Box>
        </div>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: "#72ADAD",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "85%",
            color: "#fff",
            fontWeight: "400",
            marginTop: "3rem",
          }}
        >
          <Typography variant="h5" sx={{ padding: "1rem", fontWeight: "700" }}>
            We heard you
          </Typography>
          <div className={styles.footer}>
            <Typography variant="h6" sx={{ width: "25%", textAlign: "right" }}>
              “ I know I want to be an AI ethics expert, but do not know how to
              get there”
              <br />
              Ana, Student
            </Typography>
            <Typography variant="h6" sx={{ width: "25%", textAlign: "right" }}>
              “ I want to know what skills I need in order to become a VP ”
              <br />
              Scott, Data Analyst
            </Typography>
            <Typography variant="h6" sx={{ width: "25%", textAlign: "right" }}>
              “ Who would be the right mentor for me in my network? ”<br />
              Maureen, Sr Engineer
            </Typography>
          </div>
        </Paper>
      </main>
    </div>
  );
}
