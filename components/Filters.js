import { Button } from "@mui/material";
import Field from "../components/Field";
import { useForm } from "react-hook-form";
import { useStateContext } from "../state";
import {
  JobTitleOptions,
  CourseTitleOptions,
  SkillsOptions,
  UniversityOptions,
  GeographyOptions,
} from "../constants";

import styles from "../styles/Filters.module.css";

export default function Filters() {
  const { handleSubmit, control } = useForm();
  const { userInputs, setUserInputs } = useStateContext();
  const onSubmit = (data) => {
    console.log({ data });
    setUserInputs(data);
  };
  return (
    <form className={styles.filtersRow}>
      <Field
        name="job-title"
        options={JobTitleOptions}
        label="Job title"
        control={control}
        defaultValue={userInputs["job-title"]?.value}
      />
      <Field
        name="course-title"
        options={CourseTitleOptions}
        label="Degree / course title"
        control={control}
        defaultValue={userInputs["course-title"]?.value}
      />
      <Field
        name="skills"
        options={SkillsOptions}
        label="Skills"
        control={control}
        multiple
        defaultValue={userInputs["skills"]?.value}
      />
      <Field
        name="university"
        options={UniversityOptions}
        label="University"
        control={control}
        defaultValue={userInputs["university"]?.value}
      />
      <Field
        name="geography"
        options={GeographyOptions}
        label="Geography"
        control={control}
        defaultValue={userInputs["geography"]?.value}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "max-content",
        }}
        onClick={handleSubmit(onSubmit)}
      >
        Save
      </Button>
    </form>
  );
}
