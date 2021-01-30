import React, { Component, Fragment, useState, } from 'react';
import Styled from '@emotion/styled';
import { Link ,useParams,useHistory} from 'react-router-dom';
//  import history from './../History';
import { useQuery, gql, useMutation } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { from } from 'apollo-boost';
const Navbar = Styled.nav`
background-color: ${(props) => props.bgColor};
position: sticky;
top: 0px;
padding: 8px;
color: ${(props) => props.color};
font-size: 20px;
`;
const Logo = Styled.img`
height: 30px;
width: 30px;
margin-bottom: -5px;
`;
const Break = Styled.br`
`;
const Button = Styled.button`
color:black;
background-color: powderblue;
height:27px;
margin-top: -3px;
font-size: 13px;
outline: none;
border: none;
width: 100px;
float: right;
border-radius: 5px;
&:hover {
opacity: 0.5;
`;
const Container = Styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
`;
const Table = Styled.table`
border-collapse: collapse;
border: 1px solid #ddd;
width: 100%;
padding: 20px;
`;
const TableRow = Styled.tr`
border: 1px solid #ddd;
&:nth-child(even){background-color: #F2F2F2;}
&:hover {background-color: #ddd;}
`;
const TableData = Styled.td`
border: 1px solid #ddd;
height: 30px;
vertical-align: bottom;
text-align:left;
`;
const TableHeading = Styled.th`
border: 1px solid #ddd;
height: 10px;
padding:8px;
text-align:left;
`;
const Actionbutton = Styled.button`
height:15px;
width:15px;
display:inline-block;
background-color:rgba(255,255,255,0.7);
border:1px solid gray;
`;
const IdButton = Styled.button`
border:none;
outline:none;
    `;
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`;
const Hover =Styled.a`
&:hover {
    color:blue;
`;

export const ListOfEmployee = () => {

    const { id } = useParams();

    const Show = gql`
{
    employeeList{
    id
    name
    code
    email
    role
    department
    joinedDate
    mobileNo
    }
  }`;
  const GetEmployeeById = gql`
  query EmpDetails($id:String!){
      employee(id:$id){
          name
          code
          email
          mobileNo
          department
          role
          joinedDate
      }
  }
  `;
    const [emp,setemp] = useState({ 'idTodisplay': "" });
 const history = useHistory();
  const navigateTo = () => history.push(`/read/${data.employee.id}`);

    const [empId, setEmpId] = useState({ 'idToDelete': "" });
  
 

    const DELETE_Employee = gql`
    mutation DeleteEmployee($id: String!){
    deleteEmployee(id: $id){
    respCode,
    respMessage 
  }
}
`;


const { loading, error, data} = useQuery(Show,GetEmployeeById);


const [deleteMutation] = useMutation(DELETE_Employee);
   
    const handleDelete = (deleteId) => {
        if (window.confirm("Do you really want to leave?")) {
            setEmpId({ 'idToDelete': deleteId });
            console.log("handleDelte", deleteId, empId);
            deleteMutation({ variables: { id: deleteId } });
        }
        else {

        }
    };

    

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;
  
    return (

        <Fragment>
            <Navbar bgColor="grey" color="white">
                List of Employee
                
                
                <LinkTag to={`/display/${id}`} >
                    {/* <FontAwesomeIcon   icon={faSearch}  >
                         */}
                    {/* <LinkTag to={`/read/${emId.id}`} >emp.id</LinkTag> */}
                    {/* </FontAwesomeIcon> */}
                    </LinkTag>
                  {/* <input type="text" placeholder="search" value={data.id}  ></input>
                   */}
                  
                

                 <Button >
                    <LinkTag to={"/adding"}>Add Employee</LinkTag>
                </Button>
                
            </Navbar>
            <Break />
            <Container>
                <Table>
                    <TableRow>
                        <TableHeading> ID</TableHeading>
                        <TableHeading>Name</TableHeading>
                        
                        <TableHeading>Email</TableHeading>
                        <TableHeading>Role</TableHeading>
                        <TableHeading>Department</TableHeading>
                        <TableHeading>JoiningDate</TableHeading>
                        <TableHeading>Mobile NO</TableHeading>
                        <TableHeading>Edit</TableHeading>
                        <TableHeading>Delete</TableHeading>
                    </TableRow>

                    {data.employeeList.map((employee, id) => (
                        <TableRow>
                            <LinkTag to={`/display/${employee.id}`}>
                            <TableData>{employee.code}</TableData>
                            </LinkTag>

                       
                                
                            
                            <TableData>{employee.name}</TableData>
                            
                            <TableData>{employee.email}</TableData>
                            <TableData>{employee.role}</TableData>
                            <TableData>{employee.department}</TableData>
                            <TableData>{employee.joinedDate}</TableData>
                            <TableData>{employee.mobileNo}</TableData>

                            <TableData style={{ "text-align": "center" }} >
                                <LinkTag to={`/edit/${employee.id}`}>
                                    <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>
                                </LinkTag>
                            </TableData>
                            <TableData style={{ "text-align": "center" }} >
                                <Button onClick={() => handleDelete(employee.id)} >
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </Button>
                            </TableData>
                        </TableRow>
                        
                    )
                    )}
                </Table>
            </Container>
        </Fragment>
    )
}
