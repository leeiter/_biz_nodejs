## React에서 변수

- props와 state형 변수가 존재
- props : 상위(부모) Component로 부터 전달받은 모든 값들
- state : 현재 Component내에서 자유롭게 일고, 제한적으로 변경할 수 있는 변수
- state의 제한적 변경 : react는 state형 변수의 값이 변동되면, 화면을 재 rendering(mount, 갱신, reFresh) 하기 때문에 함부로 변경하지 못하도록 하고 반드시 this.setState() 메서드 내에서만 변경하도록 허락한다.
- 즉 this.aa = 3과 같은 코드는 절대 사용불가
- this.setState({this.aa : 3})과 같은 방식으로 변경한다.
- this.setState() method에서 state형 변수를 변경하면, 정해진 LifeCycle에 따라 화면을 다시 rendering 한다.

## react에서 Component 공통변수 사용

- main Component에 포함된 Sub Component에서 공통으로 변수를 사용하고자 할 때는 Main Component에서 state 형 변수를 선언하고 각각 Sub Component에 props로 내려보내면 된다.
- 단, Sub Component에서는 이 변수는 절대 변경이 불가능하다.

## Sub Component에서 변화가 생긴 변수 내용을 이웃하는 Component가 공유하기

- 서브로 연결되어 있는 Component 1곳에서 변수를 변경하면 다른 이웃하는 또는 연관된 Component들에 변경된 변수값이 보이도록 하고자 할 때가 있는데
- 첫번째 Main Component에서 state 변수를 선언
- 두번째 Main Component에서 state 변수를 변경하는 method 선언
- 세번째 이 method를 값을 변경하고자 하는 Sub Component에게 props로 전달을 한다.
- 이때, Main에 선언된 Component에 매개변수를 받을 수 있도록 선언할 수 있다.
- 네번째 props로 전달받은 method를 callback으로 호출한다.
- 이때, callback method에 필요한 값을 parameter로 전달할 수 있다.

* 그러면, 실제로는 Main Component에 선언된 method가 실행되면서 Main Component에 선언된 state 변수가 변경이 될 것이다.
* 그와 동시에 state 변수를 props로 전달 받아 화면에 표시해 놓은 Sub Component도 같이 rendering 되어 값이 표현 된다.

## 단방향 변수 전달 방식

- Main Component에서 state로 선언된 변수 Main Component의 어디에서나 this.setState() method를 사용하여 변경이 가능하다.
- 하지만 props로 Sub Component에 전달이 되는 순간 그 변수는 모든 read only가 된다.
- 이러한 방식을 하향식,
  > > > > > > > > > > > > > > > > > > > > >
