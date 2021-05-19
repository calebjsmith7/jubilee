import React, { Component } from 'react';
import '../App.css';


class Stream extends Component {
    constructor(props){
      super(props);

      this.state = {
          data: null
      }

    }

    async componentDidMount(){
        let data = fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=9&playlistId=PLhtec9gtcbkYY8WS1Ve-Jd6tWumcNkzdU&key=AIzaSyAld1fL4qgjHVlc4zFEJJyx-KJmGgv1ZI0');
        let resp = (await data).json();
        await this.setState({
            data: resp
        });
        await console.log(this.state.data);
    }

    render() {
      return (

<div>
    hello the world
    {this.state.data != null ? <div>yes</div> : <div>no</div>}
</div>

        )
    };
}

export default Stream;