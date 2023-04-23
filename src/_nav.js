import { cilCarAlt, cilClock, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Account',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Main Account',
        to: '/account/main-account',
      },
      {
        component: CNavItem,
        name: 'Sub Account',
        to: '/account/sub-account',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Car',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Car Manage',
        to: '/car/car-manage',
      },
      {
        component: CNavItem,
        name: 'Car Location',
        to: '/car/car-location',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Warning History',
    to: '/history',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
  },
]

export default _nav
