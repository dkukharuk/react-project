import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../data/reducers/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login : state.auth.login
})
const mapDispatchToProps = { getAuthUserData }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)


