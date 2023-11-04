import * as yup from "yup";
import { nativeEnum, object, string, z } from "zod";
import { CitiesEnum } from "../../models/enums/CitiesEnum";
import { CountriesEnum } from "../../models/enums/CountriesEnum";
import { GenderEnum } from "../../models/enums/GenderEnum";

export const profileFormSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "Must contains at least 2 characters")
    .required("Required"),
  city: yup
    .mixed<CitiesEnum>()
    .oneOf(Object.values(CitiesEnum), "This city doesn't exist")
    .nonNullable()
    .required(),
  gender: yup
    .mixed<GenderEnum>()
    .oneOf(Object.values(GenderEnum), "This gender doesn't exist"),
  countries: yup.array().of(yup.mixed<CountriesEnum>()),
  website: yup.string().url().optional(),
});

export const profileZodSchema = object({
  firstName: string().min(2, {
    message: "Must contains at least 2 characters",
  }),
  city: nativeEnum(CitiesEnum, {
    errorMap: (issue, ctx) => {
      return { message: "Incorrect city" };
    },
  }),
  gender: nativeEnum(GenderEnum, {
    errorMap: (issue, ctx) => {
      return { message: "Incorrect gender" };
    },
  }),
  countries: nativeEnum(CountriesEnum, {
    errorMap: (issue, ctx) => {
      return { message: "Incorrect country" };
    },
  }),
  website: string()
    .url({
      message: "Incorrect URL",
    })
    .optional(),
});

export type ValidationSchema = z.infer<typeof profileZodSchema>;
