import React from "react";
import ProductIcon from "../icons/ProductIcon.tsx";

type Props = {
    headerTitle?: string;
    dataLength: number
  };
  
export default function ListHeader({ headerTitle, dataLength}: Readonly<Props>) {
return (
    <div className="border border-gray-200 rounded-lg flex items-center justify-between bg-white "> 
        <div className="m-4 h-auto p-2 text-primary">
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
    </div>

);
}