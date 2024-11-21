export const styles = {
    fieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        position: 'relative'
    },
    label: {
        fontSize: '18px'
    },
    field: {
        height: '50px',
        backgroundColor: 'rgb(244, 243, 243)',
        border: '1px solid rgb(197, 197, 197)',
        borderRadius: '5px',
        fontSize: '20px',
        padding: '0 15px'
    },
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '10px'
    },
    checkbox: {
        width: '20px',
        height: '20px',
        margin: '0'
    },
    error: {
        color: 'red',
        position: 'absolute',
        bottom: '-20px'
    }
};
