import * as yup from "yup";

export const wishesSchema = yup.object().shape({
  name: yup.string().required(),
  wish: yup.string().required()
});
