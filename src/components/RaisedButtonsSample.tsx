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

export default withStyles<{} & ClassNames>(styles)<RaisedButtonsProps>(RaisedButtonsSample);