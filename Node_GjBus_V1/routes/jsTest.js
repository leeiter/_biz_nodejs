var username = {login : true, userid : 'korea'}
var str = username && name.login && name.userid

/*
    let n1 = 0
    let n2 = 0
    let sum = ++n1 > 0 || ++n2 > 0
    일 때, n1, n2 의 값은?

    ++n1 이 ++가 먼저 생성이 되기 때문에
    1 > 0 로 계산이 되기 때문에 true가 되면서
    OR 이기 때문에 뒤에는 계산을 아예 하지 않기 때문에
    n2는 그래도 0 값을 가져온다.

    n1 = ? > true
    n2 = ? > 0

    n1++로 되어있었다면 ++생성이 되지 않은 상태에서
    0 > 0 비교를 하기 때문에 false가 된다.
    그러므로 ++n2 를 계산하기 떄문에
    1 > 0 이므로 n2는 true가 된다.

    n1 = ? > false
    n2 = ? > true
*/

function userIdCheck(userId) {
    if(!userId) {
        userId = 'id없음'
    }
}

// userId값이 있나 없나 검사할 때
function userIdCheck(userId) {
    userId = userId || 'id없음'
}
