function validate(value) {
    var pattern = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if (pattern.test(value)) {
        console.log("非法字符！");
        return false;
    }
    return true;
}
function filterSqlStr(value) {
    var str = "and,delete,or,exec,insert,select,union,update,count,*,',join,>,<";
    var sqlStr = str.split(',');
    var flag = true;
    for (var i = 0; i < sqlStr.length; i++) {
        if (value.toLowerCase().indexOf(sqlStr[i]) != -1) {
            flag = false;
            break;
        }
    }
    return flag;
}