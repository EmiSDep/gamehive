import React from "react";

const Button = (props) => {
    return (
        <button {...props} style={{ ...styles.button, ...props.buttonStyle }}>
            {props.children}
        </button>
    );
};

const styles = {
    button: {
        alignSelf: "center",
        // backgroundColor: "#F96295",
        backgroundColor: "blue",
        color: "white",
        fontWeight: "bold",
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        marginTop: 5,
        width: "50%",
        borderRadius: 10,
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
      },
}

export default Button;