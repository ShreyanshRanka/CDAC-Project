import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './DashBoard.css';

const DashBoard = () => {

  const [cust, setCust] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    fetchCibil();
  }, [cust]);

  const fetchCustomers = async () => {
    const result = await axios.get("http://localhost:8080/api/enquiry");
    setCust(
      result.data.map((item) => ({
        ...item,
        cibilId: "",
        cibilScore: null,
        status: "",
        remark: "",
      }))
    );
  };

  const fetchCibil = async () => {
    try {
      const updatedCust = [];
      for (const item of cust) {
        const response = await axios.get(`http://localhost:8080/cibil/cibildata/${item.id}`);
        const updatedItem = {
          ...item,
          cibilId: response.data.cibilId,
          cibilScore: response.data.cibilScore,
          status: response.data.status,
          remark: response.data.remark,
        };
        updatedCust.push(updatedItem);
      }
      if (JSON.stringify(updatedCust) !== JSON.stringify(cust)) {
        setCust(updatedCust);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const getClassForRemark = (remark) => {
    switch (remark) {
      case 'APPROVED':
        return 'remark-approved';
      case 'REJECT':
        return 'remark-rejected';
      case 'PENDING':
        return 'remark-pending';
      default:
        return '';
    }
  };

  const sendEmail = async (id, firstName, lastName, age, email, mobileNo, pancardNo, mailSent, cibilId) => {
    try {
      const response = await axios.post("http://localhost:8080/emailsender/emailsendingwithattachment", {
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        mobileNo: mobileNo,
        pancardNo: pancardNo,
        mailSent: mailSent,
        cibilId: cibilId
      });
      // alert(response.data.message);
      alert("EMAIL SENT");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bubble'>
      <table className='even'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>PanCard No</th>
            <th>Email ID</th>
            <th >CIBIL SCORE</th>
            <th >STATUS</th>
            <th >SEND EMAIL</th>
            <th >REGISTER</th>
          </tr>

          {cust.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.pancardNo}</td>
              <td>{item.email}</td>
              <td>{item.cibilScore}</td>
              <td className={getClassForRemark(item.remark)} >{item.remark}</td>
              {item.remark === "APPROVED" && (<>
                <td>
                  <button type="button" className="btn btn-primary"
                    onClick={() => sendEmail(item.id, item.firstName, item.lastName, item.age, item.email, item.mobileNo, item.pancardNo, item.mailSent, item.cibilId)} >
                    SEND EMAIL
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-success">
                    REGISTER HERE
                  </button>
                </td>
              </>
              )}
            </tr>))}
        </thead>
      </table>
    </div>


  );

}
export default DashBoard;