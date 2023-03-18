import DashboardOfficial1 from "./DashboardOfficial1";
import NavbarLogout from "../HeaderLogout/NavbarLogout";
import './LoanOfficer.css';

const LoanOfficer=(props)=>{

    return(
       <div>

        <NavbarLogout/>
        <div className="office">
        <DashboardOfficial1/>
        </div>
       
         
          
       </div>
    )

}
export default LoanOfficer;