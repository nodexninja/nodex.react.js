import React from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup'
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
var userAnswer = undefined 

function App() {
  const [value, setValue] = React.useState('a');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  function selectAnswer(value) {
    if (userAnswer !== value) {
      userAnswer = value
      console.log(userAnswer)
    }
  }
  const quiz = <div id="quiz">
        <FormControl component="fieldset">
          <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange} onClick={(e) => selectAnswer(e.target.value)}>
            <FormControlLabel value="a" control={<Radio />} label="Option 1" />
            <FormControlLabel value="b" control={<Radio />} label="Option 2" />
            <FormControlLabel value="c" control={<Radio />} label="Option 3" />
            <FormControlLabel value="d" control={<Radio />} label="Option 4" />
          </RadioGroup>
        </FormControl>
        <Button className="adjust-child"color="primary" variant="contained" disableElevation>
          Submit
        </Button>
      </div>
  return (
    <React.Fragment>
      <nav>
        <div class="home">
          Nodex Ninja
        </div>
      </nav>
      <section class="nopad">
        <div class="splash content">
          <div class="hooker">Coding Forever</div>
          <p>
            Ninja Spect helps students achieve mastery in a range of subjects and become a knowledge ninja! View the world with new eyes and explore various courses and games.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;