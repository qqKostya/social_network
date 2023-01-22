import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";


let mapStateToPropsForRedirect = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth
  } // as MapPropsType // работает и без этого
}

type MapPropsType = { isAuth: boolean }

type DispatchPropsType = {}

// WCP это - WrappedComponentProps

function withAuthRedirect<WCP extends object>(
  WrappedComponent: React.ComponentType<WCP>) {

  const RedirectComponent: React.FC<MapPropsType &
    DispatchPropsType> = (props) => {

      let { isAuth, ...restProps } = props

      if (!isAuth) {
        return <Navigate to={'/login'} />
      }

      return <WrappedComponent {...restProps as WCP} />
    }

  return connect<MapPropsType, DispatchPropsType,
    WCP, AppStateType>(
      mapStateToPropsForRedirect, {})(RedirectComponent)
}

export default withAuthRedirect