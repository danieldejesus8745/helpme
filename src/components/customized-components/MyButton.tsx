import { Button, makeStyles } from "@mui/material";
import '../styles/general.css';

const useStyles = makeStyles({
  teste: {
    backgroundColor: 'green'
  }
});

function MyButton() {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.teste}>Click Me</Button>
  );
}

export default MyButton;
