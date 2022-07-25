import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formReducer } from "../../../redux/formReducer";
import { RootState } from "../../../redux/store";
import { formatThePrice } from "../../../utils/formatThePrice";
import PrimaryButton from "../../PrimaryButton";
import {
  inputEmailStyle,
  inputGenderStyle,
  inputNameStyle,
} from "./additionalStyles";
type Inputs = {
  name: string;
  email: string;
  gender: string;
};

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total } = useSelector((state: RootState) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(formReducer(data));
    return navigate("/checkout");
  };

  return (
    <Box mt={4} display={"flex"} justifyContent="flex-start">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display={"flex"}
          width={"100%"}
          height={"180px"}
          gap={2}
          flexWrap={"wrap"}
        >
          <Box display={"flex"} flexDirection={"column"} width={inputNameStyle}>
            <TextField
              fullWidth
              id="outlined-name"
              label="Name"
              color={errors.name && "error"}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <FormHelperText sx={{ color: "red" }}>
                *Campo obrigatório*
              </FormHelperText>
            )}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={inputEmailStyle}
          >
            <TextField
              fullWidth
              id="outlined-name"
              label="E-mail"
              color={errors.email && "error"}
              {...register("email", { required: true })}
            />

            {errors.email && (
              <FormHelperText sx={{ color: "red" }}>
                *Campo obrigatório*
              </FormHelperText>
            )}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={inputGenderStyle}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sexo"
                {...register("gender", { required: true })}
                color={errors.gender && "error"}
                sx={{ width: "100%" }}
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Feminino">Feminino</MenuItem>
              </Select>
              {errors.gender && (
                <FormHelperText sx={{ color: "red" }}>
                  *Campo obrigatório*
                </FormHelperText>
              )}
            </FormControl>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"flex-end"}
          width={"100%"}
          height={"100px"}
          flexDirection="column"
          gap={1}
          mt={{
            xs: 10,
            sm: 0,
            md: -10,
            lg: -10,
            xl: -10,
          }}
        >
          <Typography
            fontSize={{
              xs: 18,
              sm: 20,
              md: 20,
              lg: 20,
              xl: 20,
            }}
            fontWeight={"500"}
            color="#333"
          >
            Total: {formatThePrice(total)}
          </Typography>
          <PrimaryButton btnName="Finalizar compra" type="submit" />
        </Box>
      </form>
    </Box>
  );
}
