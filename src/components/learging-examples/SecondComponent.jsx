import { Component } from 'react';
//class component
export default class SecondComponent extends Component{
    render(){
      return (
        <>      
          <div className='SecondComponent'>Second Component</div>
          <div className='SecondComponent'>Second Component</div>
        </>
      )
    }
}

export class ThirdComponent extends Component{
    render(){
      return (
        <>      
          <div className='ThirdComponent'>ThirdComponent Component</div>
          <div className='ThirdComponent'>ThirdComponent Component</div>
        </>
      )
    }
}