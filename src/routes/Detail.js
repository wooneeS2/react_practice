import { render } from '@testing-library/react';
import React from 'react';


class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state == undefined) {
            history.push('/');      //location.state가 없는 경우 home으로 이동

            //render -> componentDidMount의 순서대로 함수를 실행하기때문에
            // render내에서 location.state.title이 undefined이기 때문에 리다이렉트 작동불가
        }
    }


    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <span>{location.state.title}</span>

            );
        }
        else {
            return null;
            //location.state가 없으면 null 반환
        }

    }
}




export default Detail;