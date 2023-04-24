/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol, CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { getAllCarService } from 'src/serivces/carManage'

const CarManage = () => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      key: 'carManagementID',
      label: 'Car ID',
      _props: { scope: 'col' },
    },
    {
      key: 'carName',
      label: 'Car Name',
      _props: { scope: 'col' },
    },
    {
      key: 'carBrand',
      label: 'Brand',
      _props: { scope: 'col' },
    },
    {
      key: 'carColor',
      label: 'Color',
      _props: { scope: 'col' },
    },
    {
      key: 'licensePlates',
      label: 'License Plate',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: 'Status',
      _props: { scope: 'col' },
    },
    {
      key: 'carlocators',
      label: 'Location',
      _props: { scope: 'col' },
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
    // console.log(res.data)
  }

  return (
    <div>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Car Manage</strong>
          </CCardHeader>
          <CCardBody>
            <CTable columns={columns} items={dataSource} />
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default CarManage
