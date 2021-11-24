async function getUser() { // 비동기 고객명단받기 함수 시작~
    try { //한번 이것도 시도 시작 !
        const res = await axios.get('/users'); // /users 일때 조회 해보자
        const users = res.data; // 조회해보니 {name : 민욱} 떴는데 이것의 데이터는 users야
        const list = document.getElementById('userlist'); //밑에 하나씩 뜨는 그 아이디들을 보여줄꺼야
        list.innerHTML = ''; //근데 거기에 뭘 들어갈지는 아직 몰라. 사람들이 input에다가 데이터 넣어주는게 들어가겠지??

        Object.keys(users).map(function(key) { // name 이라는 키 값에 함수를 또 실행할꺼야
            const userDiv = document.createElement('div'); //민욱이라는 키 값이 보여줬으니 그걸 div에 넣어서 보여줘
            const span = document.createElement('span'); //자 민욱을 div 안에 보내자 !
            span.textContent = users[key]; // 민욱 을 자바스크립트 태그 형식으로 그대로 보내준다
            const edit = document.createElement('button'); //자 이제 보여줬지?? 그걸 수정할 수 있는 버튼을 만들지
            edit.textContent = 'Edit'; //수정하기
            edit.addEventListener('click', async() => { //수정하기를 클릭하면 이벤트 발생 ! 그 이벤트는 ~
                const name = prompt('Input change name');  //alert와 비슷한 팝업창 발생
                if(!name) { //만약 이름을 넣지 않는다면
                    return alert("You must input name");
                }
                try { //시도하자
                    await axios.put('/user/' + key, {name}); //(put =수정) /user/민욱 에서 팝업창에 입력한 값으로 수정
                    getUser(); //그러면서 다시 고객명단받기 함수 실행
                } catch(err) { // /user가 아니면 에러
                    console.error(err);
                }
            });
            const remove = document.createElement('button');
            remove.textContent = 'Delete';
            remove.addEventListener('click', async () => {
                try{
                    await axios.delete('/user/'+ key);
                    getUser(); 
                } catch(err) {
                    console.error(err);
                }
            })
            userDiv.appendChild(span); //아이디명 추가
            userDiv.appendChild(edit); //edit 버튼 추가
            userDiv.appendChild(remove); //delete 버튼 추가
            list.appendChild(userDiv); //그리고 새로운 div 생성하여 다음 아이디 부터는 여기에다가 !
            console.log(res.data);
        });
    } catch(err) {
        console.error(err);
    }
}

window.onload = getUser; //Screen loading call getUser

// submit execute
document.getElementById("regform").addEventListener("submit", async (e) => { //regform에 있는 내용들 중 제출하는 이벤트 실행~
    e.preventDefault(); //근데 그 이벤트는 새로고침 하지마 !
    const name = e.target.username.value; //이름이라는 값을 넣어줘야하는 name이라는 변수를 생성
    if(!name) { //만약 값이 없다면 !
        return alert("You must input name");
    }
    try { //그럼 이거 시도해보자
        await axios.post('/user', {name}); // /user일때 값을 서버에 보내주고
        getUser(); // 이것에 edit, delete 실행해주자
    } catch(err) { // /user가 아니면 에러 !
        console.error(err);
    }

    e.target.username.value = ''; //당연히 이름은 어떠한 것이 들어가는거겠지??
})

////////////////////////////////////////////////////////////
//아는 함수가 진짜 const 밖에 없네
//다 찾아보기
