/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol, CTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { getAllAcountService } from 'src/serivces/account'

const MainAccount = () => {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      key: 'accountID',
      label: '#',
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
      label: 'Pass WORD',
      _props: { scope: 'col' },
    },
    {
      key: 'accountEmail',
      label: 'Email',
      _props: { scope: 'col' },
    },
  ]

  useEffect(() => {
    getAllAccount()
  }, [])

  const getAllAccount = async () => {
    const res = await getAllAcountService()
    if (res.status === 200) {
      setDataSource(res.data)
    }
    console.log(res)
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
