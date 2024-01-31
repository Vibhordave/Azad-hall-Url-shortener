import React from 'react';
import { useTable } from 'react-table';
import { IoCopy } from "react-icons/io5";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
function Dashboard() {
  const data = React.useMemo(
    () => [
      {
        shortLink: 'bit.ly/123',
        originalLink: 'https://example.com',
        qrCode: 'QR Code 1',
        clicks: 100,
        status: 'Inactive',
        date: '2022-01-01',
      },
      {
        shortLink: 'bit.ly/123',
        originalLink: 'https://example.com',
        qrCode: 'QR Code 1',
        clicks: 100,
        status: 'Active',
        date: '2022-01-01',
      },
      {
        shortLink: 'bit.ly/123',
        originalLink: 'https://example.com',
        qrCode: 'QR Code 1',
        clicks: 100,
        status: 'Active',
        date: '2022-01-01',
      },
      {
        shortLink: 'bit.ly/123',
        originalLink: 'https://example.com',
        qrCode: 'QR Code 1',
        clicks: 100,
        status: 'Active',
        date: '2022-01-01',
      },
      {
        shortLink: 'bit.ly/123',
        originalLink: 'https://example.com',
        qrCode: 'QR Code 1',
        clicks: 100,
        status: 'Active',
        date: '2022-01-01',
      },
      
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Short Link',
        accessor: 'shortLink', // accessor is the "key" in the data
      },
      {
        Header: 'Original Link',
        accessor: 'originalLink',
      },
      {
        Header: 'QR Code',
        accessor: 'qrCode',
      },
      {
        Header: 'Clicks',
        accessor: 'clicks',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <table {...getTableProps()} style={{ width: '100%', margin: '5rem 0', alignItems: 'center' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ backgroundColor: '#181E29' }}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ border: '1px solid #353C4A' }}>
              {row.cells.map(cell => {
  return (
    <td {...cell.getCellProps()} style={{ margin: 'auto', padding: 'auto', textAlign: 'center' }}>
      {cell.column.id === 'status' ? (
        cell.value === 'Active' ? 
          <span style={{ color: 'green' }}><FaCheckCircle /> {cell.render('Cell')}</span> : 
          <span style={{ color: 'red' }}><FaTimesCircle /> {cell.render('Cell')}</span>
      ) : cell.render('Cell')}
      {cell.column.id === 'shortLink' && (
        <button onClick={() => copyToClipboard(cell.value)} style={{ marginLeft: '10px', backgroundColor: '#181E29' }}>
          <IoCopy />
        </button>
      )}
    </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Dashboard;