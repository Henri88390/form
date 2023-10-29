import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";
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
      <Select
        {...register("gender")}
        label={"Gender Selection"}
        className={styles.inputWrapper}
        options={[
          { value: GenderEnum.male, label: "male" } as HTMLOptionElement,
          { value: GenderEnum.female, label: "female" } as HTMLOptionElement,
        ]}
      />
      <div className={styles.errorMessage}>{errors.gender?.message}</div>
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
