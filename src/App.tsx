import React, {Suspense} from "react";
import {Routes, Route, Link, Navigate} from "react-router-dom";
import "./App.css";
import News from "./components/News/News";

import UsersPage from "./components/Users/UsersContainer";
import {HeaderComponent} from "./components/Header/HeaderComponent";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspens";
import {AppStateType} from "./redux/redux-store";


import {Breadcrumb, Layout, Menu} from 'antd'
import type {MenuProps} from 'antd/es/menu'
import {LaptopOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons'
import {NotFound} from "./components/common/NotFound/NotFound";

const ProfileContainer = withSuspense(
    React.lazy(() => import("./components/Profile/ProfileContainer"))
);
const DialogsContainer = withSuspense(
    React.lazy(() => import("./components/Dialogs/DialogsContainer"))
);
const ChatPage = withSuspense(
    React.lazy(() => import("./pages/Chat/ChatPage"))
);

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}


//region antd
const {Content, Footer, Sider} = Layout

export type MenuItem = Required<MenuProps>['items'][number];

export function getItem(label: React.ReactNode,
                        key?: React.Key | null,
                        icon?: React.ReactNode,
                        children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label
    } as MenuItem
}


const itemsSideMenu: MenuItem[] = [

    getItem('My Profile', 'MyProfile', <UserOutlined/>, [
        getItem(
            <Link to='/profile'>
                Profile
            </Link>,
            'Profile'),
        getItem(
            <Link to='/dialogs'>
                Messages
            </Link>,
            'Messages')
    ]),

    getItem('Developers', 'Developers', <LaptopOutlined/>, [
        getItem(
            <Link to='/developers'>
                Developers list
            </Link>,
            'DevelopersList'),
        getItem(
            <Link to='/chat'>
                Developers chat
            </Link>,
            'DevelopersChat'),
    ]),

    getItem('Settings', 'Settings', <SettingOutlined/>, [
        getItem(
            <Link to="/news">
                News
            </Link>,
            'News'),
        getItem(
            <Link to="/22404">
                Music
            </Link>,
            'Music')
    ])
]

//endregion antd

class App extends React.Component<MapPropsType & DispatchPropsType> {
    // cathcAllUnhandleErrors = (promiseRejectionEvent) => {
    //   alert("Some error occurend");
    //   console.log(promiseRejectionEvent);
    // };

    componentDidMount() {
        this.props.initializeApp();

        // window.addEventListener(
        //   "unhandledrejection",
        //   this.cathcAllUnhandleErrors()
        // );
    }

    // componentWillUnmount() {
    //   window.removeEventListener(
    //     "unhandledrejection",
    //     this.cathcAllUnhandleErrors()
    //   );
    // }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <Layout>
                <HeaderComponent/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>
                            <Link to='/'>
                                Home
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to='/developers'>
                                List
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu mode="inline" style={{height: '100%'}} items={itemsSideMenu}/>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Suspense fallback={<Preloader/>}>
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<Navigate to="/profile"/>}/>
                                    <Route
                                        path='/profile/:userId'
                                        element={<ProfileContainer/>}/>
                                    <Route
                                        path='/profile'
                                        element={<ProfileContainer/>}/>
                                    <Route/>
                                    <Route
                                        path='/dialogs/*'
                                        element={<DialogsContainer/>}/>
                                    <Route
                                        path='/developers'
                                        element={<UsersPage
                                            pageTitle={'Самураи'}/>}/>
                                    <Route
                                        path='/login'
                                        element={<Login/>}/>
                                    <Route
                                        path='/news'
                                        element={<News/>}/>
                                    <Route
                                        path='/chat'
                                        element={<ChatPage/>}/>
                                    <Route
                                        path='*'
                                        element={<NotFound/>}/>
                                </Routes>
                            </Suspense>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Samurai Social Network ©2023 Created by IT-KAMASUTRA / Kazakov Konstantin
                </Footer>
            </Layout>
            // <div className="app-wrapper">
            //   <HeaderContainer />
            //   <Navbar />
            //   <div className="app-wrapper-content">
            //     <Routes>
            //       <Route path="/" element={<ProfileContainer />} />
            //       <Route path="/profile/:userId" element={<ProfileContainer />} />
            //       <Route path="/profile" element={<ProfileContainer />} />
            //       <Route path="/dialogs/*" element={<DialogsContainer />} />
            //       <Route path="/news" element={<News />} />
            //       <Route path="/music" element={<Music />} />
            //       <Route path="/settings" element={<Settings />} />
            //       <Route
            //         path="/users"
            //         element={<UsersPage pageTitle={"Samurais"} />}
            //       />
            //       <Route path="/login" element={<Login />} />
            //       <Route path="*" element={<div>404 NOT FOUND</div>} />
            //     </Routes>
            //   </div>
            // </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, {initializeApp})(App);
