import React, { Fragment, useState } from 'react'

import Styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { useMutation, gql, useQuery } from '@apollo/client';

const Navbar = Styled.nav`
background-color: ${(props) => props.bgColor};
position: sticky;
top:0px;
padding:8px;
color:${(props) => props.color};
font-size:25px;
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
const TableRow = Styled.tr`
`;
const TableColumn = Styled.td`
`;
const LinkTag = Styled(Link)` 
color:black; 
text-decoration:none;
`;
const Label = Styled.label`
font-size:20px
`;


export const PersonalEdit = () => {

    const { id } = useParams();


    const [pState, setState] = useState({
        name: "",
        code: "",
        email: " ",
        role: "",
        PAN: "",
        bankaccno: "",
        ifsccode: ""
    })

    const GetPersonalById = gql`
    query PersonalDetails($id:String!){
        personal(id:$id){
            name
            code
            email
            role
            PAN
            bankaccno
            ifsccode

        }       
    }`;

    const EditingPersonal = gql`
     mutation UpdatePersonal($id: String!){
         updatePersonal(id: $id,data: {
              name:"${pState.name}",
              code:"${pState.code}",
              email:"${pState.email}",
              role:"${pState.role}",
              PAN:"${pState.PAN}",
              bankaccno:"${pState.bankaccno}",
              ifsccode:"${pState.ifsccode}",

               
           })
           {
              respCode, respMessage
                  }
              }
          `;
    // const { loading, error, data } = useQuery(GetPersonalById, { variables: { id: id } });

    // const [EditMutation,] = useMutation(EditingPersonal);
    // if (loading) return <p>Loading....</p>
    // if (error) return <p>ERROR....</p>

    const handleChange = (e) => {
        setState({
            ...pState,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pState);
        // EditMutation({ variables: { id: id } });

    };
    const data= {};

    return (
        <Fragment>
            <Navbar bgColor="grey" color="white">
            Personal Details
                       

                
            </Navbar>
            <Break />
            <Container>
                <Table>
               
<TableRow>
    <TableColumn><Label>Name</Label></TableColumn>
    <TableColumn><Input  /></TableColumn>

</TableRow>
<Break/>
<TableRow>
    <TableColumn><Label>Email</Label></TableColumn>
    <TableColumn><Input type="text"  /></TableColumn>

</TableRow>
<Break />
<TableRow>
    <TableColumn><Label>Role</Label></TableColumn>
    <TableColumn><Input /></TableColumn>
</TableRow>

<Break />
<TableRow>
    <TableColumn><Label>Permanent Account Number</Label></TableColumn>
    <TableColumn><Input type="text" /></TableColumn>

</TableRow>
<Break />
<TableRow>
    <TableColumn><Label>Account no</Label></TableColumn>
    <TableColumn><Input type="text"  /></TableColumn>

</TableRow>
<Break />
<TableRow>
    <TableColumn><Label>Ifsccode</Label></TableColumn>
    <TableColumn><Input type="text"  /></TableColumn>

</TableRow>

                


                    
                </Table>
            </Container>
        </Fragment>
    )
}

                   