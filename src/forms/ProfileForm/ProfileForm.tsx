import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { GenderEnum } from "../../models/enums/GenderEnum";
import styles from "./ProfileForm.module.scss";
import { profileFormSchema } from "./ProfileFormSchema";

export const ProfileForm = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
    resolver: yupResolver(profileFormSchema),
  });
  const { errors } = formState;
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <Input
        {...register("firstName")}
        label={"First Name"}
        className={styles.inputWrapper}
      />
      <div className={styles.errorMessage}>{errors.firstName?.message}</div>
      <span className={styles.inputLine}>
        <label>Gender Selection</label>
        <select {...register("gender")}>
          <option value={GenderEnum.female}>female</option>
          <option value={GenderEnum.female}>male</option>
        </select>
      </span>
      <div className={styles.errorMessage}>{errors.gender?.message}</div>
      <Input
        {...register("website")}
        label={"Website"}
        className={styles.inputWrapper}
      />
      <div className={styles.errorMessage}>{errors.website?.message}</div>
      <input type="submit" />
    </form>
  );
};
