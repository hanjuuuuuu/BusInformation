import { Button, Layout, Select } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";
import React from 'react';
import Bus from "./Bus";
const { Header, Footer, Content } = Layout;
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function getBus() {
  return new Promise(
    (resolve, reject) => {
      const url = 'http://localhost:8080/hanju'
      axios.get(url)
      .then((data) => {
        resolve(data)
      })
      .catch((e) => {
        reject(e);
      })
    }
  )
}

const onClick = async () => {
  const data = await getBus()
  console.log(data)
}


const App = () => (
  <>
    <Layout>
      <Header>버스정보</Header>
      <Layout>
        <Content>
          <Select
            defaultValue="서울"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            <Option value="서울">서울</Option>
            <Option value="경기">경기</Option>
            <Option value="인천">인천</Option>
            <Option value="강원">강원</Option>
            <Option value="충청">충청</Option>
            <Option value="경상">경상</Option>
            <Option value="전라">전라</Option>
          </Select>
          <button onClick ={onClick} >확인</button>
          </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

  </>
  
);


export default App;