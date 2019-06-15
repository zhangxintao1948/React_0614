import React from 'react';
import logo from './image/logo.png'
import { Form, Icon, Input, Button } from 'antd';
import './login.less';


class  Login  extends React.Component {
    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.form.validateFields((err,values)=>{
            //异步请求
          if(!err){
             console.log('输入错误',values)
          }
        })
        // const username = this.props.form.getFieldValue('username')
        // const password = this.props.form.getFieldValue('password')
        // const value = this.props.form.getFieldsValue()
        // console.log(username,password,value)
    }
    validatorPwd = (rule,value='',callback)=>{
      if(!value){
        callback('密码不能为空！');
      }else if(value.length<4){
        callback('密码长度不能小于4');
      }else if(value.length>12){
        callback('密码长度不能大于12');
      }else if(!/^[a-zA-Z0-9]+$/.test(value)){
        callback('密码不合法！');
      }else{
        callback();
      }
    }
    render(){
        const {getFieldDecorator} = this.props.form;
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
                    {
                        getFieldDecorator('username',{
                            rules:[
                                {required:true,whitespace:true,message:'用户名不能为空'},
                                {min:4,message:'用户名不能小于4位'},
                                {max:12,message:'用户名不能大于12位'},
                                {pattern:/^[a-zA-Z0-9]+$/,message:'用户名不合法'},]
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Admin" />
                        )       
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password',{
                           rules:[ {validator:this.validatorPwd}]
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />
                        )
                    }
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

const WrapLogin = Form.create()(Login);
export default WrapLogin;
