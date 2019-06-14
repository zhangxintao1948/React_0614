import React from 'react';
import logo from './image/logo.png'
import { Form, Icon, Input, Button } from 'antd';
import './login.less';


export default class  Login  extends React.Component {
    handleSubmit = (event)=>{
        event.preventDefault();
    }
    render(){
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React后台管理项目</h1>
                </div>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form  onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Admin"
                    
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                   登录
                </Button>
                </Form.Item>
           </Form>
         </section>
            </div>
        )
    }
}