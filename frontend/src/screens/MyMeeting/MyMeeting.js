import React, { useEffect, useState } from "react";
import axios from 'axios';
import MainScreen from '../../components/MainScreen';
import {Link} from "react-router-dom";
import {Accordion,Button,Card,Badge} from "react-bootstrap";

const MyMeeting = () => {
  const [meeting,setMeeting]= useState([])
    const deleteHandler=(id)=>{
        if(window.confirm("are you sure?")){
        }
    };

  const fetchdata=async()=>{
    const {data}=await axios.get('/api/meeting');
    setMeeting(data);
  } ;
  console.log(meeting);
useEffect(()=>{
  fetchdata();

},[])
    
  return (
    <MainScreen title='Welcome for user...'>
  <Link to="createOne">
  <Button style={{marginLeft:10, marginBottom:6}} size='lg'>
    Create a new Meeting
  </Button>
   </Link>
  {
    meeting.map(meet=>(
   <Accordion key={meeting._id}>
   <Card style={{margin:10}}>
  <Card.Header style={{display:'flex'}}>
    <span style={{
        color:'black',
        textDecoration:'none',
        flex:1,
        cursor:'pointer',
        alignSelf:'center',
        fontSize:18,
        }}>
        {meet.title}</span>

<div>
    <Button herf={'/meet/${meet._id'}>Edit</Button>
    <Button variant='danger' className='mx-2'
    onClick={()=>deleteHandler(meet.id)}>Delete</Button>
</div>

</Card.Header>
<Card.Body>
<h4>
    <Badge variant='success'>
       category - {meet.category}
    </Badge>
</h4>
    <blockquote className="blockquote mb-0">
          <p>
          {meet.content}
          </p>
             <footer className="blockquote-footer">
              Created On - data
              </footer>
        </blockquote>
</Card.Body>
  </Card>
  </Accordion>

    ))
  }
     
   
    </MainScreen>
 
    
  );
};

export default MyMeeting;