import { useFormik } from "formik";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import schema from "./schema";
import InputField from "./components/InputField";
import { inputs } from "./constants";


const App = () => {
  //! Formik in bütün özelliklerini kullanmamızı sağlayan hook
  // form gönderildiğinde  FormData yöntemi ile verilere ulaşabiliyorduk. Ama hata yönetimi yapmıyorduk. Hata yönetimi yapmak istersek kodları bizim yazdığımız senaryoda  çok fazla kod tekrarı olacağı için formik & yup kütüphaneleri kullanarak form oluşturacağız

  const formik = useFormik({
    //state ti tutulacak olan verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: schema,

    onSubmit: (values) => {
      alert("Form gönderildi" + JSON.stringify(values));
    },
  });

  return (
    <div className="vh-100 vw-100">
      <div className="container py-5">
        <h2 className="text-center">Coninmania</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 mt-5"
        >
          {inputs.map((props) => (<InputField formik={formik} {...props} />))}
          
          <button className="my-5">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default App;
