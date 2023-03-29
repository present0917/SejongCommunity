const Fetchprop=(props)=>
{
    console.log("test");
    console.log(props);
    return(
        <div>
            <li>{props.prop.id}</li>
            <li>{props.prop.title}</li>
        </div>
    )
}
export default Fetchprop