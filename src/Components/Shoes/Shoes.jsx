import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";

const Shoes = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getItem())
  }, [])
  const getItems = useSelector((store) => store.shoes.getItems)

  return <div>{getItems.map((j) => {
    return (
      <div>
        <img src={j.image} />
        {j.name}
      </div>
    )
  })}</div>;
};

export default Shoes;
