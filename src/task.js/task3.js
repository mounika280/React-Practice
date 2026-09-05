function Button(props) {
    return (
        <button style={props.style}>
            {props.children}
        </button>
    );
}

function Component() {
    return (
        <div>
            <Button style={{ backgroundColor: "blue", color: "white" }}>
                Login
            </Button>
            <br></br>

            <Button style={{ backgroundColor: "green", color: "white" }}>
                Register
            </Button> 
            <br></br>

            <Button style={{ backgroundColor: "orange", color: "white" }}>
                Download
            </Button>
            <br></br>

            <Button style={{ backgroundColor: "red", color: "white" }}>
                Delete
            </Button>
        </div>
    );
}
export default Component;