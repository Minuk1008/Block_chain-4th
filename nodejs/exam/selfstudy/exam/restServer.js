const http = require('http');
const fs = require('fs').promises;
//promises란 약속이 맞아. 음.....그냥 원래 동기 처리되는걸 await 란걸 사용하면 이걸 비동기 처리하겠다고 약속해주는 개념이지.

const host = '127.0.0.1';
const port = 3000;

const users = {}; //빈 object

var server = http.createServer(async (req, res) => {
    // 서버를 생성하는거부터 시작 !!!! 이것저것 시도해보자
    try {
        if(req.method === 'GET') { //여기서 req는 axios 모듈 !!!!
            if(req.url === '/') {
                const data = await fs.readFile('./restFront.html'); //파일 읽는걸 비동기 처리 !!! 만약 여기서 동기 처리를 한다면 get method에 /로 시작하는건 restfront읽고,,about 읽고,,에러 읽고,,,한참 걸림
                res.writeHead(200, {"Content-Type" : "text/html; charset = utf-8"}); // 오케이 너 합격
                return res.end(data); //restFront html 보여줘 !
            } else if(req.url === '/about') { //만약 /말고 /about로 시작하면
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {"Content-Type" : "text/html; charset = utf-8"});
                return res.end(data); //이것도 합격해서 about html 보여줘 !
            } else if(req.url === '/users') {
                res.writeHead(200, {"Content-Type" : "application/json; charset = utf-8"});
                return res.end(JSON.stringify(users)); //이것도 합격인데 저장되어 있는 user들을 JSON 방식으로 보여줄께
            }

            try { //이중 TRY = 시도 중에 잠깐 이것도 한번 해보자
                const data = await fs.readFile(`.${req.url}`); //얘도 비동기로 / 이거든 /about 이거든 /users 이거든 
                return res.end(data); 
            } catch(err) {  //만약 err가 잡힌다면 (파일이 손상되거나, url를 잘못적었거나 등)
                res.writeHead(404, {"Content-Type" : "text/html; charset = utf-8"}); // 404 찾을 수 없어 !!!! 에러 발생 !!
                return res.end(err.message); //이것이 에러다 이자식아
            }
        }
        else if(req.method === 'POST') { // 만약 get이 아니라 post네?? 오케이 post일때도 계속 시도해보자, Post는 서버에 데이터를 보내는 거지 !
            if(req.url === '/user') {
                let body = ''; //상자속에 뭔가 들어껀데...그건.....
                // request body -> stream
                req.on('data', (data) => { //그거슨 데이터고
                    body += data; //상자속에 데이터가 하나씩 추가되어 들어간다 ~
                });
                // body after down execute
                return req.on('end', () => { //상자에 들어간걸 이렇게 보여줄꺼야
                    console.log("POST body : ", body);  // {name : 민욱}
                    const { name } = JSON.parse(body);  //name의 key 값을 추출! (민욱)
                    const id = Date.now(); //id 개념인데 이게...참...아이디라고 하기도 뭐하고...그냥 대충 현재 시간으로 정해둔거
                    users[id] = name; // 현재시간 : 민욱
                    res.writeHead(201, {"Content-Type" : "text/html; charset = utf-8"})
                    res.end('ok'); //서버에 데이터 전송 완료
                });
            }
        }
        else if(req.method === 'PUT') { //put 은 수정
            if(req.url.startsWith('/user/')) { //user/로 시작하는 모든 것들은 이걸로 할꺼야 !
                const key = req.url.split('/')[2]; //localhost:3000/(0)user/(1)kim/(2)minwook
                let body = '';
                req.on('data', (data) => {
                    body += data;
                }); //수정도 똑같이 데이터가 추가되도록 해야겠지?! post 방식처럼 !!!
                return req.on('end', () => {
                    console.log('PUT body : ', body);
                    users[key] = JSON.parse(body).name;
                    res.writeHead(201, {'Content-Type' : 'text/html; charset = utf8'})
                    return res.end('ok'); //수정완료 
                })
            }
        }
        else if(req.method === 'DELETE') { //자 만약 삭제일때를 해보자
            if(req.url.startsWith('/user')) {
                const key = req.url.split('/')[2];
                delete users[key];
                res.writeHead(200, {"Content-Type" : "text/html; charset = utf-8"})
                return res.end('ok'); //삭제 완료
            }
        }
        res.writeHead(404); //이런거 저런거 이것들 저것들 다 쓰고도 아닌건 이렇게 표시할꺼야 
        return res.end('NOT FOUND'); //아무것도 찾지 못했어 = 즉 넌 애초에 잘못된 경로로 온거야
    } catch(err) { //이것저것 시도해보다가 만약에 오류가 발생했다면 ! 
        console.error(err);
        res.writeHead(500, {"Content-Type" : "text/html; charset = utf-8"});
        res.end(err.message); //에러 메세지 발동 !
    }
});

server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});