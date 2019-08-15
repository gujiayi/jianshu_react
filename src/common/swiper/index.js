import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import * as actionCreates from './store/actionCreates'
import { connect } from 'react-redux';
import {
    Wrapper
} from './style'
class SwiperWrapper extends Component {
    componentDidMount(){
        new Swiper('.swiper-container', {
            loop: true,//这里是自动轮播
            autoplay:{
                delay:3000 , 
                disableOnInteraction: false
            },
            pagination : {
                el:'.swiper-pagination',//这里是分页器设置
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        });
    }
    
    render() {
        const {carouselr,mouseEnter,MouseLeave}=this.props;
        return (
            <Wrapper>
                <div
                 className="swiper-container"
                 onMouseEnter={mouseEnter}
                 onMouseLeave={MouseLeave}
                 >
                    <div className="swiper-wrapper">
                        {
                           carouselr.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <img src={item.get('picUrl')} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='swiper-pagination'></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </Wrapper>

        )
    }
}
const mapState=(state)=>({
    carouselr:state.getIn(['swiper','carouselr']),
    mouseIn:state.getIn(['swiper','mouseIn'])
});
const mapDispatch=(dispatch)=>({
    mouseEnter(){
        dispatch(actionCreates.mouse_Enter())
    },
    MouseLeave(){
        dispatch(actionCreates.mouse_Leave())
    }
})
export default connect(mapState,mapDispatch)(SwiperWrapper);