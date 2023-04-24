/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol, CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { getAllAcountService } from 'src/serivces/account'

const MainAccount = () => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      key: 'accountID',
      label: 'Account ID',
      _props: { scope: 'col' },
    },
    {
      key: 'accounName',
      label: 'Acount Name',
      _props: { scope: 'col' },
    },
    {
      key: 'fullName',
      label: 'Full Name',
      _props: { scope: 'col' },
    },
    {
      key: 'password',
      label: 'Password',
      _props: { scope: 'col' },
    },
    {
      key: 'accountEmail',
      label: 'Email',
      _props: { scope: 'col' },
    },
    {
      key: 'phone',
      label: 'Phone',
      _props: { scope: 'col' },
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
            <CTable columns={columns} items={dataSource} />
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default MainAccount
