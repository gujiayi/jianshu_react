import styled from 'styled-components';

export const MainWrapper=styled.div`
    width:950px;
    overflow:hidden;
    margin:30px  auto 0;
`
export const MainLeft=styled.div`
    float:left;
    width:625px;
`
export const MainRight=styled.div`
    float:right;
    width:280px;
`
export const ListWrapper=styled.div`
    width:100%;
    overflow:hidden;
    padding:25px 0;
    border-bottom:1px solid #999;
`
export const ListLeft=styled.div`
    float:left;
    width:460px;
    &.widthL{
        width:100%
    }
`
export const ListTitle=styled.h1`
    font-size:18px;
    font-weight:bold;
    line-height:30px;
    margin-bottom:5px;
   
`
export const ListContent=styled.p`
   color:#999;
   font-size:13px;
   line-height:22px;
   display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`
export const ListMate=styled.h1`
    font-size:11px;
    .iconfont{
        vertical-align:middle;
    }
    a,span{
        margin-right:10px;
        line-height:20px;
        color:#888;
    }
    .beat{
        color:#ea6f5a;
    }
`
export const More=styled.div`
    width:100%;
    height:40px;
    margin-top:25px;
    line-height:40px;
    text-align:center;
    background:#999;
    color:#fff;
   border-radius:20px;
`

export const ListRight=styled.div`
    float:right;
    width:150px;
    height:100px;
    img{
        width:100%;
        height:100%;
        border-radius:3px;
    }
`