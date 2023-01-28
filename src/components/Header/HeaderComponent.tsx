import React from 'react'
import {Link} from 'react-router-dom'
import s from './Header.module.css'
import {Avatar, Button, Col, Layout, Menu, Row} from 'antd'
import {AppstoreOutlined} from '@ant-design/icons'
import {getItem, MenuItem} from '../../App'
import {useDispatch, useSelector} from 'react-redux'
import {selectByPhoto, selectCurrentUserLogin, selectIsAuth} from '../../redux/auth-selectors'
import { logout } from '../../redux/auth-reducer'
import { AppDispatch } from '../../redux/redux-store'
import logo from "../../assets/images/logo-2.png";


const {Header} = Layout

const itemsHeader: MenuItem[] = [
   getItem(
      <Link to='/'>
         Home
      </Link>,
      'Home',
      <AppstoreOutlined />
   )
]


export const HeaderComponent: React.FC = () => {

   const isAuth = useSelector(selectIsAuth)
   const login = useSelector(selectCurrentUserLogin)
   const myPhoto = useSelector(selectByPhoto)

   const dispatch: AppDispatch = useDispatch()

   const logoutCallback = () => {
      dispatch(logout())
   }

   return (
      <Header className="header">
         <header>
            <Row>
               <Col span={8}>
                  <img className={s.headerPhoto}
                       src={logo}
                       alt={'header-illustration-logo'}
                  />
               </Col>

               <Col span={8}>
                  <Menu theme="dark" mode="horizontal" items={itemsHeader}
                        selectedKeys={['']}
                  />
               </Col>

               <Col span={8}>
                  {isAuth
                     ? <div>
                        <Avatar alt={login || ''} src={myPhoto} />
                        <span className={s.loginBlockIsAuth}>
                           {login} - <Button
                           onClick={logoutCallback}>
                           Log out</Button>
                        </span>
                     </div>
                     : <div>
                        <Button className={s.loginBlockNotAuth}>
                           <Link to={'/login'}>Login</Link>
                        </Button>
                     </div>
                  }
               </Col>

            </Row>
         </header>
      </Header>
   )
}