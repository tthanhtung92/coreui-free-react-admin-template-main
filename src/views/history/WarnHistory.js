/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol } from '@coreui/react'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getAllHistoryService } from 'src/services/history'

const WarnHistory = () => {
  const [dataSource, setDataSource] = useState([])

  const statusFormatter = (cell) => {
    return cell === true ? (
      <div
        style={{
          color: '#00c853',
          fontWeight: 600,
        }}
      >
        Successful
      </div>
    ) : (
      <div
        style={{
          color: '#d50000',
          fontWeight: 600,
        }}
      >
        Unsuccessful
      </div>
    )
  }

  const columns = [
    {
      field: 'historyID',
      headerName: 'ID',
      flex: 0.2,
      headerAlign: 'left',
      renderHeader: () => <strong>{'ID'}</strong>,
    },
    {
      field: 'historyName',
      headerName: 'Notification Content',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Notification Content'}</strong>,
    },
    {
      field: 'historyDate',
      headerName: 'Date Time',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      type: 'dateTime',
      renderHeader: () => <strong>{'Date Time'}</strong>,
      valueGetter: ({ value }) => value && new Date(value),
    },

    {
      field: 'historyStatus',
      headerName: 'Status',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Status'}</strong>,
      renderCell: (params) => {
        return statusFormatter(params.value)
      },
    },
  ]

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getAllHistoryService()
    if (res.status === 200) {
      const resHistory = res.data
      const newData = resHistory.map((item, i) => ({
        ...item,
        historyDate: new Date(Date.parse(res.data[i].historyDate)).toString().slice(0, 24),
      }))
      console.log(newData)
      setDataSource(newData)
    }
    // console.log(res.data)
  }

  return (
    <div>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Warning History</strong>
          </CCardHeader>
          <CCardBody>
            <DataGrid
              getRowId={(dataSource) => dataSource.historyID}
              rows={dataSource}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              checkboxSelection={false}
              disableRowSelectionOnClick
            />
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default WarnHistory
