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


// const TriangleButton = Styled(Actionbutton)`
// border-left: 7px solid transparent;
// border-right:7px solid transparent;
// border-top: 6px dashed;
// `;
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`;
const Hover =Styled.a`
&:hover {
    color:blue;
`;

export const PersonalList = () => {

    const { id } = useParams();

    const Show = gql`
{
    personalList{
    
        name
        
        code
        email
        role
        bank
        bankaccno
        PAN
        ifsccode
        }
  }`;
  const PersonalDetailsById = gql`
  query PersonalDetails($id:String!){
      personalinfo(id:$id){
          name
          email
          role
          bank
          bankaccno
          ifsccode
          PAN
      }
  }`;
// const [emp,setemp] = useState({ 'idTodisplay': "" });
//  const history = useHistory();
//   const navigateTo = () => history.push(`/read/${data.employee.id}`);

//     const [perId, setPerId] = useState({ 'idToDelete': "" });
  
 

//     const DELETE_Personal = gql`
//     mutation DeletePer   sonal($id: String!){
//     deletePersonal(id: $id){
//     respCode,
//     respMessage 
//   }
// }
// `;


const { loading, error, data} = useQuery(Show,PersonalDetailsById);


// const [deleteMutation] = useMutation(DELETE_Personal);
   
//     const handleDelete = (deleteId) => {
//         if (window.confirm("Do you really want to leave?")) {
//             setPerId({ 'idToDelete': deleteId });
//             console.log("handleDelte", deleteId, perId);
//             deleteMutation({ variables: { id: deleteId } });
//         }
//         else {

//         }
//     };

    //  const handleInputChange = event => {
    //     const { value } = event.target
    //     this.props.userSearchInput(value);
    //     this.setState({
    //         query: value
    //     });
    // };

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error</p>;
  
    return (

        <Fragment>
            <Navbar bgColor="grey" color="white">
            Personal Details
                       

                 <Button >
                    <LinkTag to={"/personalData"}>Add </LinkTag>
                </Button>
                
            </Navbar>
            <Break />
            <Container>
                <Table>
                    <TableRow>
                    <TableHeading> ID</TableHeading>
                    <TableHeading>Name</TableHeading>
                    {/* <TableHeading>Address</TableHeading> */}
                    <TableHeading>Email</TableHeading>
                    <TableHeading>Role</TableHeading>
                    <TableHeading>PAN No</TableHeading>
                    {/* <TableHeading>Bank </TableHeading> */}
                    <TableHeading>Account No</TableHeading>
                    
                    <TableHeading>IFSC code</TableHeading>
                    <TableHeading>Edit</TableHeading>
                    <TableHeading>Delete</TableHeading>
                    
                    
                   
                  
                    </TableRow>
                    {data.personalList.map((personal,id) => (
                        <TableRow>
                            <LinkTag to={`/Hr/PersonalDetails/${personal.code}`} >
                               <TableData key={id}>{personal.code}</TableData>
                            
                            </LinkTag>
                        <TableData>{personal.name}</TableData>
                        {/* <TableData>{personal.address}</TableData> */}
                        <TableData>{personal.email}</TableData>
                        <TableData>{personal.role}</TableData>
                        <TableData>{personal.PAN}</TableData>
                        {/* <TableData>{personal.bank}</TableData> */}
                        <TableData>{personal.bankaccno}</TableData>
                        <TableData>{personal.ifsccode}</TableData>
                        <TableData style={{ "text-align": "center" }} >
                                <LinkTag to={`/Edit/${personal.code}`} >
                                    <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>
                                </LinkTag>
                            </TableData>
                            <TableData style={{ "text-align": "center" }} >
                    
                                    <FontAwesomeIcon icon={faTrash}  
                                    ></FontAwesomeIcon>

                            
                            </TableData>
                           

                        </TableRow>
                    ))}


                    
                </Table>
            </Container>
        </Fragment>
    )
}
