import React from "react";
import TextField from "@material-ui/core/TextField";
import EditChart  from "../components/EditChart";
import "../App.css";
import Fab from "@material-ui/core/Fab";
import { useFormik } from "formik";
import * as yup from "yup";

/**Form validation */
export const formValidationSchema = yup.object({
  fname: yup
    .string()
    .matches(/^[a-zA-Z]*$/, "Name should be only alphabets")
    .required("Required"),
  age: yup
    .number()
    .required("Required")
    .positive("Must be a positive number")
    .integer("Must be an integer"),
  height: yup
    .number()
    .required("Required")
    .positive("Must be a positive number"),

  weight: yup
    .number()
    .required("Required")
    .positive("Must be a positive number"),
});
/** Initial form component with three fields name, age, ht in cm, wt in kg*/
const Healthchartform = () => {
  /**Array destructuring of useFormik  which have reset ,error etc*/
  const {
    resetForm,
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      fname: "",
      age: "",
      height: "",
      weight: "",
      bmi:"",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      calculateBmi(values);
      console.log("Values on Submit", values);
      saveData(values);
    },
  });
// calling POST Api method
const saveData = () => {
  fetch("https://622733532dfa5240181721bf.mockapi.io/healthChart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
}
  //  method for calculating BMI [weight (kg) / height (cm) / height (cm)] x 10,000
  const calculateBmi = (values) => {
    let answer = (parseInt(values.weight) / (parseInt(values.height) / 100) ** 2).toFixed(2);
    values['bmi'] = answer;
    checkStatus(answer);
    return answer;
  };
  let message;
  let color;
  /**Based on the BMI calculation Value Will Display message to user */
  const checkStatus = (answer) => {
    if (answer >= 30) {
      message = "OBESE - Start Healthy Lifestyle 🚴‍♀️ 🏋️‍♀️ 🎾 !!!";
      color = "red";
    } else if (answer >= 25 && answer < 30) {
      message = "OVER-WEIGHT - Start Healthy Lifestyle 🚴‍♀️ 🏋️‍♀️ 🎾 !!!";
      color = "yelow";
    } else if (answer >= 18.5 && answer < 25) {
      message = "NORMAL - Configurations 🏆🏆🏆!!!";
      color = "green";
    } else {
      message = "UNDER-WEIGHT - Start Healthy Lifestyle 🚴‍♀️ 🏋️‍♀️ 🎾!!!";
      color = "red";
    }
    return message;
  };

  return (
    <div>
      <form className="health-chart" onSubmit={handleSubmit}>
        <TextField
          id="fname"
          name="fname"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fname}
          error={errors.fname && touched.fname}
          helperText={errors.fname && touched.fname ? errors.fname : ""}
        />
        <br />
        <TextField
          id="age"
          name="age"
          label="Age"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          error={errors.age && touched.age}
          helperText={errors.age && touched.age ? errors.age : ""}
        />
        <br />
        <TextField
          id="outlined-basic"
          name="height"
          label="Height in cm"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.height}
          error={errors.height && touched.height}
          helperText={errors.height && touched.height ? errors.height : ""}
        />
        <br />
        <TextField
          id="outlined-basic"
          name="weight"
          label="Weight in kg"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.weight}
          error={errors.weight && touched.weight}
          helperText={errors.weight && touched.weight ? errors.weight : ""}
        />
        <br />

        <h1 className="bmi-chart">
          {values.height && values.weight ? <span>BMI - </span> : ""}
          {values && values.height && values.weight
            ? calculateBmi(values)
            : ""}
        </h1>
        <h2 style={{ color: color }}>{message}</h2>
        <div className="home-css">
          <Fab
            color="primary"
            aria-label="add"
            type="submit"
            disabled={!(isValid && dirty)}
          >
            Save
           
          </Fab>
          <Fab color="primary" aria-label="add" onClick={resetForm}>
            Reset
          </Fab>
          <EditChart />
        </div>
      </form>
    </div>
  );
};

export default Healthchartform;
