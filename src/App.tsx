import React, { useEffect, useState } from 'react';
import Table from './Table';
import { DATA_TABLE, HEADER_TABLE, IData } from './utils/const';
import { sortTableHeader } from './utils/global';

function App() {
  const [listTable, setListTable] = useState<IData[]>([])
  const [headerTable, setHeaderTable] = useState<{ name: string, sort: boolean }[]>([])
  const [allStatus, setAllStatus] = useState(false)

  useEffect(() => {
    setListTable(DATA_TABLE.filter((dd) => dd.status === 'Active'))
    setHeaderTable(HEADER_TABLE)
  }, [])

  const sortData = (head: { name: string, sort: boolean }) => {
    const nextList = [...listTable]
    const nextHeader = [...headerTable]

    sortTableHeader(head, nextList, nextHeader, setListTable, setHeaderTable)

  }

  const handleAll = () => {
    setAllStatus(true)
    setListTable(DATA_TABLE)
  }

  const handleReset = () => {
    setListTable(DATA_TABLE.filter((dd) => dd.status === 'Active'))
    setAllStatus(false)
  }

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold underline mb-10">
            PersusX Test
          </h1>
        </div>
        <div>
          {allStatus ? (
            <button onClick={handleReset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Reset
            </button>
          ) : (
            <button onClick={handleAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              All Status
            </button>
          )}
        </div>
      </div>

      {listTable.length > 0 ? (
        <Table header={headerTable} data={listTable} sort={sortData} />
      ) : <span>no data</span>}
    </div>
  );
}

export default App;
