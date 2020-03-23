import React, { Component } from 'react'
import Header from '../header';
export default class Payment extends Component {
    render() {
        return (
            <div>
                <Header header='Setting'/>
                <br/>
                <h3>ไม่สามารถใช้งานฟีเจอร์นี้ได้กรุณาชำระเงิน</h3>
                <h4>กดรูป Logo ด้านบนขวาเพื่อกลับหน้าหลัก</h4>
            </div>
        )
    }
}
