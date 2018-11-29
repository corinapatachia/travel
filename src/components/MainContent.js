import React, { Fragment } from 'react';
const style = { 
    root: {
        backgroundColor: '#fff',
        margin: '0 5.20833%',
        padding: '40px 20px 0 20px',
    },
    dreamText: {
        color: '#d08a00',
        fontSize: '32px',
        fontWeight: 'normal',
        lineHeight: '1.1875em',
        textTransform: 'uppercase',
    }
}
class MainContent extends React.Component{

    render() {
        return(
            <Fragment>
                <p style={style.dreamText}>
                    Start dreaming now
                </p>
            </Fragment>
        )
    }
};

export default MainContent;