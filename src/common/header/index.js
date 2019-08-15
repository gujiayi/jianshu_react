import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import {Link} from 'react-router-dom'
import * as  actionCreates from './store/actionCreates';
import {
    Wrapper,
    HeaderWrapper,
    Logo,
    NavWrapper,
    NavItem,
    SearchWrapper,
    SearchInput,
    SearchInfo,
    SearchItem,
    Sitem,
    ButtonWrapper,
    SearchTitel,
    Button,
} from './style'

class Header extends Component {
    showInfo(){
        const {isfoucs,mouseIn,list,mouseEnter,mouseLeave}=this.props;
        if(isfoucs || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                >
                <SearchTitel>
                    <span className="hot">热门搜索</span>
                    <span className="transform">换一换</span>
                </SearchTitel>
                <SearchItem>
                {
                    list.map((item)=>{
                        return  <Sitem>{item}</Sitem>
                    })
                }
                    
                    
                </SearchItem>
            </SearchInfo>
            )
        }else{
            return null
        }
       
    }
    componentDidMount(){
       
    }
    render() {
        const { isfoucs, changeFocus, changeBlur } = this.props
        return (
            <Wrapper>
                <HeaderWrapper>
                    <Link to="/"><Logo></Logo></Link>
                    <NavWrapper>
                        <NavItem className="navLeft active"><Link to="/"><i className="iconfont">&#xe606;</i>首页</Link></NavItem>
                        <NavItem className="navLeft"><i className="iconfont">&#xe791;</i>下载App</NavItem>

                        <SearchWrapper
                            onFocus={changeFocus}
                            onBlur={changeBlur}
                        >
                            <CSSTransition
                                in={isfoucs}
                                timeout={200}
                                classNames="fade"
                            >
                                <div>
                                <SearchInput className={isfoucs ? 'focus' : ''}></SearchInput>
                                <i className={isfoucs ? 'iconfont bigger' : 'iconfont'}>&#xe62b;</i>
                                </div>
                            </CSSTransition>
                          
                        </SearchWrapper>
                        {this.showInfo()}
                        <NavItem className="navRight">登录</NavItem>
                        <NavItem className="navRight beta"><i className="iconfont">&#xe675;</i>beta</NavItem>
                        <NavItem className="navRight"><i className="iconfont">&#xe636;</i></NavItem>
                    </NavWrapper>
                    <ButtonWrapper>
                        <Button className="writter"><i className="iconfont">&#xe602;</i>写文章</Button>
                        <Button className="register"><Link to="/login">注册</Link></Button>
                    </ButtonWrapper>
                </HeaderWrapper>
            </Wrapper >
        )
    }
}
const mapState = (state) => ({
    isfoucs: state.getIn(['header', 'isfoucs']),
    mouseIn:state.getIn(['header','mouseIn']),
    list:state.getIn(['header','list'])
})

const mapDispatch = (dispatch) => ({
    changeFocus() {
        dispatch(actionCreates.getSearchList())
        dispatch(actionCreates.changeIsFocus())
    },
    changeBlur() {
        dispatch(actionCreates.changeIsBlur())
    },
    mouseEnter(){
        dispatch(actionCreates.isMouseEnter())
    },
    mouseLeave(){
        dispatch(actionCreates.isMouseLeave())
    },

})
export default connect(mapState, mapDispatch)(Header);