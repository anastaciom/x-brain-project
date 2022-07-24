import { Box, Button, TextField, Typography } from "@mui/material";
import { IData } from "../../../data/types";
import { formatThePrice } from "../../../utils/formatThePrice";
import RemoveIcon from "../../../assets/icons/baseline-remove-24px.svg";
import AddIcon from "../../../assets/icons/baseline-add-24px.svg";
import { boxStyles, inputNameStyles } from "./additionalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTheTotalPurchase,
  decrementAmountOfProduct,
  incrementAmountOfProduct,
} from "../../../redux/cartReducer";
import { RootState } from "../../../redux/store";
import { toast } from "react-toastify";
interface CardDetailsHoverProps {
  product: IData;
}

export default function CardDetailsHover({ product }: CardDetailsHoverProps) {
  const dispatch = useDispatch();
  const { cardsItem } = useSelector((state: RootState) => state.cart);
  const cart = cardsItem.find((item) => item.id === product.id);

  function handlePurchaseCalculation() {
    if (product.amount === 0) {
      return toast.error("Antes de adicionar, selecione a quantidade.");
    }
    if (cart?.amount === 0) {
      dispatch(calculateTheTotalPurchase());
      return toast.success("Produto removido do carrinho com sucesso!");
    }
    dispatch(calculateTheTotalPurchase());
    return toast.success("Produto adicionado no carrinho com sucesso!");
  }
  return (
    <Box
      width={"100%"}
      height={"100%"}
      position={"absolute"}
      display="flex"
      alignItems={"center"}
      justifyContent={"flex-end"}
      flexDirection="column"
    >
      <Box
        width={"100%"}
        height={"70%"}
        display="flex"
        alignItems={"flex-start"}
        justifyContent="center"
        p={1.5}
        flexDirection="column"
        sx={boxStyles}
      >
        <Box>
          <Typography
            gutterBottom
            variant="body1"
            color={"GrayText"}
            component="div"
            fontSize={15}
          >
            {product.productTitle}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={"bold"}
            fontSize={18}
          >
            {formatThePrice(product.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={12}>
            {product.productDescription.split(" - ")[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={12}>
            {product.productDescription.split(" - ")[1]}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          mt={1}
          gap={2}
        >
          <Box
            padding={0.5}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"gray"}
            borderRadius={"50%"}
            onClick={() => dispatch(decrementAmountOfProduct(product))}
          >
            <img src={RemoveIcon} alt="remover item" />
          </Box>

          <TextField
            value={cart ? cart?.amount : product.amount}
            type={"number"}
            sx={inputNameStyles}
          />

          <Box
            padding={0.5}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"gray"}
            borderRadius={"50%"}
            onClick={() => dispatch(incrementAmountOfProduct(product))}
          >
            <img src={AddIcon} alt="adicionar item" />
          </Box>
        </Box>
        <Box
          width={"100%"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          mt={2}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={() => handlePurchaseCalculation()}
          >
            Adicionar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
