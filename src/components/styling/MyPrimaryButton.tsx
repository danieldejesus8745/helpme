import { Button } from "@mui/material";
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  padding: '15px',
  borderRadius: '10px'
});

function MyPrimaryButton(props: MyPrimaryButtonProps) {
  const { value, type } = props;
  return (
    <StyledButton
      variant="contained"
      type={type}
    >
      {value}
    </StyledButton>
  );
}

interface MyPrimaryButtonProps {
  value: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export default MyPrimaryButton;
