import React from 'react';
import { DataGrid } from '@material-ui/data-grid';






const columns = [

    { field: 'id', headerName: 'ID', width: 100, },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 140,

        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            }`,
    },
];


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 89 },
    { id: 6, lastName: 'Melisandre', firstName: 'Sherlock', age: 70 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Robert', firstName: 'Holland', age: 35 },
    { id: 11, lastName: 'Alex', firstName: "D'souza", age: 80 },
    { id: 12, lastName: 'John', firstName: 'Shelby', age: 23 },
    { id: 13, lastName: 'Selena', firstName: 'Cook', age: 35 },
    { id: 14, lastName: 'Hans', firstName: 'Chang', age: 65 },
    { id: 15, lastName: 'Kim', firstName: 'Feng', age: 34 },
];

export default function Table() {





    return (

        <div style={{ height: 400, width: "90%", margin: 20, padding: 20 }}>
            <h1><strong>The name of our contributors are</strong></h1>
            <DataGrid
                rows={rows}
                columns={columns}

                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
