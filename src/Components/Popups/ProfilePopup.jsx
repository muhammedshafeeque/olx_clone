import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useContext } from 'react';
import { AuthContext, FirebaseContext} from '../../Store/Context';
import { useHistory } from 'react-router-dom';
function ProfilePopup() {
  const { user } = useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()
    return (
        <div>
      <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" >
          {user.displayName}
          </DropdownToggle>
          <DropdownMenu>
              <DropdownItem tag="a" href="#"><div>
                {user.Phone}
              </div></DropdownItem>
              <DropdownItem tag="a" href="#"><div>
                My Add
              </div></DropdownItem>
              <DropdownItem tag="a" href="#"><div>
                My Buisiness Pakages
              </div></DropdownItem>
              <DropdownItem tag="a" href="#"><div>
                Settings
              </div></DropdownItem>
              <DropdownItem tag="a" href="#"><div>
                Help
              </div></DropdownItem>
              <DropdownItem tag="a" href="#"><div>
              {user && <span onClick={() => {
          firebase.auth().signOut()
          history.push('/')
        }}>Logout</span>}
              </div></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        </div>
    )
}

export default ProfilePopup
