import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {
    ListWrapper,
    ListLeft,
    ListRight,
    ListTitle,
    ListContent,
    ListMate
} from '../../style'
class List extends Component {
    render() {
        const { list } = this.props;
        return (
            list.map((item,index) => {
                return (
                    <ListWrapper key={index}>
                        <ListLeft className={item.get('imgUrl')?'':'widthL'}>
                            <ListTitle><Link to={'/details/'+item.get('id')}>{item.get('title')}</Link></ListTitle>
                            <ListContent>{item.get('content')}</ListContent>
                            <ListMate>
                                <span href='#' class="beat" ><i className="iconfont">&#xe63c;</i>{item.get('beta')}</span>
                                <a href='#'>{item.get('name')}</a>
                                <a href='#' ><i className="iconfont">&#xe648;</i>{item.get('mesage')}</a>
                                <span href='#'><i className="iconfont">&#xe615;</i>{item.get('collect')}</span>
                                {
                                   item.get('sang') ? <span href='#' ><i className="iconfont">&#xe615;</i>{item.get('sang')}</span>:null
                                }
                            </ListMate>
                        </ListLeft>
                        {
                          item.get('imgUrl') ? <ListRight >  <img src={item.get('imgUrl')} /></ListRight>:null
                        }
                       
                        
                        
                    </ListWrapper>
                )
            })

        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'list'])
})
const mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(List);