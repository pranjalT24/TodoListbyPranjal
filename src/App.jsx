import React, { useEffect, useState } from "react";

function App(){
    const [item, setitem] = useState("")
    const [itemlist, setitemlist] = useState([])


    const addItem=()=>{
        setitemlist([...itemlist,item])
    }

    const deleteItem=id=>{
        setitemlist(itemlist.filter((val,ind)=>ind!=id))
    }

    return (
        <>
        <div className="container w-50">
            <h1 className="title bg-dark">Add Your Item</h1>
            <div className="container">
            <div className="input-group mb-3">
  <input type="text" className="form-control mr-2" placeholder="Add Your TODO" aria-label="Add Your TODO" aria-describedby="basic-addon2" value={item} onChange={(e)=>setitem(e.target.value)}  />
  <div className="input-group-append">
    <button className="btn btn-dark" type="button" onClick={()=>addItem()}>ADD</button>
  </div>
</div>
               
            </div>
            <h1 className="title bg-dark">Your Task To DO</h1>
            {
                itemlist.map((val,ind)=>{
                    return <ul class="list-group">
                        <li className="list-group-item d-flex justify-content-between" key={ind}> <span>{val}</span> <button className="btn btn-outline-primary" onClick={()=>deleteItem(ind)}>Delete</button></li>
                        
                    </ul>
                })
            }
        </div>
        </>
        );
}

export default App