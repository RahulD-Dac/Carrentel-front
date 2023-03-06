

import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import axios from 'axios';


export function PaymentsView() {

    const [applicantsList, setapplicantsList] = useState([]);
    const [selectedapplicantName, setselectedapplicantName] = useState('');
    const [isModalOpened, setIsModalOpened] = useState(false);


    const openModal = () => {
        setIsModalOpened(true);
    }
    const closeModal = () => {
        setIsModalOpened(false);
    }
    async function getAllapplicants() {
        const response = await axios.get(`http://localhost:8080/payment`);
        setapplicantsList(response.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/payment/${id}`);
        getAllapplicants();
    };



    useEffect(() => {
        getAllapplicants();
    }, []);

    return (
        <>
            <div className="container">

                <div className="py-4">
                    <table className="table table-hover">
                        <thead>
                            <tr className="bg-info text-white">
                                <th scope="col">S.N</th>
                                <th scope="col">First Name</th>
                                <th scope="col">User Id</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicantsList.map((applicant, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{applicant.name}</td>
                                    <td>{applicant.userId}</td>
                                    <td>{applicant.date}</td>
                                    <td>{applicant.amount}</td>


                                    <td><Button variant="danger" className="btn-sm" onClick={() => deleteUser(applicant.paymentId)}>Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
