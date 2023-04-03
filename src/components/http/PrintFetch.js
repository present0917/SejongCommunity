import Fetchprop from "./Fetchprop";
const PrintFetch=(props)=>
{
   
    return(
        <div>
            Fetch
            <ul>
                {props.data.map((element)=>(
                    <Fetchprop prop={element} key={element.id}/>
                ))}
                
            </ul>
        </div>
    )
}
export default PrintFetch