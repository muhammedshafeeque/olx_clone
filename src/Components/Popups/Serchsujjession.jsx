import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { FirebaseContext } from '../../Store/Context';
import "./serchsuggesion.css"
import {Modal} from 'react-bootstrap'


function Serchsujjession(props) {

  const { firebase } = useContext(FirebaseContext)
  const serch = props.data
  const [products, setProducts] = useState([])
  const [popup,setPopup]=useState(false)
  const [result,setResult]=useState('')
  
  useEffect(() => {
    
    setProducts([])
    if (serch.length > 0) {
      setPopup(true)
      firebase.firestore().collection('products').get().then((querySnapshot) => {
        const objectsArray = [];
        querySnapshot.forEach((user) => {
          objectsArray.push(user.data());
        });

        setProducts(objectsArray)
      });

    } else {
      setPopup(false)
      setProducts([])
    }
  }, [serch])

  
  return (
    <div className="popup_body">
      {popup ? 
      <Modal.Dialog>
        

        <Modal.Body>
        {products.filter((val) => {
        if (products.length == '') {
          return val
        } else if (val.name.toLowerCase().includes(serch.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div>
          <span onClick={(val)=>{
            setResult(val.name)
            return result
          }}>{val.name}</span>
          
        </div>
      })}
        </Modal.Body>

        
      </Modal.Dialog>
      : ''}

    </div>
  )
  
}

export  default Serchsujjession

