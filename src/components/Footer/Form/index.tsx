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
type Inputs = {
  name: string;
  email: string;
  gender: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total } = useSelector((state: RootState) => state.cart);

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
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={{
              xs: "100%",
              sm: 300,
              md: 400,
              lg: 440,
              xl: 700,
            }}
          >
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
            width={{
              xs: "100%",
              sm: 260,
              md: 300,
              lg: 350,
              xl: 490,
            }}
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
            width={{
              xs: "100%",
              sm: 200,
              md: 150,
              lg: 200,
              xl: 300,
            }}
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
          <Button
            sx={{ background: "orange" }}
            variant="contained"
            type="submit"
          >
            Finalizar compra
          </Button>
        </Box>
      </form>
    </Box>
  );
}
