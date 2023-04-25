/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol } from '@coreui/react'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getAllAcountService } from 'src/services/account'

const MainAccount = () => {
  const [dataSource, setDataSource] = useState([])

  const roleIdFormatter = (cell) => {
    return cell === 1 ? (
      <div style={{ fontWeight: 'bold', color: 'red' }}>Admin</div>
    ) : (
      <div style={{ color: 'blue' }}>Customer</div>
    )
  }

  const columns = [
    {
      field: 'accountID',
      headerName: 'ID',
      flex: 0.2,
      renderHeader: () => <strong>{'ID'}</strong>,
    },
    {
      field: 'accounName',
      headerName: 'Account Name',
      flex: 1,
      editable: false,
      renderHeader: () => <strong>{'Account Name'}</strong>,
    },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      editable: false,
      renderHeader: () => <strong>{'Full Name'}</strong>,
    },

    {
      field: 'accountEmail',
      headerName: 'Email',
      flex: 1,
      editable: false,
      renderHeader: () => <strong>{'Email'}</strong>,
    },
    {
      field: 'phone',
      headerName: 'Contact',
      flex: 1,
      editable: false,
      renderHeader: () => <strong>{'Contact'}</strong>,
    },

    {
      field: 'roleID',
      headerName: 'Role',
      flex: 1,
      editable: false,
      renderHeader: () => <strong>{'Role'}</strong>,
      renderCell: (params) => {
        return roleIdFormatter(params.value)
      },
    },
  ]

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getAllAcountService()
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
            <strong>Main Account</strong>
          </CCardHeader>
          <CCardBody>
            {/* <CTable columns={columns} items={dataSource} /> */}
            <DataGrid
              getRowId={(dataSource) => dataSource.accountID}
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

export default MainAccount
