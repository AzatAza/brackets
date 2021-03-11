module.exports = function check(str, bracketsConfig) {

    let open = [],
        close = [],
        stack = [];

    bracketsConfig.forEach((i) => {
    open.push(i[0]);
    close.push(i[1]);
  })

  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i]) && close.includes(str[i]) && stack[stack.length - 1] == str[i]) {
      stack.pop()
    } else if (open.includes(str[i])) {
      stack.push(str[i])
    } else if (close.indexOf(str[i]) != -1 && stack[stack.length - 1] == open[close.indexOf(str[i])]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length == 0 ? true : false;
}
