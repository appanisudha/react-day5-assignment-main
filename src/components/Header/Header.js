const  Header = (props) =>{
    return (
        <h1 style={{textAlign:'center',fontSize:'35px'}}>{props.title? props.title:  "Welcome to Food Items Info Page"}</h1>
    )
}

export default Header;