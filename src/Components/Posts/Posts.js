import React,{useState,useEffect,useContext} from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { useHistory } from 'react-router-dom';
import './Post.css';

function Posts() {
   const {firebase} = useContext(FirebaseContext)
   const [products,setProducts] = useState([])
   const {setPostDetails} = useContext(PostContext)
   const history = useHistory()
   useEffect(()=>{
          firebase.firestore().collection('Products').get().then((snapshot)=>{
           const allPosts = snapshot.docs.map((product)=>{
             return{
               ...product.data(),
               id:product.id
             }

           })
           setProducts(allPosts)
          })
   },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         
         {products.map(product=>{

        return <div
            className="card" 
            onClick={()=>{
              setPostDetails(product)
                history.push("/ViewPost")
            
            }}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdDate}</span>
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
            
        { products.map(product=>{
        
        return <div className="card">
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image"> 
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {product.price}</p>
          <span className="kilometer">{product.category}</span>
          <p className="name"> {product.name}</p>
        </div>
        <div className="date">
          <span>{product.createdDate}</span>
        </div>
      </div>



        })



          
         } 
        </div>
      </div>
    </div>
  );
}

export default Posts;
