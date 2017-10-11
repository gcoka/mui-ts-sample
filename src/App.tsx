import * as React from 'react';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles, WithStyles } from 'material-ui/styles';

import RaisedButtonsSample from './components/RaisedButtonsSample';

const styles = {
  box: {
    margin: 10,
    padding: 10,
    border: 'solid 1px gray',
  },
  button: {
    margin: 10,
  },
  buttonWithHover: {
    margin: 10,
    // hoverも記述できる
    '&:hover': {
      backgroundColor: '#ff0000',
    }
  },
};

type ClassNames = keyof typeof styles;

interface FlatButtonsProps {
  onClick: () => void;
}

const FlatButtonsSample = withStyles(styles)<FlatButtonsProps>(
  (props: FlatButtonsProps & WithStyles<ClassNames>) => {
    const classes = props.classes;
    return (
      <div className={classes.box}>
        {/* クリックイベントの処理はこんな感じ */}
        <Button onClick={props.onClick} className={classes.button}>Default</Button>
        <Button color="primary" className={classes.buttonWithHover}>Primary</Button>
        <Button color="accent"><DeleteIcon />削除</Button>
      </div>
    );
  }
);

class App extends React.Component {
  handleClick = () => {
    alert('Clicked!');
  }

  render() {
    return (
      <div>

        <FlatButtonsSample onClick={this.handleClick} />
        <RaisedButtonsSample onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
