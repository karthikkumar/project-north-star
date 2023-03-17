import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.titleAndLogo}>
          <div className={styles.title}>
            <span className={styles.titlePrefix}>Project</span>
            <h1 className={styles.title}>north star</h1>
          </div>
          <Image
            src="/images/star.svg"
            alt="logo"
            width={64}
            height={64}
            className={styles.logo}
          />
        </div>

        <div className={styles.message}>
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            Chart your career path with confidence
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            By harnessing the power of data driven insights and personalized
            guidance, our platform maps out potential career trajectories
            tailored to your ambition, interests and skills.
          </Typography>
        </div>

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
      </main>
    </div>
  );
}
