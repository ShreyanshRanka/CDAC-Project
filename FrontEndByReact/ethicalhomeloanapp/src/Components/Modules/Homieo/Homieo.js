import './HomeStyles.css';
import Sidebar from './Sidebar';

const Homieo = () => {

    return (

        <div className='home'>

            <Sidebar />
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

                    </thead>
                </table>
            </div>
        </div>
    );
}


export default Homieo;