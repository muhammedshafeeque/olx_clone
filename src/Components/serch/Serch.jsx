
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';

function Serch() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const {setPostDetails}=useContext(PostContext)
  const history=useHistory()
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allpost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      
      setProducts(allpost)
      setLoading(false)

    })
  }, [])
  if(products.length>0){

  }
    return (
        <div>
            <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {loading&&<Loading/>}
          {products.map(product => {
            
            return<div
              className="card"
              onClick={()=>{
                setPostDetails(product)
                history.push('/view')
              }}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.name}</p>
              </div>
              <div className="date">
                <span>{product.CreateDate}</span>
              </div>
            </div>


          })


          }
        </div>
        
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Serch
