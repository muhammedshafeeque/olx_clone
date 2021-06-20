import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import Serchsujjession from '../Popups/Serchsujjession';
import { PostContext } from '../../Store/PostContext';
import LoginPopup from '../Popups/LoginPopup';
import ProfilePopup from '../Popups/ProfilePopup';


function Header() {
  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const [serch, setSerch] = useState('')
  const history = useHistory()
  const { setPostDetails } = useContext(PostContext)
  const [sugesion, setSugesion] = useState(false)





  return (
    <div className="headerParentDiv">

      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input placeholder='Serch location..' type="text" />
          <Arrow></Arrow>
        </div>


        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."

              onChange={(e) => {
                setSerch(e.target.value)
                if (serch.length > 0) {
                  setSugesion(true)
                } else {
                  setSugesion(false)
                }

              }}

              onKeyPress={event => {
                if (event.key === 'Enter') {
                  if (serch.length > 0) {
                    setPostDetails(serch)
                    history.push('/serch')
                  } else {
                    alert('No Data Found')
                  }
                }
              }}
            />

            {sugesion && <Serchsujjession data={serch} />}




          </div>

          <div className="searchAction" onClick={() => {
            if (serch.length > 0) {
              setPostDetails(serch)
              history.push('/serch')
            } else {
              alert('No Data Found')
            }

          }} >
            <Search color="#ffffff"></Search>

          </div>



        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? <ProfilePopup /> : <LoginPopup />}


        </div>
        



        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={() => { history.push('/create') }}>SELL</span>
          </div>
        </div>
      </div>





    </div>
  );
}

export default Header;
