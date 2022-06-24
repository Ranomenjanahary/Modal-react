import React from "react";
import { useState } from "react";
import clients from "./Requets";

export default function Modal({ show , closeModalHandler}){
    const [Name, setname] = useState('');
    const [Username, setUsername] = useState('');
    const [Address, setAddress] = useState('');
    const [Email, setEmail] = useState('');
    const [posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(Username, Name,Email,Address);
    };

    const addPosts = (Username, Name,Email,Address) => {
        clients
            .post('https://jsonplaceholder.typicode.com/users', {
                username : Username,
                Name : Name ,
                Email : Email,
                Address : Address
            })
            .then((response) => {
                setPosts([response.data, ...posts]);
            });
        setname('');
        setUsername('');

    };

    const Take =(e)=>{
        setname(e.target.value);
    }
    const Take1 =(e)=>{
        setUsername(e.target.value);
    }
    const Take2 =(e)=>{
        setEmail(e.target.value);
    }
    const Take3 =(e)=>{
        setAddress(e.target.value);
    }


    return(
        <>
            <div className="modal-one"
                 style={{
                     transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
                     opacity: show ? '1' : '0'
                 }}
            >
                <div className="modal-two" onClick={closeModalHandler}>
                    <b className="add" >Add</b>
                    <span className="close-modal-btn"onClick={closeModalHandler} >Cancel</span>
                </div>
                <div className="modal-three">
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={Take} placeholder="Name"/>
                            <input type="text" onChange={Take1} placeholder="Username"/>
                            <input type="text" onChange={Take2} placeholder="Email"/>
                            <input type="text" onChange={Take3}  placeholder="adress"/>
                            <button className="btn-cancel" >Add User</button>
                        </form>

                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        </>
    )
}