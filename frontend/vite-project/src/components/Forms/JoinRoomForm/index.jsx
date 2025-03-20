import {useState} from "react";//
import {useNavigate} from "react-router-dom";
const JoinRoomForm=({uuid,socket,setUser})=>{
    const [roomId,setRoomId]=useState("");
    const [name,setName]=useState("");
    const navigate=useNavigate();
    const handleRoomJoin=(e)=>{
        e.preventDefault();
        const roomData={
            name,roomId,userId:uuid(),host:false,presenter:false,
        };
        setUser(roomData);
        navigate(`/${roomId}`);
        socket.emit("userJoined",roomData);
    }
   return (
    <form className="form col-md-11as mt-5">
    <div className="form-group">
        <input type="text" className="form-control my-2" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}>
        </input>
    </div>
    <div className="form-group">
       
            <input type="text" className="form-control my-2"  placeholder="Enter Room code" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
              
           
  
    </div>
    <button type="submit" onClick={handleRoomJoin} className="btn btn-primary mt-4 form-control">Join Room</button>
</form>
   )
}
export default JoinRoomForm;