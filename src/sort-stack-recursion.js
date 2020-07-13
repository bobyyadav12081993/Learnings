export function sortStack(stack) {
  if (stack.size > 0) {
    let temp = stack.pop();
    sortStack(stack);
    sortInsert(stack, temp);
  }
}

function sortInsert(stack, element) {
  if (stack.size() == 0 || stack.top() >= element) {
    stack.push(element);
  } else {
    let temp = stack.pop();
    sortInsert(stack, element);
    stack.push(temp);
  }
}
