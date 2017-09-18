import React from 'react'
import '../css/Home.css'
import { Input,Tabs,Carousel } from 'antd';

const Search = Input.Search;
const TabPane = Tabs.TabPane;

function callback(key) {}
function onChange(a, b, c) {}
export default class Home extends React.Component{
    render(){
        return(
            <div>


                <div className="footer">
                    <span>飞鱼逛街</span>
                     <Search
                        placeholder="请输入你想要是商品"
                        style={{ width:230,height:20 }}
                        onSearch={value => console.log(value)}
                      />

                      <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 5" key="5">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 6" key="6">Content of Tab Pane 3</TabPane>
                      </Tabs>

                </div>

                 <div className="center">
                  <Carousel afterChange={onChange} autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                  </Carousel>

                  <div>
                    <h3>品牌制造商直供</h3>
                    <ul className="center_ul">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                  </div>



                </div>



            </div>
            );
    }

}
