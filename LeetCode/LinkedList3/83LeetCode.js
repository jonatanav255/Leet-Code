// 83. Remove Duplicates from Sorted List
// This is the input class for the linked list nodes. Do not edit.
class ListNode {
  constructor(value) {
    this.value = value; // Value of the node
    this.next = null; // Pointer to the next node
  }
}

// Function to remove duplicates from a sorted linked list
// const values = [1, 1, 2, 3, 3];
function deleteDuplicates(linkedList) {
  let current = linkedList;

  while (current !== null && current.next !== null) {
    if (current.value === current.next.value) {
      // Remove duplicate by skipping the next node
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return linkedList; // Return the modified list
}

// Helper function to create a linked list from an array
function createLinkedList(values) {
  if (values.length === 0) return null; // Handle empty array case

  let head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
  const result = [];
  while (head !== null) {
    result.push(head.value);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

// Example usage:
const values = [1, 1, 2, 3, 3]; // You can modify this array to test other inputs
const linkedList = createLinkedList(values);

console.log("Original Linked List:");
printLinkedList(linkedList);

const modifiedList = deleteDuplicates(linkedList);

console.log("Linked List after removing duplicates:");
printLinkedList(modifiedList);
