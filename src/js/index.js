import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
let me_params=[
    {name:"zhangsan",age:20},
    {name:"lisi",age:21}
]
class Me extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:props.users
        }
    }
    //首次渲染前执行的函数
    componentWillMount(){
        axios.get("http://localhost:9090")
            .then((res)=>{
                res.data.leader;
            })
            .catch((error)=>{
            })
    }

    showMe(){
        alert('这个是点击事件');
    }
    //渲染
    render(){
        return <div>
            <h1>团队成员</h1>
            {this.props.users.map((item)=>{
                return <h2>{item.name} -- {item.age}</h2>
            })}
            <div>
                <input type="button" value="改变" onClick={()=>{
                    var getData = this.props.users;
                    getData[0].name = "王五";
                    this.setState({
                        users:getData
                    })
                }}/>
            </div>
        </div>
    }
    //渲染执行后执行的函数
    componentDidMount(){
    }
}
ReactDOM.render(
    <Me users={me_params} />,
    document.getElementById('root')
);lymingren

