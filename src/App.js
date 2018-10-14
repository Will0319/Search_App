import React, { Component } from 'react';
import { Row, Col, Select, Input, Icon,Card} from 'antd';
import { CardList } from './Db';
import './App.less';
const Option = Select.Option;

class App extends Component {
  state={
    afterText:'',
    selectVal:'https://www.baidu.com/s?wd=',
    searchOptions:[
      {
        label: '百度',
        key: 0,
        url: 'https://www.baidu.com/s?wd='
      },
      {
        label: 'Google',
        key: 1,
        url: 'https://www.google.com/search?q='
      },
      {
        label: 'Bing',
        key: 2,
        url: 'https://cn.bing.com/search?q='
      },
      {
        label: 'NPM Package',
        key: 3,
        url: 'https://www.npmjs.com/search?q='
      }
    ],
  }
  textChange=(e)=>{
    this.setState({afterText:e.target.value})
  }
  handleChange=(value)=>{
    // console.log(value)
    this.setState({ selectVal:value})
  }
  SearchBtn=()=>{
    const { afterText, selectVal} = this.state;
    window.open(selectVal + afterText);
  }
  cardClick=(url)=>{
    window.open(url);
  }
  render() {
    const { afterText, searchOptions} = this.state;
    const selectBefore = (
      <Select defaultValue={searchOptions[0].url} style={{ width: 150 }} onChange={(e)=>this.handleChange(e)}>
        {
          searchOptions.map((item)=>{
            return <Option key={item.key} value={item.url}>{item.label}</Option>;
          })
        }
      </Select>
    );
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
      cursor: 'pointer'
    };
    return (
      <Row className='App'>
          <Row className='App-content'>
              <Row>
              <div id="wraper">
    		<div id="stand1" className="stand"></div>
              <div id="stand2" className="stand"></div>
                <div id="band">
                  <div id="wheel1" className="wheel"></div>
                  <div id="wheel2" className="wheel"></div>
                  <div id="wheel3" className="wheel"></div>
                  <div id="wheel4" className="wheel"></div>
                </div>
              <div id="package1" className="package"></div>
    	    	<div id="mainFactory"></div>
              <div id="door"></div>
              <div id="window1" className="window"></div>
              <div id="window2" className="window"></div>
              <div id="chim1"></div>
              <div id="chim2"></div>
              <div id="roof1"></div>
              <div id="roof2"></div>
              <div id="stripe1" className="stripe"></div>
              <div id="stripe2" className="stripe"></div>
              <div id="stripe3" className="stripe"></div>
              <div id="stripe4" className="stripe"></div>
              <div id="smoke1" className="smoke">
                <div id="sCloud1" className="sCloud"></div>
                <div id="sCloud2" className="sCloud"></div>
                <div id="sCloud3" className="sCloud"></div>
              </div>
              <div id="smoke2" className="smoke">
                <div id="sCloud4" className="sCloud"></div>
                <div id="sCloud5" className="sCloud"></div>
                <div id="sCloud6" className="sCloud"></div>
              </div>
              <div id="tree">
                <div id="branch"></div>
                <div id="leaves1" className="leaves"></div>
                <div id="leaves2" className="leaves"></div>
                <div id="leaves3" className="leaves"></div>
              </div>
       </div>
              </Row>
              <Row className='App-search'>
                  <Col span={14}>
                    <Input 
                      size="large" 
                      addonBefore={selectBefore} 
                      addonAfter={<div onClick={()=>this.SearchBtn()} style={{ cursor: 'pointer' }}><Icon type="search" /> 搜索</div>} 
                      value={afterText} 
                      onChange={(e)=>this.textChange(e)}
                    />
                  </Col>
              </Row>
              <Row className='App-card'>
                <Col span={14}>
                  {
                      CardList.map((item, index) => {
                      return (
                        <Card title={item.title} key={index} headStyle={{ background: item.titlecolor,color:'#fff'}} type="inner" style={{marginTop:20}}>
                          {
                            item.list.map((vitem,vindex)=>{
                              return (<Card.Grid style={gridStyle} key={vindex} className='App-card-hover' onClick={()=>this.cardClick(vitem.url)}>{vitem.name}</Card.Grid>);
                            })
                          }
                        </Card>
                      )
                    })
                  }
                </Col>
              </Row>

          </Row>
        <Row className='App-footer'>
          <Col>
            created by
                  <a target="_blank" href="https://github.com/Will0319">@yangxuan </a>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default App;
