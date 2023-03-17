import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function Field({
  name,
  options,
  label,
  control,
  multiple,
  important = false,
  defaultValue,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormGroup
          row
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "flex-start",
            mt: "1rem",
            mb: "1rem",
          }}
        >
          <Autocomplete
            multiple={multiple}
            id={label}
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={(_, newValue) => {
              const isObj = typeof value === "object";
              onChange(
                isObj ? { ...value, value: newValue } : { value: newValue }
              );
            }}
            defaultValue={defaultValue}
          />
          {important && (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(event) => {
                    const isObj = typeof value === "object";
                    onChange(
                      isObj
                        ? { ...value, important: event.target.checked }
                        : { important: event.target.checked }
                    );
                  }}
                />
              }
              label="Important"
            />
          )}
        </FormGroup>
      )}
    />
  );
}
