import React ,{ Component } from 'react';
import Swiper  from '../../common/swiper';
import List from './components/list';
import {
    MainWrapper,
    MainLeft,
    More,
    MainRight,
} from './style'
class Home extends Component{
    render(){
        return(
            <MainWrapper>
                <MainLeft>
                    <Swiper></Swiper>
                    <List></List>
                    <More>阅读更多</More>
                </MainLeft>
                <MainRight>
                  fsfsf
                </MainRight>
            </MainWrapper>
        )
    }
}

export default Home;