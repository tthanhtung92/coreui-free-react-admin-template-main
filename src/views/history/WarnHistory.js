/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol, CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { getAllHistoryService } from 'src/serivces/history'

const WarnHistory = () => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      key: 'accountID',
      label: 'Account ID',
      _props: { scope: 'col' },
    },
    {
      key: 'carManagementID',
      label: 'Car ID',
      _props: { scope: 'col' },
    },
    {
      key: 'historyName',
      label: 'Notification Content',
      _props: { scope: 'col' },
    },
    {
      key: 'historyDate',
      label: 'Warning Time',
      _props: { scope: 'col' },
    },
  ]

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getAllHistoryService()
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
            <strong>Warning History</strong>
          </CCardHeader>
          <CCardBody>
            <CTable columns={columns} items={dataSource} />
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default WarnHistory
