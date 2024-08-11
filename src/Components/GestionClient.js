import React, { useState } from "react";
import AddClient from "./AddClient";
import { useDispatch, useSelector } from "react-redux";
import { deleteclient, updateclient } from "../Redux/ClientSlice";
import UpdateClient from "./UpdateClient";

const GestionClient = ({setping,ping}) => {
  const [showSecond, setshowSecond] = useState(false);
  const [showfirst, setshowfirst] = useState(false);

  const listclient = useSelector((store) => store.client?.client);
  console.log(listclient)
  const dispatch = useDispatch();
  const [upclient, setupclient] = useState({
    name:"" 
        })
  return (
    <div>
      <div className="box-Gestion">
        <div className="box-tab">
          <h1> Gestion des Clients</h1>

          <div className="addclient">
            <i class="fa-solid fa-user-plus"></i>
            <h2 onClick={() => setshowSecond(!showSecond)}>ADD Clients</h2>
          </div>

          {showSecond ? (
            <div className="box-add">
              <AddClient setshowSecond={setshowSecond} setping={setping} ping={ping}/>{" "}
            </div>
          ) : null}

          <table className="styled-table" border="1" width="100%">
            <thead className="titletab">
              <tr>
                <th>Listes of Contacts</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {listclient?.map((data) => (
                <tr>
                  
                  <th>{data?.name}</th>

                  <th className="btn-action">
                    <button className="btn-update" onClick={()=> setshowfirst(true)} >Update</button> 
                    {showfirst? 
                    (<>  
                    <input type="text" placeholder={data.name} onChange={(e)=>setupclient({name:e.target.value})}/> 
                    <button onClick={()=>dispatch(updateclient({id:data._id,upclient:upclient}))}>ok</button>
                     </>):null}

                    <button className="btn-Delete" onClick={() => (dispatch(deleteclient(data?._id)),setping(!ping))} >Delete</button>
                  </th>

                </tr>
                  
              ))}
            </tbody>
          </table>


        </div>
      </div>
    </div>
  );
};

export default GestionClient;
