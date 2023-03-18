import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './DashBoard.css';

const DashBoard = () => {

    const [enquiryData, setEnquiryData] = useState([]);

    useEffect(() => {
        fetchEnquiryData();
    }, []);

    const fetchEnquiryData = async () => {
        const result = await axios.get("http://localhost:8080/api/enquiry");

        setEnquiryData(
            result.data.map((item) => ({
                ...item,
                cibilId: "",
                cibilScore: null,
                status: "",
                remark: "",
            }))
        );
    };

    const approveEnquiry = (cibilId) => {
        axios.put(`http://localhost:8080/api/enquiry/${cibilId}`, { status: "APPROVED" })
          .then(() => {
            setEnquiryData((prevCust) =>
              prevCust.map((item) =>
                item.cibilId === cibilId ? { ...item, status:"APPROVED" } : item
              )
            );
            alert("ENQUIRY APPROVED!");
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const generateCibil = async (customerId) => {
        const fetchData = await axios.get(
          `http://localhost:8080/cibil/cibildata/${customerId}`
        );
        setEnquiryData((prevCust) =>
          prevCust.map((item) =>
            item.id === customerId
              ? { ...item, cibilId:fetchData.data.cibilId, cibilScore: fetchData.data.cibilScore, status: fetchData.data.status }
              : item
          )
        );
        alert("CIBIL IS GENERATED!")
      };

      const rejectEnquiry = (cibilId) => {
        axios.put(`http://localhost:8080/api/enquiryreject/${cibilId}`, { status: "REJECTED" })
          .then(() => {
            setEnquiryData((prevCust) =>
              prevCust.map((item) =>
                item.cibilId === cibilId ? { ...item, status: "REJECTED" } : item
              )
            );
            alert("ENQUIRY REJECTED!");
          })
          .catch((error) => {
            console.log(error);
          });
      };
    



    return (
            <div className='bubble'>
                <table className='even'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Mobile No</th>
                            <th>PanCard No</th>
                            <th>Cibil Generator</th>
                            <th>Cibil Score</th>
                            <th>Status</th>
                        </tr>

                        {enquiryData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.age}</td>
                                <td>{item.mobileNo}</td>
                                <td>{item.pancardNo}</td>
                                <td>
                                    <button
                                        type="button"
                                        className=""
                                        onClick={()=>generateCibil(item.id)}
                                    >
                                        GENERATE CIBIL
                                    </button>
                                </td>
                                <td>{item.cibilScore ? (<div>{item.cibilScore} {item.cibilScore >= 750 ?
                                    (<div><button type="button" className="" onClick={()=>approveEnquiry(item.cibilId)}>
                                        APPROVE</button>
                                    </div>
                                    ) : (
                                        <div>
                                            <button type="button" className="" onClick={()=>rejectEnquiry(item.cibilId)}>REJECT</button></div>)}
                                </div>
                                ) : (
                                    <div>-</div>
                                )}
                                </td>
                                <td>{item.status}</td>

                            </tr>))}
                    </thead>
                </table>
            </div>
        

    );

}
export default DashBoard;