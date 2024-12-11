import React from "react";

type Props = {
    columns?: string[];    
    dataRows?: string[];
    data: Record<string, any>[];
};

const columnEmpty = ["Column 1", "Column 2", "Column 3", "Column 4", "Add more columns"];
const dataRowsEmpty = ["productoId", "nombre", "precio", "fechaCreacion"];
const dataEmpty: Record<string, any> = [
    {
        productoId: "1",
        nombre: "Pera",
        precio: "$50",
        fechaCreacion: "12/02/2024"
    }
];

export default function ListTable({columns, dataRows, data}: Readonly<Props>) {
    return (
        <div className="border border-gray-200 rounded-lg flex items-center justify-between bg-white">
            <div className="rounded-lg overflow-hidden h-auto">
                <table className="w-full table-fixed">
                    <thead className="border-b">
                        <tr className="text-lg">
                            {Array.isArray(columns) && columns.length > 0 ? (
                                columns.map((column, index) => (
                                    <th key={index} className="w-1/4 py-4 px-6 text-left text-gray-400 font-medium">
                                        {column}
                                    </th>
                                ))
                            ) : (
                                columnEmpty.map((column, index) => (
                                    <th key={index} className="w-2/5 py-4 px-6 text-left text-gray-400 font-medium">
                                        {column}
                                    </th>
                                ))
                            )}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {Array.isArray(data) && data.length > 0  && Array.isArray(dataRows) && dataRows.length > 0 ? (
                            data.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-neutral-100">
                                    {
                                        dataRows.map((dataRow, dataRowIndex) => (
                                            <td key={dataRowIndex} className="py-4 px-6 border-b border-gray-200 text-lg">
                                                <span className="block font-semibold">
                                                    {row[dataRow]} 
                                                </span>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        ) : (
                            dataEmpty.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-neutral-100">
                                    {
                                        dataRowsEmpty.map((dataRow, dataRowIndex) => (
                                            <td key={dataRowIndex} className="py-4 px-6 border-b border-gray-200 text-lg">
                                                <span className="block font-semibold">
                                                    {row[dataRow]} 
                                                </span>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
