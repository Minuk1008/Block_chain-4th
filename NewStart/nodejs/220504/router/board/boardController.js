const express = require('express');
const router = express.Router();

const list =  (req,res) => {
    res.render('board/list')
}
const view =  (req,res) => {
    // console.log(req.query.name)
    /*
        1. 내용을 가져 올 수 있는가
        2. 가져온 내용을 html에 넘길 수 있는가
         2-1. template engine 개념
         템플릿 엔진은 변수를 사용하면 변수의 결과물로 html을 완성해주는 기능

         render method 는 1. html 경로 2. object(객체)
    */
    res.render('board/view', {
        a:1,
        name : req.query.name
    })
}
const write =  (req,res) => {
    res.render('board/write')
}
const update =  (req,res) => {
    console.log(req.query.name)
    res.render('board/update', {
        name:req.query.name
    })
}


const writeAction = (req,res) => {
    res.redirect('view')
}
const updateAction = (req,res) => {
    console.log(req.body)
    res.redirect('view')
}
const deleteAction = (req,res) => {
    res.redirect('list')
}

module.exports = {list, view, write, update, deleteAction, updateAction, writeAction}