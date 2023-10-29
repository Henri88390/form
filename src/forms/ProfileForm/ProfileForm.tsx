import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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
      <span className={styles.inputLine}>
        <label>First Name</label>
        <input {...register("firstName")} />
      </span>
      <div className={styles.errorMessage}>{errors.firstName?.message}</div>
      <span className={styles.inputLine}>
        <label>Gender Selection</label>
        <select {...register("gender")}>
          <option value={GenderEnum.female}>female</option>
          <option value={GenderEnum.female}>male</option>
        </select>
      </span>
      <div className={styles.errorMessage}>{errors.gender?.message}</div>
      <span className={styles.inputLine}>
        <label>Website</label>
        <input {...register("website")} />
      </span>
      <div className={styles.errorMessage}>{errors.website?.message}</div>
      <input type="submit" />
    </form>
  );
};
