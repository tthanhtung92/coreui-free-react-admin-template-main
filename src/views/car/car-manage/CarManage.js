/* eslint-disable prettier/prettier */
import { cilLoopCircular } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCol } from '@coreui/react'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getAllCarService } from 'src/services/carManage'
import { changeCarStatusService } from 'src/services/changeCarStatus'

const CarManage = () => {
  const [dataSource, setDataSource] = useState([])
  const [selectedCarId, setSelectedCarId] = useState(0)

  const statusFormatter = (cell) => {
    return cell === 'true' ? (
      <div
        style={{
          color: '#00c853',
          fontWeight: 600,
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Active
        <CButton size="sm" color="danger" onClick={changeStatus}>
          <CIcon icon={cilLoopCircular} />
        </CButton>
      </div>
    ) : (
      <div
        style={{
          color: '#d50000',
          fontWeight: 600,
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Disabled
        <CButton size="sm" color="success" onClick={changeStatus}>
          <CIcon icon={cilLoopCircular} />
        </CButton>
      </div>
    )
  }

  const columns = [
    {
      field: 'carManagementID',
      headerName: 'ID',
      flex: 0.2,
      headerAlign: 'left',
      renderHeader: () => <strong>{'ID'}</strong>,
    },
    {
      field: 'carBrand',
      headerName: 'Brand',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Brand'}</strong>,
    },

    {
      field: 'carName',
      headerName: 'Car Name',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Car Name'}</strong>,
    },
    {
      field: 'carColor',
      headerName: 'Car Color',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Car Color'}</strong>,
    },

    {
      field: 'licensePlates',
      headerName: 'License Plates',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'License Plates'}</strong>,
    },

    {
      field: 'status',
      headerName: 'Car Status',
      flex: 1,
      headerAlign: 'left',
      editable: false,
      renderHeader: () => <strong>{'Car Status'}</strong>,
      renderCell: (params) => {
        return statusFormatter(params.value)
      },
    },
  ]

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getAllCarService()
    if (res.status === 200) {
      const car = res.data
      const newData = car.map((item, i) => ({
        ...item,
        status: res.data[i].status.toString(),
      }))
      console.log(newData)
      setDataSource(newData)
    }
  }

  const changeStatus = async () => {
    const res = await changeCarStatusService(selectedCarId)
    if (res.status === 200) {
      window.location.reload()
    }
  }

  const onMouseHover = (e) => {
    const rowId = Number(e.currentTarget.dataset.id)
    setSelectedCarId(rowId)
  }

  return (
    <div>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Car Manage</strong>
          </CCardHeader>
          <CCardBody>
            <DataGrid
              getRowId={(dataSource) => dataSource.carManagementID}
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
              componentsProps={{
                row: {
                  onMouseEnter: onMouseHover,
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default CarManage
