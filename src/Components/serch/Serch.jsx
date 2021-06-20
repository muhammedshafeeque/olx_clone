
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';

function Serch() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const { setPostDetails } = useContext(PostContext)
  const { postDetails } = useContext(PostContext)
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    firebase.firestore().collection('products').get().then((querySnapshot) => {
      const objectsArray = [];
      querySnapshot.forEach((user) => {
        objectsArray.push(user.data());
      });

      setProducts(objectsArray)
      setLoading(false)
    });
  }, [])

  return (

    <div>
      {loading && <Loading />}
      <div className="postParentDiv">
        
        <div className="recommendations">
          <div className="heading">
            <span>Serch Results</span>
          </div>
          <div className="cards">
            {products.filter((val) => {
              if (postDetails === '') {
                return <div>No results awailable</div>
              } else if (val.name.toLowerCase().includes(postDetails.toLowerCase())) {
                return val
              }

            }).map((val, key) => {
              return <div
                className="card"
                onClick={() => {
                  setPostDetails(val)
                  history.push('/view')
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={val.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {val.price}</p>
                  <span className="kilometer">{val.category}</span>
                  <p className="name">{val.name}</p>
                </div>
                <div className="date">
                  <span>{val.CreateDate}</span>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Serch
