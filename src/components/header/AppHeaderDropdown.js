import { cilExitToApp } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CAvatar, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'src/contexts/AuthProvider'
import avatar from './../../assets/images/avatars/profile.png'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const { setUserProfile } = useAuth()
  const logOut = () => {
    localStorage.clear()
    setUserProfile(null)
    setTimeout(() => {
      navigate('/login')
    }, 200)
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-2" placement="bottom-end">
        <CDropdownItem href="#" onClick={() => logOut()}>
          <CIcon icon={cilExitToApp} className="me-2" />
          Loggout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
