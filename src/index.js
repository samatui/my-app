import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, Button } from 'antd';
import App from './A_count'
import Clock from './Clock'
import Toggle from './Toggle'
import LoginControl from './LoginControl'
import './index.css'
import Mailbox from './MAILBOX'
import Caculatior from './Caculator'
import Modal1 from './Modal_Test'
import FilterableProductTable from './Thinking';
import react from 'react';
import { Game } from './Tutorial';

const messages = ['React1', "re2", 're3']
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

// ReactDOM.render(<FilterableProductTable products = {PRODUCTS}/>, document.getElementById('root'))
ReactDOM.render(<Game />, document.getElementById('root'))