//! Validasyon Seması yup kütüphanesi kullanarak bir ddoğrulama şeması oluşturabiliriz.
// Şemalar nesnelerin yapısını ve bu nesnelerin her bir alanı için geçerli doğrulama kurallarını tanıması

import * as yup from "yup";
// metin içerisnde en az
// 1 büyük harf
// 1 küçük harf
// 1 rakam
// 1 özel karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

//* yup.object().shape() ifadesi formun state ini tuttuğumuz nesnenin her bir alanının geçerliolöası için gerekli koşulları ifade etmesidir
const schema = yup.object().shape({
  //* email alanının geçerli olması için gerekli koşullar
  email: yup
    .string()
    .required("Email alanı zorunludur..!")
    .email("Email geçerli formatta değil..!"),

  //* age alanının geçerli olması için gerekli koşullar
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz..!")
    .max(100, "Yaş 100'den büyük olamaz..!")
    .integer("Yaş tam sayı olmalıdır..!")
    .required("Yaş alanı zorunludur..!"),

  //* şifre alanının geçerli olması için gerekli koşullar
  password: yup
    .string()
    .min(5, "Şifre En Az 5 Karakter Olmalıdır..!")
    //* matches() metodu girilen metin regex kurallarına uyuyor mu kontrol eder
    .matches(regex, "Şifre yeterince güçlü değil..!")
    .required("Şifre alanı zorunludur..!"),

  //* şifre onay alanının geçerli olması için gerekli koşullar
  // oneOf: kontrol ettiğimiz metin verilen dizi içerisindeki  değerlerden biriyle eşleşiyor mu kontrol eder
  // ref: fraklı bir inputtaki veriyi almaya yarar
  passwordConfirm: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Doğrulama şifresi, asıl şifre ile eşleşmiyor."
    )
    .required("Lütfen şifrenizi doğrulayınız..!"),
});

export default schema;
