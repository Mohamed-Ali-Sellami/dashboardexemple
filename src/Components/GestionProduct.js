import React, { useState } from "react";
import AddProduct from "./AddProduct";
import { useDispatch, useSelector } from "react-redux";

import { deleteproduct, updateproduct } from "../Redux/ProductSlice";

const GestionProduct = ({setping,ping}) => {
  const [showSecond, setshowSecond] = useState(false);
  const [showfirst, setshowfirst] = useState(false);

  const listproduct = useSelector((store) => store.product?.product);
  console.log(listproduct)
  const dispatch = useDispatch();
  const [upproduct, setupproduct] = useState({
    name:"" 
        })
  return (
    <div>
      <div className="box-Gestion">
        <div className="box-tab">
          <h1> Gestion des Produits</h1>

          <div className="addclient">
            <i class="fa-solid fa-user-plus"></i>
            <h2 onClick={() => setshowSecond(!showSecond)}>ADD Products</h2>
          </div>

          {showSecond ? (
            <div className="box-add">
              <AddProduct setshowSecond={setshowSecond} setping={setping} ping={ping}/>{" "}
            </div>
          ) : null}

          <table className="styled-table" border="1" width="100%">
            <thead className="titletab">
              <tr>
                <th>Listes of Products</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {listproduct?.map((data) => (
                <tr>
                  <th>{data?.name}</th>

                  <th className="btn-action">
                    <button className="btn-update" onClick={()=> setshowfirst(true)} >Update</button> 
                    {showfirst? 
                    (<>  <input type="text" placeholder={data.name} onChange={(e)=>setupproduct({name:e.target.value})}/> 
                    <button onClick={()=>dispatch(updateproduct({id:data._id,upproduct:upproduct}))}>ok</button> </>):null}

                    <button className="btn-Delete" onClick={() => (dispatch(deleteproduct(data?._id)),setping(!ping))} >Delete</button>
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

export default GestionProduct;
