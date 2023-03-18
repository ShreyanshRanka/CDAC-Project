import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import admin from './admin.jpg';
import salaryslip from './salarayslip.jpg';
import './viewregistration.css';


const ViewRegisterForm = (props) => {

    const [cust, setCust] = useState([]);
    const [eduinfo, setEduinfo] = useState([]);
    const [familyinfo, setFamillyinfo] = useState([]);
    const [localaddress, setlocaladdress] = useState([]);
    const [permanentaddress, setpermanentaddress] = useState([]);
    const [profInfo, setprofInfo] = useState([]);
    const [accdetail, setaccdetail] = useState([]);
    const [propertyinfo, setpropertyinfo] = useState([]);
    const [gurantorinfo, setgurantorinfo] = useState([]);
    const [mortgageinfo, setmortgageinfo] = useState([]);
    const [loan, setloan] = useState([]);
    const [showfamilyinfoDiv, setshowFamilyinfoDiv] = useState(false);
    const [showgeneralinfoDiv, setshowgeneralinfoDiv] = useState(true);
    const [showaddressDiv, setshowaddressDiv] = useState(false);
    const [professioanlDiv, setprofessioanlDiv] = useState(false);
    const [accdetailsDiv, setaccdetailsDiv] = useState(false);
    const [propertyDiv, setpropertyDiv] = useState(false);
    const [gurantorDiv, setgurantorDiv] = useState(false);
    const [mortgageDiv, setmortgageDiv] = useState(false);
    const [loanDocDiv, setloanDocDiv] = useState(false);
    const [verify, setverify] = useState({ verificationDate: "", status: "" });
    const [remarks, setremarks] = useState("");
    const [verificationID, setverificationId] = useState("");

    

    // const [customerId, setCustomerId] = useState("");


    useEffect(() => {
        const { customerId } = props;
        alert(customerId);
        console.log(customerId)
        fetchCustomers(customerId);
    }, []);


    const fetchCustomers = (customerId) => {
        console.log(customerId)
        const result = axios.get(`http://localhost:8080/CustomerController/customer/${customerId}`)
            .then((item) => {

                setCust(
                    item.data
                )
                //console.log(item.data);
                console.log("success");

                setEduinfo(item.data.educationalInfo);
                setFamillyinfo(item.data.familydependentInfo);
                setlocaladdress(item.data.customerAddress.localAddress);
                setpermanentaddress(item.data.customerAddress.permanentAddress);
                setverificationId(item.data.customerverification.verificationID);
                setprofInfo(item.data.profession);
                setaccdetail(item.data.accountdetails);
                setpropertyinfo(item.data.propertyinfo);
                setgurantorinfo(item.data.gurantordetails);
                setmortgageinfo(item.data.mortgageDetails);
                setloan(item.data.currentloandetails);
            });
    };

    const changeGeneralInfo = () => {
        setshowgeneralinfoDiv(!showgeneralinfoDiv);
        setshowFamilyinfoDiv(!showfamilyinfoDiv);
    }
    const changeFamilyInfo = () => {
        setshowFamilyinfoDiv(!showfamilyinfoDiv);
        setshowaddressDiv(!showaddressDiv);
    }
    const onAddressChange = () => {
        setshowaddressDiv(!showaddressDiv);
        setprofessioanlDiv(!professioanlDiv);
    }
    const onProfessionChange = () => {
        setprofessioanlDiv(!professioanlDiv);
        setaccdetailsDiv(!accdetailsDiv);
    }
    const onAccountChange = () => {
        setaccdetailsDiv(!accdetailsDiv);
        setpropertyDiv(!propertyDiv);
    }
    const onPropertyChange = () => {
        setpropertyDiv(!propertyDiv);
        setgurantorDiv(!gurantorDiv);
    }
    const onGurantorChange = () => {
        setgurantorDiv(!gurantorDiv);
        setmortgageDiv(!mortgageDiv);
    }
    const onMortageChange = () => {
        setmortgageDiv(!mortgageDiv);
        setloanDocDiv(!loanDocDiv);
    }

    const onDocApprove = () => {
        setverify({ verificationDate: "", status: "" });
        setremarks("VERIFIED");
        alert("VERIFIED");
        axios.put(`http://localhost:8080/customerVerification/updateCustomerVerfication/${verificationID}`, {
            verificationDate: verify.verificationDate,
            status: verify.status,
            remarks: remarks,
        }).then(() => {
            console.log("success");
        });
    }
    const onDocReject = () => {
        setverify({ verificationDate: "", status: "" });
        setremarks("REJECTED");
        alert("REJECTED");
        axios.put(`http://localhost:8080/customerVerification/updateCustomerVerfication/${verificationID}`, {
            verificationDate: verify.verificationDate,
            status: verify.status,
            remarks: verify,
        }).then(() => {
            console.log("success");
        });
    }
    return (
        <div className="container">
            <div className="part1">
                <div className="customerimg">
                    <img src={admin} alt='' />
                </div>
                <div className="custdetail">
                    <h4>ROYEEE</h4>
                    <h4>royeee</h4>
                </div>
            </div>
            <div className="part2">
                <h2>Vierfication Form</h2>
                {showgeneralinfoDiv &&
                    <div className="generalInfo">
                        <h4>General Information : </h4>
                        <table>
                            <tr>  <td>Name </td><td>{cust.customerName}</td></tr>
                            <tr>  <td>Age </td><td>{cust.customerAge}</td></tr>
                            <tr>  <td>DOB </td><td>{cust.customerDateOfBirth}</td></tr>
                            <tr>   <td>Gender </td><td>{cust.customerGender}</td></tr>
                            <tr>   <td>Education </td><td>{eduinfo.educationType}</td></tr>
                            <tr>   <td>Email </td><td>{cust.customerEmail}</td></tr>
                            <tr>   <td>Amount Paid for Home </td><td>{cust.customerAmountPaidForHome}</td></tr>
                            <tr>   <td>Total Loan Required </td><td>{cust.customerTotalLoanRequired}</td></tr>
                        </table>
                        <button className="btn btn-outline-success" onClick={changeGeneralInfo}>Next</button>
                    </div>}
                {showfamilyinfoDiv &&
                    <div className="familyInfo">
                        <h4>Family Information : </h4>
                        <table>
                            <tr>  <td>Father's Name </td><td>{familyinfo.fatherName}</td></tr>
                            <tr>  <td>Mother's Name </td><td>{familyinfo.motherName}</td></tr>
                            <tr>  <td>Marrital Status </td><td>{familyinfo.maritalStatus}</td></tr>
                            <tr>   <td>Spouse Name </td><td>{familyinfo.spouseName}</td></tr>
                            <tr>   <td>No. of Child </td><td>{familyinfo.noOfChild}</td></tr>
                            <tr>   <td>No. of Family Members </td><td>{familyinfo.noOfFamilyMember}</td></tr>
                            <tr>   <td>No. of Depedent Membrs </td><td>{familyinfo.pincode}</td></tr>
                            <tr>   <td>Total Anual Income </td><td>{familyinfo.familyIncome}</td></tr>
                        </table>
                        <button className="btn btn-outline-success" onClick={changeFamilyInfo}>Next</button>
                    </div>}
                {showaddressDiv &&
                    <div className="addressInfo">
                        <h4>Address Information : </h4>
                        <h5>Local Address : </h5>
                        <table>
                            <tr>  <td>House Number </td><td>{localaddress.houseNumber}</td></tr>
                            <tr>  <td>Area Name </td><td>{localaddress.areaname}</td></tr>
                            <tr>  <td>Street </td><td>{localaddress.streetName}</td></tr>
                            <tr>   <td>City Name </td><td>{localaddress.cityname}</td></tr>
                            <tr>   <td>District </td><td>{localaddress.district}</td></tr>
                            <tr>   <td>State </td><td>{localaddress.state}</td></tr>
                            <tr>   <td>Pincode </td><td>{localaddress.dependentMember}</td></tr>
                        </table>
                        <h5>Permanent Address : </h5>
                        <table>
                            <tr>  <td>House Number </td><td>{permanentaddress.houseNumber}</td></tr>
                            <tr>  <td>Area Name </td><td>{permanentaddress.areaname}</td></tr>
                            <tr>  <td>Street </td><td>{permanentaddress.streetName}</td></tr>
                            <tr>   <td>City Name </td><td>{permanentaddress.cityname}</td></tr>
                            <tr>   <td>District </td><td>{permanentaddress.district}</td></tr>
                            <tr>   <td>State </td><td>{permanentaddress.state}</td></tr>
                            <tr>   <td>Pincode </td><td>{permanentaddress.pincode}</td></tr>
                        </table>
                        <button className="btn btn-outline-success" onClick={onAddressChange}>Next</button>
                    </div>}
                {professioanlDiv &&
                    <div className="profInfo">
                        <h4>Professional Information : </h4>
                        <table>
                            <tr>  <td>Profession Type </td><td>{profInfo.professiontype}</td></tr>
                            <tr>  <td>Designation </td><td>{profInfo.professionDesignation}</td></tr>
                            <tr>  <td>Salary Type </td><td>{profInfo.professionsalaryType}</td></tr>
                            <tr>   <td>Annual Salary </td><td>{profInfo.professionsalary}</td></tr>
                            <tr>   <td>Working Period </td><td>{profInfo.professionworkingperiod}</td></tr>
                            <tr>   <td>salarySlips </td><td><img className="salaryslip" src={salaryslip} alt="salary" /> </td></tr>
                        </table>
                        <button className="btn btn-outline-success" onClick={onProfessionChange}>Next</button>
                    </div>}
                {accdetailsDiv &&
                    <div className="accInfo">
                        <h4>Account Details : </h4>
                        <table>
                            <tr>  <td>Account No </td><td>{accdetail.accountNumber}</td></tr>
                            <tr>  <td>Account Holder Name </td><td>{accdetail.accountHolderName}</td></tr>
                            <tr>  <td>Account Type </td><td>{accdetail.accounType}</td></tr>
                            <tr>   <td>Account Status </td><td>{accdetail.accountStatus}</td></tr>
                            <tr>   <td>Account Balance </td><td>{accdetail.accountBalance}</td></tr>
                        </table>
                        <button className="btn btn-outline-success" onClick={onAccountChange}>Next</button>
                    </div>}
                {propertyDiv &&
                    <div className="propertyInfo">
                        <h4>Property Details : </h4>
                        <table>
                            <tr>  <td>Property Type </td><td>{propertyinfo.propertyType}</td></tr>
                            <tr>  <td>Property Area </td><td>{propertyinfo.propertyArea}</td></tr>
                            <tr>  <td>Construction Area</td><td>{propertyinfo.constructionArea}</td></tr>
                            <tr>   <td>Property Price </td><td>{propertyinfo.propertyPrice}</td></tr>
                            <tr>   <td>Construction Price </td><td>{propertyinfo.constructionPrice}</td></tr>
                            <tr>  <td>Property Documents </td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>  <td>Price Proof </td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                        </table>
                        <button className="btn btn-outline-success" onClick={onPropertyChange}>Next</button>
                    </div>}
                {gurantorDiv &&
                    <div className="gurantorInfo">
                        <h4>Gurantor Details : </h4>
                        <table>
                            <tr>  <td>Guarantor Name </td><td>{gurantorinfo.guarantorName}</td></tr>
                            <tr>  <td>Guarantor DOB </td><td>{gurantorinfo.guarantorDateOfBirth}</td></tr>
                            <tr>  <td>Relationship with Customer</td><td>{gurantorinfo.guarantorRelationshipwithCustomer}</td></tr>
                            <tr>   <td>Guarantor Mobile No </td><td>{gurantorinfo.guarantorMobileNumber}</td></tr>
                            <tr>   <td>Guarantor Mortgage Detail</td><td>{gurantorinfo.guarantorMortgageDetails}</td></tr>
                            <tr>  <td>Guarantor Job Details </td><td>{gurantorinfo.guarantorJobDetails}</td></tr>
                        </table>
                        <button className="btn btn-outline-success" onClick={onGurantorChange}>Next</button>
                    </div>}
                {mortgageDiv &&
                    <div className="mortgageInfo">
                        <h4>Mortgage Details : </h4>
                        <table>
                            <tr>  <td>Mortgage Property Type </td><td>{mortgageinfo.mortgagePropertyType}</td></tr>
                            <tr>  <td>Mortgage Property Value </td><td>{mortgageinfo.mortgagePropertyValue}</td></tr>
                            <tr>  <td>Loan On Property</td><td>{mortgageinfo.mortgageLoanOnProperty}</td></tr>
                            <tr>   <td>Property Proof </td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>   <td>Property Insurence</td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                        </table>
                        <button className="btn btn-outline-success" onClick={onMortageChange}>Next</button>
                    </div>}
                {loanDocDiv &&
                    <div className="loandocInfo">
                        <h4>Loan Requirement : </h4>
                        <table>
                            <tr>  <td>Loan Amount </td><td>{loan.loanAmount}</td></tr>
                            <tr>  <td>Rate of Interest </td><td>{loan.rateOfInterest}</td></tr>
                            <tr>  <td>Tenure</td><td>{loan.tenure}</td></tr>
                        </table>
                        <h4>Personal Documents : </h4>
                        <table>
                            <tr>   <td>Addhar Card </td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>   <td>Pan Card</td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>   <td>Income tax </td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>   <td>bank Chequre</td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>   <td>Salary Slip</td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>   <td>Photo</td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>   <td>Signiture </td><td><img className="salaryslip" src={salaryslip}></img></td></tr>
                            <tr>   <td>Thumb Impression</td><td><img className="salaryslip" src={salaryslip}></img></td></tr>

                        </table><div align="center">
                            <button className="btn btn-outline-success" onClick={onDocApprove}>Approve</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-outline-danger" onClick={onDocReject}>Reject</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            
                        </div>
                    </div>}
            </div>
        </div>
    )

}

export default ViewRegisterForm;