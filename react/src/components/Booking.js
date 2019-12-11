import React,{useState,useEffect} from "react";
import logo from "./../logo.svg";
import { Table,Section,Container,Media,Heading,Content,Image, Columns, Card, Button } from "react-bulma-components";
import { getSingerQuery} from "../queries/queries";
import {flowRight as compose } from "lodash";
import Swal from "sweetalert2";
import { graphql } from "react-apollo";
import Example from "./Calendar";
import {Form,Col,Row} from 'react-bootstrap';
import { createUserMutation} from "../queries/mutations";
import { Link } from "react-router-dom";
import { loginUserMutation } from "../queries/mutations";
import {getUsersQuery,getUserQuery} from "../queries/queries";
import {toBase64, nodeServer} from "../Function.js";

const Booking = props => {



  console.log(props);
	const data = props.data;
  const singer = props.getSingerQuery.getSinger ? props.getSingerQuery.getSinger: [];

	const user = props.getUserQuery.getUser ? props.getUserQuery.getUser: [];




///for create username


 
const [username, setUserName] = useState(localStorage.getItem("username"));
  

	return (

<div>
<Columns>

<Columns.Column size={8}>
   <Card id="projbook" className="shadow">
      <Card.Image size="4by3" src={nodeServer() +singer.imageLocation} />

        
      <Card.Content>
        <Media>
         <h3><strong>{singer.name}</strong></h3>
       
        </Media>
        <Content>

          {singer.description}
         
        </Content>
       
    
      

      </Card.Content>
    </Card>
    </Columns.Column>

    <Columns.Column size={4}>

      
        <Card id="dash">
      <Card.Header>
        <Card.Header.Title>Dashboard</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
        
          <Media.Item>
            <Heading size={4}>Create Transaction</Heading>
       
          </Media.Item>
        </Media>
        <Content>
      
        <br/>
          User: {username}
         <br/>
          Chosen Singer: {singer.name}
          <br />
          Event date: <input type="date" />

           <br />
       


          
        </Content>
      </Card.Content>
      <Card.Footer id="footer">
        <Card.Footer.Item renderAs="a" href="/transaction">Proceed</Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="/">Cancel</Card.Footer.Item>
        
      </Card.Footer>
    </Card>
    </Columns.Column>
   
</Columns>
</div>
		);
};

export default compose(

  graphql(getUsersQuery,{ name: "getUsersQuery"}),
  graphql(createUserMutation,{ name: "createUserMutation"}),
  graphql(loginUserMutation,{ name: "loginUserMutation"}),
	graphql(getSingerQuery, {
    options: props => {
      // retrieve the wildcard id param
      console.log(props.match.params.id);
      return {
        variables: {
          id: props.match.params.id
        }
      };
    },
    name: "getSingerQuery"
  }),

    graphql(getUserQuery, {
    options: props => {
      // retrieve the wildcard id param
      console.log(props.match.params.id);
      return {
        variables: {
          id: props.match.params.id
        }
      };
    },
    name: "getUserQuery"
  })
	)(Booking);

