import styled from 'styled-components';

export const Wrapper=styled.div`
    width:100%;
    height:270px;
    margin-bottom:10px;
    .swiper-container{
        border-radius:10px;
    }
    .swiper-slide img{
        width:100%;
        height:100%;
       
    }
    .swiper-pagination-bullet{
        width:20px;
        height:2px;
        opacity:1;
        border-radius: 0;
        background:#999;
    }
    .swiper-pagination-bullet-active{
        background:#fff;
    }
`