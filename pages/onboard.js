import { Box, Container, Button, TextField, Typography } from "@mui/material";
import Field from "../components/Field";
import { useForm, Controller } from "react-hook-form";
import { useStateContext } from "../state";
import { useRouter } from "next/router";
import {
  JobTitleOptions,
  CourseTitleOptions,
  SkillsOptions,
  UniversityOptions,
  GeographyOptions,
} from "../constants";

export default function Onboard() {
  const { handleSubmit, control } = useForm();
  const { setUserInputs } = useStateContext();
  const router = useRouter();
  const onSubmit = (data) => {
    setUserInputs(data);
    router.push("/home");
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "500" }}>
          I am interested to explore career paths for
        </Typography>
        <br />
        <form>
          <Field
            name="job-title"
            options={JobTitleOptions}
            label="Job title"
            control={control}
            important
          />
          <Field
            name="course-title"
            options={CourseTitleOptions}
            label="Degree / course title"
            control={control}
            important
          />
          <Field
            name="skills"
            options={SkillsOptions}
            label="Skills"
            control={control}
            multiple
            important
          />
          <Field
            name="university"
            options={UniversityOptions}
            label="University"
            control={control}
            important
          />
          <Field
            name="geography"
            options={GeographyOptions}
            label="Geography"
            control={control}
            important
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange } }) => (
              <TextField
                variant="outlined"
                helperText="We'll never share your email."
                label="Email"
                sx={{ mt: "1rem", mb: "1rem", width: "100%" }}
                onChange={onChange}
              />
            )}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "max-content",
              marginTop: "1rem",
            }}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
}
