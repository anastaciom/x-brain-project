import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  sexo: string;
};
export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Box py={8}>
      <Typography variant="h5" color={"#333"} pb={1}>
        Dados do cliente
      </Typography>
      <Divider />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <select {...register("sexo", { required: true })} defaultValue="">
          <option value="" disabled>
            Selecione
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        {errors.sexo && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </Box>
  );
}
