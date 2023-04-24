/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol, CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { getAllSubAccountService } from 'src/serivces/subAccount'

const SubAccount = () => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      key: 'accountID',
      label: 'Main Account ID',
      _props: { scope: 'col' },
    },
    {
      key: 'subAccountID',
      label: 'Sub Account ID',
      _props: { scope: 'col' },
    },
    {
      key: 'subAccountName',
      label: 'Full Name',
      _props: { scope: 'col' },
    },
    {
      key: 'subAccountPhone',
      label: 'Phone',
      _props: { scope: 'col' },
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
            <CTable columns={columns} items={dataSource} />
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default SubAccount
