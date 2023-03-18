import DashboardOfficial from "../Modules/DashboardOfficial/DashboardOfficial";
import NavbarLogout from "../Modules/HeaderLogout/NavbarLogout";
import './OperationalExecutive.css';


const OperationalExecutive=()=>{

    return(
       <div>

        <NavbarLogout/>
        <div className="office">
        <DashboardOfficial/>
        </div>    
          
        </div>
    )

}
export default OperationalExecutive;