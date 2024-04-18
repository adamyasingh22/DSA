#include <iostream>
using namespace std;

class Node {
public:
  int data;
  Node *prev;
  Node *next;

  // constructor
  Node(int d) {
    this->data = d;
    this->prev = NULL;
    this->next = NULL;
  }

  // destructor
  ~Node() {
    int val = this->data;
    if (next != NULL) {
      delete next;
      next = NULL;
    }
    cout << "memory is free for node with data " << val << endl;
  }
};

// traversing a linked list
void print(Node *head) {
  Node *temp = head;

  while (temp != NULL) {
    cout << temp->data << " ";
    temp = temp->next;
  }
  cout << endl;
}

// gives length of linked list
int getLength(Node *head) {
  int len = 0;
  Node *temp = head;
  while (temp != NULL) {
    len++;
    temp = temp->next;
  }
  return len;
}

// insert at head
void insertAtHead(Node *&head, int d) {

  // empty list
  if (head == NULL) {
    Node *temp = new Node(d);
    head = temp;
  } else {
    Node *temp = new Node(d);
    temp->next = head;
    head->prev = temp;
    head = temp;
  }
}

// insert at tail
void insertAtTail(Node *&tail, int d) {
  Node *temp = new Node(d);
  tail->next = temp;
  temp->prev = tail;
  tail = temp;
}

void insertAtPosition(Node *&tail, Node *&head, int position, int d) {
  // insert at start
  if (position == 1) {
    insertAtHead(head, d);
    return;
  }

  Node *temp = head;
  int cnt = 1;
  while (cnt < position - 1) {
    temp = temp->next;
    cnt++;
  }

  // inserting at last position
  if (temp->next == NULL) {
    insertAtTail(tail, d);
    return;
  }

  // creating a node for d
  Node *nodeToInsert = new Node(d);
  nodeToInsert->next = temp->next;
  temp->next->prev = nodeToInsert;
}

int main() {
  Node *node1 = new Node(10);
  Node *head = node1;
  Node *tail = node1;

  print(head);

  insertAtTail(tail, 25);
  print(head);

  return 0;
}