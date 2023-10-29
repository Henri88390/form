import { SubmitHandler, useForm } from "react-hook-form";
import { GenderEnum } from "../../models/enums/GenderEnum";
import styles from "./ProfileForm.module.scss";

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

export const ProfileForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <span className={styles.inputLine}>
        <label>First Name</label>
        <input {...register("firstName")} />
      </span>
      <span className={styles.inputLine}>
        <label>Gender Selection</label>
        <select {...register("gender")}>
          <option value={GenderEnum.female}>female</option>
          <option value={GenderEnum.female}>male</option>
        </select>
      </span>
      <input type="submit" />
    </form>
  );
};
