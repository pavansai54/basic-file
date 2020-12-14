import React, { Component, Fragment } from 'react';
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// import history from './../History';
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
text-align: left;
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
const TriangleButton =Styled(Actionbutton)`
border-left: 7px solid transparent;
border-right:7px solid transparent;
border-top: 6px dashed;
`;
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`;
export const listofemployee =()=> {
        return (
            <Fragment>
                {/* <Navbar bgColor="powderblue" color="black">
                    <Logo src={require("../images/Logo.png")} /> Beeja
                </Navbar> */}
                <Navbar bgColor="grey" color="white">
                    List of Employee
                    <Button >
                        <LinkTag to ={"/adding"}>Add Employee</LinkTag>
                        </Button>
                </Navbar>
                <Break />
                <Container>
                    <Table>
                        <TableRow>
                            <TableHeading> S.No</TableHeading>
                            <TableHeading>Employee Name</TableHeading>
                            <TableHeading>Role</TableHeading>
                            <TableHeading>Department</TableHeading>
                            <TableHeading>Join Date</TableHeading>
                            <TableHeading> </TableHeading>
                        </TableRow>
                        <TableRow>
                            <TableData>1.</TableData>
                            <TableData>shiva</TableData>
                            <TableData>it</TableData>
                            <TableData>EEE</TableData>
                            <TableData>8989898</TableData>
                            <TableData >
                                    <Actionbutton ><TriangleButton/></Actionbutton>
                            </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>2</TableData>
                            <TableData>shiva</TableData>
                            <TableData>it</TableData>
                            <TableData>EEE</TableData>
                            <TableData>8989898</TableData>
                            <TableData> </TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>3.</TableData>
                            <TableData>shiva</TableData>
                            <TableData>it</TableData>
                            <TableData>EEE</TableData>
                            <TableData>8989898</TableData>
                            <TableData> </TableData>
                        </TableRow><TableRow>
                            <TableData>1.</TableData>
                            <TableData>shiva</TableData>
                            <TableData>it</TableData>
                            <TableData>EEE</TableData>
                            <TableData>8989898</TableData>
                            <TableData> </TableData>
                        </TableRow><TableRow>
                            <TableData>1.</TableData>
                            <TableData>shiva</TableData>
                            <TableData>it</TableData>
                            <TableData>EEE</TableData>
                            <TableData>8989898</TableData>
                            <TableData> </TableData>
                        </TableRow><TableRow>
                            <TableData>1.</TableData>
                            <TableData>shiva</TableData>
                            <TableData>it</TableData>
                            <TableData>EEE</TableData>
                            <TableData>8989898</TableData>
                            <TableData> </TableData>
                        </TableRow>
                    </Table>
                </Container>
                </Fragment>
        )
    }