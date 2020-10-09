import React from 'react';
import PropTypes from 'prop-types';


function Food({name,picture,rating}){
  
  return (
  <div>
  <h2> I like {name} </h2>;
  <img src={picture} alt={name}/>
  <h4> {rating}/10.0</h4>
  </div>
  );
}

const foodILike=[

  { id:1, 
    // 키 추가,  리액트의 원소들은 유일해야하는데, 리액트 원소가 리스트에 포함되면서 유일성이 없어져서  크롬-콘솔에 경고창 표시
    //리액트에게 컴포넌트가 서로 다르다는 것을 알려주는 방법 -> 컴포넌트에 key props 추가
    name: "kimchi",
    image: "https://image.dongascience.com/Photo/2018/10/9948830a5a47412e6388389467fda941.jpg",
    rating: 5,
  },
  { 
    id:2,
    name: "albob",
  image: "https://mblogthumb-phinf.pstatic.net/MjAxODAzMTRfMTQ2/MDAxNTIxMDMxNjg1NTI0.8NOE9hZchmC7ZM6n-aLpsbmKuzy25BjJuKNWBtiiSR4g.EaSgpKOUBSoUa8cWWENTCpG53Az6Z_zVLphJSaGRISgg.JPEG.o_ovdbwls/1521031465495.jpg?type=w800",
    rating:10,
  },
  { id:3,
    name: "nibbongnebbong",
  image: "https://t1.daumcdn.net/cfile/blog/263592485805C4B618",
  rating:10,
  },
  {id:4,  
    name:"pudding",
    image: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fblog.daum.net%2Fnanhi1%2F122&psig=AOvVaw2NQNpmKuyiFa1ZRvHBHDBh&ust=1602320304167000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCSwbaSp-wCFQAAAAAdAAAAABAG",
    rating:8,
  }



];





//App 컴포넌트 정의
function App() {
  return( <div>
   {foodILike.map(dish=>(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
   ))}
    </div>
  );
}
//html을 반환중인 App 컴포넌트

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
  // isRequired가 없으면,필수가 아닌 항목이됨. 다만 값이 들어오면 number여야함.
};


export default App;
