function Employee(props) {
    // props.name = 'Hello !!';
    return (
        <>
            <p> My first laptop is {props.name}</p>
            <p>{props.role ? props.role : "No role"}</p>
            {props.role ? (<p class="role">{props.role}</p>) : (<p class="norole">No role</p>)}
        </>
    );
}

export default Employee;