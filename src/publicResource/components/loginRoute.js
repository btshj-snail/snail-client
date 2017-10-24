/**
 * Created by snail on 17-10-9.
 */
'use strict'


import React, {PropTypes} from "react";
import {Spin} from "antd";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {loadCurrentUserInfo} from './loginRouteAction';
import '../less/manager.less'


class LoginRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadLoginInfo();
    }

    loadLoginInfo() {
        let {dispatch} = this.props;
        dispatch(loadCurrentUserInfo());

    }


    render() {
        let {location, component: Component, ...rest} = this.props;

        let {loginRouteLoading,currentUser} = this.props;


        if (loginRouteLoading) {
            return <div className="absoluteCenter"><Spin size="large" spinning={true} delay={500}/></div>
        }else{
            return (
                <Route {...rest} render={props => (
                    !!currentUser.id ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{pathname: '/adminLogin', state: {from: location}}}/>
                    )
                )}/>
            )
        }


    }
}

LoginRoute.propTypes = {
    loginRouteLoading:PropTypes.bool.isRequired,
    currentUser:PropTypes.object
}
LoginRoute.defaultProps = {
    loginRouteLoading:true
}

function mapStateToProps(state){
    let {loading,currentUser} = state.frame.loginInfo;
    return {
        loginRouteLoading:loading,
        currentUser
    }
}

export default connect(mapStateToProps)(LoginRoute);






