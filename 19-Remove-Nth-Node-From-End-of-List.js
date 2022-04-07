// var removeNthFromEnd = function(head, n) {
//   var nodeList = []
//   var nodeNow = head
//   do{
//       nodeList.push(nodeNow)
//       nodeNow = nodeNow.next
//   }while(!!nodeNow)
//   const target = nodeList.length - n
//   target == 0 ? head = head.next : target == 1 ? head.next = nodeList[target].next : nodeList[target - 1].next = nodeList[target].next
//   return head
// };

/* ---------------------------------------- */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(length = 0) {
  var head = new ListNode(1, null)
  var now = head
  for(i = 1; i < length; i += 1) {
    let nowNode = new ListNode(i + 1, null)
    now.next = nowNode
    now = nowNode
  }
  return head
}

// two pointer
var removeNthFromEnd = function (head, n) {
  const dummyHead = new ListNode(-1, head)
  var left = dummyHead
  var right = head
  while(n > 0 && right.next) {
    right = right.next
    n -= 1
  }
  while(right.next) {
    right = right.next
    left = left.next
  }
  console.log(left, right)
  left.next = left.next.next
  return head
};

const head = createList(5)
removeNthFromEnd(head, 2)
