
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let size = getListNodeSize(head);
    let ll = null;
    while (head) {
        if (size === n) {
            size--;
            head = head?.next;
            continue;
        }
        ll = append(ll, head.val)
        size--;
        head = head?.next;
    }
    return ll;
};

const append = (ll, val) => {
    const node = {
        val,
        next: null
    }
    if (ll === null) {
        ll = node;
    } else {
        let curr = ll;
        while (curr.next) {
            curr = curr.next;

        }
        curr.next = node;
    }
    return ll;
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

const getListNodeSize = (ln) => {
    let size = 0;
    let tempLn = { ...ln }
    while (tempLn) {
        size++;
        tempLn = tempLn.next;
    }
    return size;
}
// const linkedList = createLinkedList([1])
const linkedList = createLinkedList([1, 2, 3, 4, 5])
// console.log(removeNthFromEnd(linkedList, 2));

// const head = removeNthFromEnd(linkedList, 1);
const head = removeNthFromEnd(linkedList, 2);
console.log(head);