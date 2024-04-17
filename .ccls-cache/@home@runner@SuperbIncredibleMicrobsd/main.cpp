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

  return 0;
}