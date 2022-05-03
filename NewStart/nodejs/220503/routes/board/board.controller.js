const items = [
    
]

const list = (req,res) => {
    res.render('board/list')
}

const view = (req,res) => {    
    const {index} = req.query
    console.log(index)
    res.render('board/view', {
        item:items[index-1]  // return {}
    })
}

const write = (req,res) => {
    res.render('board/write')
}

const update = (req,res) => {
    res.render('board/update')
}



const writeAction = (req,res) => {
    console.log(req.body.subject, req.body.content)
    
    const obj = {subject : req.body.subject, content : req.body.content}
    items.push(obj) // [] => [{}, {} ,{}, ...]
    res.redirect(`/board/view?index=${items.length}`)
}

module.exports = {list, view, write, update, writeAction}
// module.exports = {list:list} //원래는 객체를 내보내주는거라 이게 정석인데 위에처럼 생략 가능