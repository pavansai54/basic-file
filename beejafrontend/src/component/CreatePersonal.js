import React, { Fragment, useState } from 'react'
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import {gql} from 'graphql-tag'

const Navbar = Styled.nav`
background-color: ${(props) => props.bgColor};
position: sticky;
top:0px;
padding:8px;
color:${(props) => props.color};
font-size:25px;
`;
const Logo = Styled.img`
height:20px;
width:20px
`;
const Lable = Styled.label`
font-size:20px;
`;
const Input = Styled.input`
border-radius:5px;
width:230px;
margin-left:5px;
height:25px;
`;
const Break = Styled.br`
`;
const SelectBox = Styled.select`
&.Selectbox1{
width: 230px;
margin-left:5px;
border-radius:5px;
height:25px;
}
`;
const Option = Styled.option`
`;
const Button = Styled.button`
color:black;
background-color: ${props =>
       props.save ? 'powderblue' : 'white'};
height:30px;
font-size:20px;
width:80px;
border-radius:5px;
&:hover {
opacity:0.5;
`;
const Container = Styled.form`
display: flex;
justify-content: center;
align-items: center;
padding:20px;
`;
const Table = Styled.table`
`;
const TableData = Styled.td`
`;
const TableRow = Styled.tr`
`;
const TableColumn = Styled.td`
`;
const LinkTag = Styled(Link)` 
color:black; 
text-decoration:none;
`;

export const CreatePersonal = () => {

    const [formData, createFormData] = useState({
        username:"",
        code: "",
        // address:"",
        email: " ",
        bankaccno: "",
        bank: "",
        role: "",
        ifsccode: "",
        PAN: ""
    });

    const PersonalList = gql`
     mutation {
         createPersonal(data: {
              name:"${formData.username}",
              code:"${formData.code}",
            
              email:"${formData.email}",
              bankaccno:"${formData.bankaccno}",
              bank:"${formData.bank}",
              role:"${formData.role}",
              ifsccode:"${formData.ifsccode}" ,
              PAN:"${formData.PAN}"


           })
                  {
                      respCode, respMessage
                  }
              }
          `;
    const [PersonalCreate, { loading, error, data }] = useMutation(PersonalList);
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;

    toast.configure() 
    const remind = (message)=>{  
        toast.success(message,
        {position: toast.POSITION.BOTTOM_RIGHT})  
      };

    const handleChange = (e) => {
        createFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        PersonalCreate();
        showToast();
    };

    toast.configure()
    const showToast = () => {
    if (error)  { 
        toast.info('successful');
    }
};

    return (

        <Fragment>
            <Navbar bgColor="grey" color="white">
               Create Personal data
                        </Navbar>
            <Break />
            <Container >
                <Table >
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Name"> Name: </Lable></TableColumn>
                        <TableColumn ><Input type="text" name="username" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Empl-Id"> Employee Id: </Lable></TableColumn>
                        <TableColumn><Input type="text" name="code" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    {/* <TableRow>
                        <TableColumn><Lable htmlFor="Address" > Address</Lable></TableColumn>
                        <TableColumn><Input type="text" name="address" onChange={handleChange} required></Input></TableColumn>
                    </TableRow> */}
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Email"> Email: </Lable></TableColumn>
                        <TableColumn><Input type="email" name="email" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break /> 
                    <TableRow>
                        <TableColumn ><Lable htmlFor="Role"> Role: </Lable></TableColumn>
                        <TableColumn><SelectBox className="Selectbox1" name="role" onChange={handleChange} required>
                            <Option disabled selected value> Select an Option</Option>
                            <Option value="ADMIN"> ADMIN </Option>
                            <Option value="SUPER ADMIN"> SUPER ADMIN </Option>
                            <Option value="ACCOUNTANT"> ACCOUNTANT </Option>
                            <Option value="SOFTWARE ENGINEER"> SOFTWARE ENGINEER </Option>
                            <Option value="SENIOR-SOFTWARE ENGINEER"> SENIOR-SOFTWARE ENGINEER </Option>
                        </SelectBox></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn > <Lable > Permanent Account Number  </Lable></TableColumn>
                        <TableColumn><Input name="PAN" size="10" onChange={handleChange} type="text" required /></TableColumn>
                    </TableRow>
                    <Break />
                    {/* <TableRow>
                        <TableColumn > <Lable htmlFor="Bank"> Bank Name</Lable></TableColumn>
                        <TableColumn><SelectBox className="Selectbox1" name="Bank" onChange={handleChange} required>
                            <Option disabled selected value> Select an Option</Option>
                            <Option value="SBI">SBI </Option>
                            <Option value="AXIS"> AXIS </Option>
                            <Option value="ICICI"> ICICI </Option>
                            <Option value="HDFC"> HDFC </Option>
                        </SelectBox></TableColumn>
                    </TableRow>
                    <Break /> */}
                    <TableRow>
                        <TableColumn ><Lable htmlFor=""> ACCOUNT Number </Lable></TableColumn>
                        <TableColumn><Input name="bankaccno" onChange={handleChange} type="text" help="this is your bank " required /></TableColumn>
                        {/* <TableColumn><SelectBox className="Selectbox1" name="role" onChange={handleChange} required>
                            <Option disabled selected value> Select an Option</Option>
                            <Option value="ADMIN"> ADMIN </Option>
                            <Option value="SUPER ADMIN"> SUPER ADMIN </Option>
                            <Option value="ACCOUNTANT"> ACCOUNTANT </Option>
                            <Option value="SOFTWARE ENGINEER"> SOFTWARE ENGINEER </Option>
                            <Option value="SENIOR-SOFTWARE ENGINEER"> SENIOR-SOFTWARE ENGINEER </Option>
                        </SelectBox></TableColumn> */}
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn ><Lable htmlFor="" > IFSC CODE </Lable></TableColumn>
                        <TableColumn><Input type="text"  name="ifsccode" onChange={handleChange} required /></TableColumn>
                    </TableRow>
                    <Break />
                    <TableRow>
                        <TableColumn >
                            <Button type="Cancel">
                                <LinkTag to={"/personal"}>Cancel</LinkTag>
                            </Button>
                        </TableColumn>

                        <TableColumn>
                            <Button onClick={handleSubmit}>
                                <LinkTag to={"/personal"}>Submit</LinkTag>
                            </Button>
                        </TableColumn>
                    </TableRow>
                </Table>

            </Container>

        </Fragment>
    );
}
