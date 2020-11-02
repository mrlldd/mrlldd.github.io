import React from 'react';
import './Summary.css';
import {createStyles, Paper, Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => {
        const width = theme.spacing(70);
        const height = theme.spacing(47);
        return createStyles({
            root: {
                left: `calc(50% - ${width / 2}px)`,
                top: `calc(50% - ${height / 2}px)`,
                '& > *': {
                    width: width,
                    height: height
                }
            }
        });
    }
);

const Summary: React.FC = () => {
    const styles = useStyles();
    return (
        <div className={`${styles.root} Summary`} data-testid="Summary">
            <Paper elevation={5} className="summary-paper">
            </Paper>
        </div>
    );
};

export default Summary;
