import React from 'react'
import '../css/Home.css'
import { Input } from 'antd';
const Search = Input.Search;

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="box">
                    <span>飞鱼逛街</span>
                     <Search
                        placeholder="请输入你想要是商品"
                        style={{ width: 200 }}
                        onSearch={value => console.log(value)}
                      />

                </div>
            </div>
            );
    }

}