import { Button } from "@mui/material";

interface PrimaryButtonProps {
  [x: string]: any;
  btnName: string;
}

export default function PrimaryButton({
  btnName,
  ...rest
}: PrimaryButtonProps) {
  return (
    <Button sx={{ background: "orange" }} variant="contained" {...rest}>
      {btnName}
    </Button>
  );
}
