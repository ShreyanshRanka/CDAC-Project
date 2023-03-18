import Sidebar from "../../Sidebar/Sidebar";
import NavbarLogout from "../HeaderLogout/NavbarLogout";
const Office=(props)=>{

    return(
       <div>

        <NavbarLogout/>
        <Sidebar  myname={props.myname} op1={props.op1} op2={props.op2} op3={props.op3} myop1={props.myop1} myop2={props.myop2} myop3={props.myop3} />

       </div>
    )

}
export default Office;