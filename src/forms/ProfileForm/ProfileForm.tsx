import { zodResolver } from "@hookform/resolvers/zod";
import { MenuItem, Select } from "@mui/material";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { CustomSelect } from "../../components/Select/Select";
import { CitiesEnum } from "../../models/enums/CitiesEnum";
import { CountriesEnum } from "../../models/enums/CountriesEnum";
import { GenderEnum } from "../../models/enums/GenderEnum";
import styles from "./ProfileForm.module.scss";
import { ValidationSchema, profileZodSchema } from "./ProfileFormSchema";

export const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    // defaultValues: { city: CitiesEnum.krakow },
    // resolver: yupResolver(profileFormSchema),
    resolver: zodResolver(profileZodSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  const options = Object.values(CitiesEnum);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <Logo />
      <Input
        {...register("firstName")}
        label={"First Name"}
        className={styles.inputWrapper}
      />
      <div className={styles.errorMessage}>{errors.firstName?.message}</div>
      <CustomSelect
        {...register("gender")}
        label={"Gender Selection"}
        className={styles.inputWrapper}
        options={[
          { value: "test", label: "test" } as HTMLOptionElement,
          { value: GenderEnum.male, label: "male" } as HTMLOptionElement,
          { value: GenderEnum.female, label: "female" } as HTMLOptionElement,
        ]}
      />
      <div className={styles.errorMessage}>{errors.gender?.message}</div>
      <Select {...register("city")}>
        <MenuItem value="xd">
          <em>xd</em>
        </MenuItem>
        <MenuItem value="">
          <em>empty</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem value={option} key={index}>
            Option: {option}
          </MenuItem>
        ))}
      </Select>
      <div className={styles.errorMessage}>{errors.city?.message}</div>
      <CustomSelect
        {...register("countries")}
        label={"Countries"}
        className={styles.inputWrapper}
        options={[
          { value: CountriesEnum.france, label: "France" } as HTMLOptionElement,
          { value: CountriesEnum.poland, label: "Poland" } as HTMLOptionElement,
        ]}
      />
      <div className={styles.errorMessage}>{errors.countries?.message}</div>
      <Input
        {...register("website")}
        label={"Website"}
        className={styles.inputWrapper}
      />
      <div className={styles.errorMessage}>{errors.website?.message}</div>
      <input type="submit" className={styles.submitButton} />
    </form>
  );
};
