import logo from './logo.svg';
import './App.css';

//0.React 엔진 - 데이터변경감지에서 UI그려주는 엔진이다!
//1.실행과정(index.html 이게열리고 이거를 조종 하려면 index.js 또한
//          index.js 에서 app을 연거)
//           react 에서는 페이지가 변경되는게 아니라! body의 내용이 바뀌는거다
//          SPA -> Single page application  -> 그러니까 a태그를 못씀 페이지요청이 아니니까
//2.JSX문법
//3.바벨(자바스크립트 ES5) -> ES6
// var App => (){}
//

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야함. var은 쓰지마라
// (3) if 사용 불가능 -> 삼항연산자 (조건 ? 값(true) : 값(false))
// (4) 조건부 렌더링 (조건 && 값(true) true 일때만 페이지에 나옴 false이면 나오지 않음)
// (5) css 디자인
//   - 내부에 적는 방법
//   - 외부 파일에 적는 방법
//   - 라이브러리 사용(부트스트랩, component-style)

let a = 10; // 변수
const b = 20; // 상수

function App() {
  let c = 20; // app 안에서도 변수 설정가능
  let f; // 자바나 다른언어면 f는 null 이라 나오는데 여기서는 undefined 라고 나온다
  let g = undefined; // f는 이거랑 같다! 변수는 있는데 값이 정의가 안된거!
  console.log(1, f);

  const myStyle = {
    color: 'red',
  }; // 이거는 추천안함

  function hello() {
    var d = 20; // var로 쓰면 함수 밖에서 이상하게 사용가능
    // let으로 쓰면 함수 밖에서 사용 불가
  }
  let list = [1, 2, 3];

  return (
    // 한줄이면 return() 괄호가 필요없는데 여러줄이면 ()가 반드시 필요
    <div>
      <div style={myStyle}>
        안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 style={{ color: 'blue' }}>해딩태그 {b === 10 && '20입니다.'}</h1>
      <h2 className="box-style">연습</h2>
      <hr />
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>{' '}
      {/* 태그가 섞여있으니 {n} 중괄호를 넣어야한다*/}
    </div>
  );
}

export default App;
