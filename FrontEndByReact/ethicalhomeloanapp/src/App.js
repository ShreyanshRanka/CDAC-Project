import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Sidebar/Sidebar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import LoanOfficer from './Components/Modules/LoanOfficer/LoanOfficer';
import Enquiry from './Components/Enquiry/Enquiry';
import Login from './Components/Login/Login';
import DashBoard from './Components/Modules/DashBoard/DashBoard';
import DashboardOfficial from './Components/Modules/DashboardOfficial/DashboardOfficial';
import Office from './Components/Modules/Office/Office';
import OperationalExecutive from './Components/OperationalExecutive/OperationalExecutive';
import RegisteredCustList from './Components/OperationalExecutive/RegisteredCustList/RegisteredCustList';
import CustomerRegistration from './Components/Modules/LoanOfficer/CustomerRegistration';



function App() {
  return (
    <div className="">



      {/* <BrowserRouter> 

        <Routes> 

           <Route path='/' element={<Home/>} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/loanofficer' element={<LoanOfficer/>} />
          <Route path='/loanofficer/enquiry-form' element={<Enquiry/>} /> 

          <Route path='/header' element={<Navbar />} />

        </Routes> 

       </BrowserRouter> */}

      {/* <Navbar />
      <Home />
      <Sidebar/> 
      <Footer />   */}

      {/* <Enquiry/>  */}

      {/* <DashBoard/> */}

      {/* <DashboardOfficial/> */}

      {/* <RegisteredCustList/> */}



      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />





          {/* LoanOfficer */}
          <Route path='/role/loanofficer' element={<Office myname={"Loan Officer"} op1={'/role/loanofficer/enquiry-form'} op2={'/role/loanofficer/approved-enquiry'} op3={'/role/loanofficer/loan-sanction-list'} myop1={"create Enquiry"} myop2={'approved enquiry'} myop3={"loan sanction list"}/>} />
          <Route path='/role/loanofficer/enquiry-form' element={<Enquiry />} />
          
          <Route path='/role/loanofficer/approved-enquiry' element={<LoanOfficer />} />
          <Route path='/role/loanofficer/custr' element={<CustomerRegistration/>} />

          <Route path='/role/loanofficer/loan-sanction-list' element={<LoanOfficer />} />


           {/* Operatinal Executive */}
          <Route path='/role/operationalexecutive' element={<Office myname={"Operational Executive"} op1={'/role/operationalexecutive/view-enquiry'} op2={'/role/operationalexecutive/registered-cust-list'} myop1={"view enquiry"} myop2={'ragistered customer list'}/>} />
          <Route path='/role/operationalexecutive/view-enquiry' element={<OperationalExecutive/>} />
          <Route path='/role/operationalexecutive/registered-cust-list' element={<RegisteredCustList/>} />

        </Routes>

      </BrowserRouter>












    </div >
  );
}

export default App;
