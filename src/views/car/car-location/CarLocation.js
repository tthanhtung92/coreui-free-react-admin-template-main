/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol } from '@coreui/react'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getAllCarLocationService } from 'src/services/carLocation'

const CarLocation = () => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      field: 'carLocatorID',
      headerName: 'ID',
      flex: 0.1,
      renderHeader: () => <strong>{'ID'}</strong>,
    },
    {
      field: 'location',
      headerName: 'Coordinates',
      flex: 1,
      editable: false,
      renderHeader: () => <strong>{'Coordinates'}</strong>,
    },
  ]

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getAllCarLocationService()
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
            <strong>Car Location</strong>
            {/* <small>Hoverable rows</small> */}
          </CCardHeader>
          <CCardBody>
            <DataGrid
              getRowId={(dataSource) => dataSource.carLocatorID}
              rows={dataSource}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection={false}
              disableRowSelectionOnClick
            />
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default CarLocation
