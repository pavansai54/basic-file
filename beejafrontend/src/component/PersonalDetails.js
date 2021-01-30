import React, { Component, Fragment, useState } from 'react'

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
justify-content: center;rms: center;
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
const Label =Styled.label`
font-size:25px
`;
const LinkTag = Styled(Link)` 
color:black; 
text-decoration:none;
`;
const TableHeading = Styled.th`
border: 1px solid #ddd;
height: 10px;
padding:8px;
textrt;
`;


export const PersonalDetails= () => {

    const { id } = useParams();

    const PersonalById = gql`
  query Personal($id:String!){
      personal(id:$id){
          name
          email
          role
          bank
          bankaccno
          ifsccode
          PAN
      }
  }`;

  const {loading,error,data} = useQuery(PersonalById,{variables:{id : id}});
//   if (loading) return <p>Loading!!</p>
//   if (error) return <p>Error%%</p>
    
    return (

        <Fragment>
            <Navbar bgColor="grey" color="white">
            Personal Details
                       

                
            </Navbar>
            <Break />
            <Container>
                <Table>
                <TableRow>


</TableRow>
<Break />
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

                   