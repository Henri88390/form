import * as yup from "yup";
import { GenderEnum } from "../../models/enums/GenderEnum";

export const profileFormSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "Must contains at least 2 characters")
    .required("Required"),
  gender: yup
    .mixed<GenderEnum>()
    .oneOf(Object.values(GenderEnum), "This gender doesn't exist"),
  website: yup.string().url().optional(),
});
