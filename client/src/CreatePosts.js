import { Button,Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
// import {useEffect} from "react";
import axios from "axios";

function CreatePost(){
    const Navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: "",
    });
    const handleChange = (event) => {
        const{name, value} = event.target;

        setPost(prev => {
            return({
                ...prev,
                [name]: value,
            });
        });
    };

    //useEffect(() => {
    //    console.log(post);
    //}, [post]);

    const handleClick = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:3001/create", post)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

            Navigate("posts");
    };
    return(
        <div style={{width:"50%", margin:"auto auto", textAlign:"center", paddingTop:"5rem"}}>
            <h1 style={{paddingBottom:"2rem"}}>Create a post</h1>
            <Form>
                <Form.Group>
                    <Form.Control 
                        name="title" 
                        value={post.title}
                        placeholder="Title" 
                        style={{marginBottom:"1rem"}} 
                        onChange={handleChange}>
                    </Form.Control>
                    <Form.Control 
                        name="description" 
                        value={post.description}
                        placeholder="Description" 
                        style={{marginBottom:"1rem"}} 
                        onChange={handleChange}>
                    </Form.Control>
                </Form.Group>
                <Button variant="outline-success" style={{width:"100%", marginBottom:"1rem"}} onClick={handleClick}>CREATE POST</Button>
            </Form>
            <Button variant="outline-dark" style={{width:"100%"}} onClick={() => Navigate(-1)}>BACK</Button>
        </div>
    );
}

export default CreatePost;