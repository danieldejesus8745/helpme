import MyPrimaryButton from "./MyPrimaryButton";

function MyPrimarySubmitButton(props: MyPrimarySubmitButtonProps) {
  const { value } = props;

  return (
    <MyPrimaryButton value={value} type="submit" />
  );
}

interface MyPrimarySubmitButtonProps {
  value: string;
}

export default MyPrimarySubmitButton;
