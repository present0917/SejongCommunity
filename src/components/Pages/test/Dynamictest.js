import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Dynamictest = () => {
    const params = useParams();
    return (
        <>
            <div>{params.id}</div>
            <Link to='..' relative='path'>back</Link>
        </>
    )
}
export default Dynamictest