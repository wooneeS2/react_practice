import React from 'react';

//App클래스가 react.component클래스를 상속받도록 extends React.Component를 붙이는 것
//상속 -> 클래스에 다른 클래스의 기능을 추가할 수 있게 해주는 것
class App extends React.Component {

  constructor(props){
    super(props);
    console.log('hello');
  }


  state = {   //객체 형태의 데이터
    count : 0,

  };

  add = () => {
    this.setState(current => ({count: current.count+1,}));
  };

  minus = () => {
    this.setState(current => ({count: current.count -1,}));

    };

    componentDidMount(){
      console.log('Compenent rendered');
    }

    componentDidUpdate(){
      console.log("I just updated");
    }

    componentWillUnmount(){
      console.log("bye-ru");
    }

  render(){
    console.log("I'm rendering");
    console.log('render');
    return(
      <div>
     <h1>the number is: { this.state.count}</h1>
    {/* jsx를 반환하기 위하여 render() 사용 */}
    <button  onClick={this.add}> Add</button>
    <button onClick = {this.minus}>  Minus</button>

    </div>
    );
  }

} 



export default App;