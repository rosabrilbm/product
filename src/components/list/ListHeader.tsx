import React from "react";
import ProductIcon from "../icons/ProductIcon.tsx";
import { NavLink } from "react-router-dom";

type Props = {
    headerTitle?: string;
    dataLength: number
  };
  
export default function ListHeader({ headerTitle, dataLength}: Readonly<Props>) {
return (
    <div className="border border-gray-200 rounded-lg flex items-center justify-between bg-white px-4"> 
        <div className="m-4 h-auto">
            <h1 className="font-bold  text-3xl text-cyan-600">
                {headerTitle ? headerTitle : "Titulo"}
            </h1>
            <div className="flex pt-5">
                <div className="mr-4"><ProductIcon/></div>
                <span className="text-lg font-semibold text-primary">
                    {dataLength > 1 ? (
                        `${dataLength} productos en stock`
                    ) : (
                        dataLength === 1 ? "1 producto en stock" : "0 productos en stock"
                    )}
                </span>
            </div>
        </div>
        <NavLink to="/AddProduct">
            <button className="p-4 border-b rounded-2xl border-cyan-700 font-semibold bg-cyan-600 hover:bg-cyan-700 hover:text-cyan-50">
                Añadir producto
            </button>
        </NavLink>

    </div>

);
}