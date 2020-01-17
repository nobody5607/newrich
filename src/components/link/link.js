import React, {Component} from 'react';

class Link extends Component {
    state={
        name:'',
        link:'',
        image:'',
        url:''
    }
    goBack =(route)=> {
        this.props.history.push('/setting');
    };
    async componentDidMount() {
        let name = await localStorage.getItem('name');
        let link = await localStorage.getItem('link');
        let image = await localStorage.getItem('image');
        this.setState({
            name:name,
            link:link,
            image:image,
            url:'https://newrich-8ee77.firebaseapp.com/register?link='+link
        });
    }
    render() {
        return (
            <div>
                <div style={{marginTop:'100px'}}>
                    <a href={this.state.url}>{this.state.link}</a>
                </div>
            </div>
        );
    }
}

export default Link;
