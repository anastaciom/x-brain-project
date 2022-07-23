import { Box, Button, TextField, Typography } from "@mui/material";
import { IData } from "../../../data/types";
import { formatThePrice } from "../../../utils/formatThePrice";
import RemoveIcon from "../../../assets/icons/baseline-remove-24px.svg";
import AddIcon from "../../../assets/icons/baseline-add-24px.svg";
import { boxStyles, inputNameStyles } from "./additionalStyles";
interface CardDetailsHoverProps {
  product: IData;
}

export default function CardDetailsHover({ product }: CardDetailsHoverProps) {
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
          >
            <img src={RemoveIcon} alt="remover item" />
          </Box>

          <TextField value={3} type={"number"} sx={inputNameStyles} />

          <Box
            padding={0.5}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"gray"}
            borderRadius={"50%"}
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
          <Button variant="contained" fullWidth>
            Adicionar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
