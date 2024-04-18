#include <iostream>
using namespace std;

class Node {
public:
  int data;
  Node *next;

  // Constructor
  Node(int data) {
    this->data = data;
    this->next = NULL;
  }

  // destructor
  ~Node() {
    int value = this->data;
    // memoryfree
    if (this->next != NULL) {
      delete next;
      this->next = NULL;
    }
    cout << "memory is free for node with data " << value << endl;
  };
  // inserting new node at head
  void insertAthead(Node *&head, int d) {

    Node *temp = new Node(d);
    temp->next = head;
    head = temp;
  }

  // inserting new node at tail
  void insertAttail(Node *&tail, int d) {
    Node *temp = new Node(d);
    tail->next = temp;
    tail = temp;
  }

  // insert in middle
  void insertAtposition(Node *&head, Node *&tail, int position, int d) {

    // insert at start
    if (position == 1) {
      insertAthead(head, d);
      return;
    }
    Node *temp = new Node(d);
    temp->next = head;

    while (cnt < position - 1) {
      temp = temp->next;
      cnt++;
    }

    // creating a node for d
    Node *nodeToInsert = new Node(d);
    nodeToInsert->next = temp->next;
    temp->next = nodeToInsert;
  }

  void deleteNode(int position, Node *&head) {
    // deleting first or start node
    if (position == 1) {
      Node *temp = head;
      head = head->next;
      temp->next = NULL;
      delete temp;
    } else {
      // deleting any middle node or last node

      Node *curr = head;
      Node *prev = NULL;

      int cnt = 1;
      while (cnt <= position) {
        prev = curr;
        curr = curr->next;
        cnt++;
      }

      prev->next = curr->next;
      curr->next = NULL;
      delete curr;
    }
  }

  void print(Node *&head) {

    Node *temp = head;
    while (temp != NULL) {
      cout << temp->data << " ";
      temp = temp->next;
    }
    cout << endl;
  }

  int main() {

    // creating a new node
    Node *node1 = new Node(10);
    // cout << node1 -> data << endl;
    // cout << node1 -> next << endl;

    // head pointed to node1
    Node *head = node1;
    print(head);

    insertAthead(head, 12);
    print(head);

    insertAthead(head, 15);
    print(head);

    deleteNode(3, head);
    print(head);

    return 0;
  }