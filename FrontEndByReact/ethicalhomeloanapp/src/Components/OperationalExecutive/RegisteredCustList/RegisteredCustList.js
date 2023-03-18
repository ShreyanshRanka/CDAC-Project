import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import ViewRegisterForm from './ViewRegisterForm';


const RegisteredCustList = ()=>{

    const [cust, setCust] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    useEffect(()=>{
        fetchCustomers();
    },[]);

    const fetchCustomers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/enquiry");
            setCust(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleShowDetails = (id) => {
        // alert(id);
        setSelectedCustomerId(id);
        setShowDetails(true);
    }

    if (showDetails) {
        

        return <ViewRegisterForm customerId={selectedCustomerId} />;
    }



    return (
        <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CUSTOMER NAME</th>
                  <th>MOBILE NO</th>
                  <th>EMAIL ID</th>
                  <th>VIEW FORM</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {cust.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.firstName} {item.lastName}</td>
                      <td>{item.mobileNo}</td>
                      <td>{item.email}</td>
                      <td><button type='button'
                       className='btn btn-outline-success ' onClick={() => handleShowDetails(item.id)}>SHOW DETAILS</button></td>
                    </tr>
                ))}
              </tbody>
            </table>
        </div>
    )

}
export default RegisteredCustList;