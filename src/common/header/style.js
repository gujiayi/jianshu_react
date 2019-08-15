import styled  from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const Wrapper=styled.div`
    border-bottom:1px solid #f0f0f0;
`;
export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    width:1400px;
    margin:0 auto;
`;
export const Logo=styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic}) no-repeat;
    background-size:contain;
`;

export const NavWrapper =styled.div`
   width:950px;
   height:56px;
   margin:0 auto;
   
`;

export const NavItem=styled.div`
    margin-right:30px;
    line-height:56px;
    &.active{
        color:#ea6f5a;
    }
    &.navLeft{
        float:left;
    }
    &.navRight{
        color:#777
        float:right;
    }
    &.beta{
        color:#ea6f5a;
    }
`;
export const SearchWrapper=styled.div`
    position:relative;
    float:left;
    .iconfont{
        position:absolute;
        top:13px;
        right:5px;
        width:23px;
        height:23px;
        padding:5px 0 0 5px;
        border-radius:28px;
    }
    .bigger{
        background:#999;
    }
    .fade-enter, .fade-appear {
        width:220px;
    }
    .fade-enter-active, .fade-appear-active { 
       width:240px;
        transition: all .2s ease-in;
    }
    .fade-exit {
        width:240px;
    }
    .fade-exit-active {
        width:220px;
        transition: all .2s ease-in;
    }
`
export const SearchInput=styled.input.attrs({
    placeholder:'搜索'
})`
    &.focus{
        width:220px;
    }
    margin-top:9px;
    padding:0 20px;
    width:180px;
    line-height:36px;
    border:none;
    outline:none;
    background:#eee;
    border-radius:19px;
    &::placeholder{
        color:#bbb;
    }
`
export const SearchInfo=styled.div`
    position:absolute;
    top:50px;
    left:415px;
    width:220px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    color:#aaa;
    padding:20px 15px;
    background:#fff;
    .hot{
       float:left;
    }
    .transform{
        float:right;
    }
`
export const SearchTitel=styled.div`
    width:220px;
    margin-bottom:10px;
    overflow:hidden;
`
export const SearchItem=styled.div`
   width:220px;
`
export const Sitem= styled.a.attrs({
    href:'#'
})`
    display:inline-block;
    padding:0 5px;
    margin-bottom:10px;
    margin-right:8px;
    border-radius:2px;
    color:#666;
    border:1px solid #333;
`
export const ButtonWrapper=styled.div`
    position:absolute;
    top:0;
    right:0;
`;
export const Button = styled.div`
    float:right;
    padding:0 26px;
    line-height:38px;
    margin-top:8px;
    margin-left:18px;
    border:1px solid #ea6f5a;
    border-radius:19px;
    &.register{
        color:#ea6f5a;
    }
    &.writter{
        background:#ea6f5a;
        color:#fff;
    }
`




