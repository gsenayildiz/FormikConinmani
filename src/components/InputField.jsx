const InputField = ({ formik, label, name, type }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={name}
        className={`form-control ${
          formik.touched[name] && formik.errors[name] && "is-invalid"
        }`}
        type={type}
      />
      <div className="feedback">{formik.errors[name]} &nbsp;</div>
    </div>
  );
};

export default InputField;
