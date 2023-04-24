/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol, CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { getAllCarLocationService } from 'src/serivces/carLocation'

const CarLocation = () => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      key: 'carLocatorID',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'carManagementID',
      label: 'Car ID',
      _props: { scope: 'col' },
    },
    {
      key: 'location',
      label: 'Location',
      _props: { scope: 'col' },
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
            <CTable columns={columns} items={dataSource} />
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default CarLocation
