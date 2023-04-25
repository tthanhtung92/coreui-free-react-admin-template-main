/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol } from '@coreui/react'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getAllSubAccountService } from 'src/services/subAccount'

const SubAccount = () => {
  const [dataSource, setDataSource] = useState([])

  const columns = [
    {
      field: 'accountID',
      headerName: 'Main Account ID',
      flex: 0.4,
      headerAlign: 'left',
      renderHeader: () => <strong>{'Main Account ID'}</strong>,
    },
    {
      field: 'subAccountID',
      headerName: 'Sub Account ID',
      flex: 0.4,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Sub Account ID'}</strong>,
    },
    {
      field: 'subAccountName',
      headerName: 'Full Name',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Full Name'}</strong>,
    },

    {
      field: 'subAccountPhone',
      headerName: 'Phone',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Phone'}</strong>,
    },
  ]

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getAllSubAccountService()
    if (res.status === 200) {
      setDataSource(res.data)
    }
    console.log(res.data)
  }

  return (
    <div>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sub Account</strong>
          </CCardHeader>
          <CCardBody>
            <DataGrid
              getRowId={(dataSource) => dataSource.subAccountID}
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

export default SubAccount
