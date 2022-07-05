function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const l1Size = getListNodeSize(l1);
    const l2Size = getListNodeSize(l2);
    if (l2Size > l1Size) {
        [l1, l2] = [l2, l1];
    }
    const output = [];
    let extra = 0;
    while (l1 || extra) {
        const sumV1V2 = (l1?.val || 0) + (l2?.val || 0) + extra;
        output.push((sumV1V2 % 10));
        extra = Math.floor(sumV1V2 / 10);
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    return createLinkedList(output);
};

const getListNodeSize = (ln) => {
    let size = 0;
    while (ln) {
        size++;
        ln = ln.next;
    }
    return size;
}

const createLinkedList = (arr) => {
    return arr.reduceRight((acc, curr) => {
        if (!acc) {
            acc = new ListNode(curr);
            return acc;
        }
        acc = new ListNode(curr, acc);
        return acc;
    }, null);
}



const l1 = createLinkedList([0])
const l2 = createLinkedList([7, 3])

console.log('addTwoNumbers(l1, l2): ', addTwoNumbers(l1, l2));



// var addTwoNumbers = function (l1, l2) {
//     let sum = '';
//     let extra = 0;
//     while (l1) {
//         const sumV1V2 = l1.val + l2?.val || 0;
//         sum = (sumV1V2 % 10) + extra + sum;
//         extra = Math.floor(sumV1V2 / 10);
//         l1 = l1.next;
//         l2.next && (l2 = l2.next);
//     }
//     return sum;
// };