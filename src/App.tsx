import * as React from 'react';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles, WithStyles } from 'material-ui/styles';

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

interface RaisedButtonsProps {
  onClick: () => void;
}

class RaisedButtonsSample extends React.Component<RaisedButtonsProps & WithStyles<ClassNames>, {}> {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.box}>
        <Button raised={true} onClick={this.props.onClick} className={classes.buttonWithHover}>Default</Button>
        <Button raised={true} color="primary" className={classes.button}>Primary</Button>
        <Button raised={true} color="accent" className={classes.button}><DeleteIcon />削除</Button>
      </div>
    );
  }
}

// 1ファイル内で書くためにHOCを変数に入れておく
const HocRaisedButtonsSample = withStyles(styles)<RaisedButtonsProps>(RaisedButtonsSample);

// 通常は別ファイルにするので、その場合は以下のようにexportする
// export default withStyles(styles)<RaisedButtonsProps>(RaisedButtonsSample);

// withStylesに型注釈が必要な場合は、以下のようにする
// export default withStyles<{} & ClassNames>(styles)<RaisedButtonsProps>(RaisedButtonsSample);

// そして別ファイルでimport
// import RaisedButtonsSample from "./components/RaisedButtonsSample.tsx";

class App extends React.Component {
  handleClick = () => {
    alert('Clicked!');
  }

  render() {
    return (
      <div>

        <FlatButtonsSample onClick={this.handleClick} />
        <HocRaisedButtonsSample onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
