import Cake from "./Cake"
import axios from "axios"

export default function Home(props){
    return(
        <div className="row">
        {props.data?.map((each,index)=>{
            return <Cake data={each} key={index} />
        })}
        </div>
    )
}


export async function getStaticProps(){
    var response = await axios({
        method:"get",
        url:process.env.BASE_URL +"/allcakes"
    })
    
    console.log(">>>>>>>>>>>>>>>>11111111111111111111111111111111>>>>>>>>>>>>>>>>>>>>>>>>>", response)

    return {
        props:{
            data:response.data.data || []
        }
    }
}