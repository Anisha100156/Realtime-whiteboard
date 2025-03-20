import {useState} from "react";
import {useNavigate} from "react-router-dom";
const CreateRoomForm=({uuid,socket,setUser})=>{
    const[roomId,setRoomId]=useState(uuid());
    const[name,setName]= useState("");
    const navigate=useNavigate();
    const handleCreateRoom=(e)=>{
        e.preventDefault();
        const roomData={
            name,
            roomId,
            userId:uuid(),
            host: true,
            presenter: true
        }
        setUser(roomData);
        navigate(`/${roomId}`);
        console.log(roomData);
        socket.emit("userJoined",roomData);
    }

    
    return (
        <form className="form col-md-11as mt-5">
            <div className="form-group">
                <input type="text" className="form-control my-2" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)} >
                </input>
            </div>
            <div className="form-group border bg-gray">
                <div className="input-group d-flex align-items-center justify-content-center">
                    <input type="text" value={roomId} className="form-control my-2" disabled placeholder="Generate Room code"></input>
                    </div>    
                    <div className="input-group-append ">
                       <button className="btn btn-primary btn-sm me-2" onClick={()=>setRoomId(uuid())} type="button">Generate</button>
                       <button className="btn btn-outline-danger btn-sm " type="button">Copy</button>
                    </div>
                

          
            </div>
            <button type="submit" onClick={handleCreateRoom} className="btn btn-primary mt-4 form-control">Generate Room</button>
        </form>
    )
 }
 export default CreateRoomForm;