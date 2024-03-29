
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const EditpageDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.imputText}  />
    const inputTemplate2 = (rowData, { rowIndex }) => <InputText value={rowData.Input2}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="name" header="Name"  style={{ minWidth: "8rem" }} />
            <Column field="imputText" header="Input1" body={inputTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="Input2" header="input2" body={inputTemplate2} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default EditpageDataTable;