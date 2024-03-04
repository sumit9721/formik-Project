import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  setFirstname,
  setLastname,
  setMobileNo,
} from "../Redux/Slice/user.slice";
import UserTable from "./UserTable";

const SignupForm = () => {
  const dispatch = useDispatch();
  const [submittedData, setSubmittedData] = useState([]);
  const [formDataToEdit, setFormDataToEdit] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNo: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      mobileNo: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be at least 10 digits")
        .max(15, "Must be 15 digits or less")
        .required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      dispatch(setFirstname(values.firstName));
      dispatch(setLastname(values.lastName));
      dispatch(setMobileNo(values.mobileNo));
      if (formDataToEdit !== null) {
        const updatedData = submittedData.map((data, index) =>
          index === formDataToEdit.index ? values : data
        );
        setSubmittedData(updatedData);
        setFormDataToEdit(null);
      } else {
        setSubmittedData((prevData) => [...prevData, values]);
      }
      resetForm();
    },
  });

  const handleEdit = (index) => {
    const formDataToEdit = submittedData[index];
    formik.setValues(formDataToEdit);
    setFormDataToEdit({ index });
  };

  const handleDelete = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="mobileNo">Mobile No</label>
          <input
            id="mobileNo"
            name="mobileNo"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobileNo}
          />
          {formik.touched.mobileNo && formik.errors.mobileNo ? (
            <div>{formik.errors.mobileNo}</div>
          ) : null}
        </div>
        <button type="submit">{formDataToEdit ? "Update" : "Submit"}</button>
      </form>
      <UserTable
        formDataList={submittedData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default SignupForm;
