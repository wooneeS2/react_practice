import React from 'react';


class Detail extends React.Component{
    componentDidMount(){
        const{ location, history} = this.props;
    }

    render(){
        return <span>hello</span>;
    }
}


function Detail(props){
    console.log(props);
    return <span>hello</span>
}

export default Detail;