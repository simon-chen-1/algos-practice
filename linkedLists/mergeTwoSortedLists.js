// Link to problem: https://leetcode.com/problems/merge-two-sorted-lists/description/

var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode();
    let tail = dummyHead;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if (list1 !== null) {
        tail.next = list1;
    } else if (list2 !== null) {
        tail.next = list2;
    }

    return dummyHead.next;
};

// Approach:
// Use a dummy head so we can create and return the merged list that comes after it. Also declare a variable called
// tail to keep track of the latest node in the list so far. Then we want to check to see if the head of list 1 is less than
// the head of list 2. If so, we set the tail's next pointer to the head of list 1 and move the head of list 1 down
// to its next node. Otherwise, if the head of list 2 is less than the head of list 1 , we set the tail's next pointer to
// the head of list 2 and move the head of list 2 down to its next node. We continue doing this as long as both lists
// are not empty. Once one or both becomes empty, we check to see if there's any nodes in either list reamaining. If
// so, we just append them onto the tail's next pointer and return the dummy head's next node (which should be the head
// of our sorted list now).

// Time Complexity:
// O(n + m) where n represents the number of nodes in list 1 and m represents the number of nodes in list 2. We're
// going to have to traverse both lists in order to merge them

// Space Complexity:
// O(1). We're technically not allocating new nodes here, we're just merging the existing lists into 1 list.