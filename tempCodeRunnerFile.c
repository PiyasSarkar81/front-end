#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define MAX_STACK_SIZE 100

typedef struct {
    int top;
    int data[MAX_STACK_SIZE];
} Stack;

void push(Stack *s, int val) {
    if (s->top == MAX_STACK_SIZE - 1) {
        printf("Error: stack overflow\n");
        exit(1);
    }
    s->top++;
    s->data[s->top] = val;
}

int pop(Stack *s) {
    if (s->top == -1) {
        printf("Error: stack underflow\n");
        exit(1);
    }
    int val = s->data[s->top];
    s->top--;
    return val;
}

int evaluate_postfix(char *exp) {
    Stack s;
    s.top = -1;
    int i, op1, op2, val;
    char ch;

    for (i = 0; exp[i] != '\0'; i++) {
        ch = exp[i];
        if (isdigit(ch)) {
            push(&s, ch - '0');  // convert char digit to integer
        } else {
            op2 = pop(&s);
            op1 = pop(&s);
            switch (ch) {
                case '+': val = op1 + op2; break;
                case '-': val = op1 - op2; break;
                case '*': val = op1 * op2; break;
                case '/': val = op1 / op2; break;
                case '%': val = op1 % op2; break;
                default: printf("Error: invalid operator\n"); exit(1);
            }
            push(&s, val);
        }
    }
    return pop(&s);
}

int main() {
    char exp[] = "438-*";
    int result = evaluate_postfix(exp);
    printf("Result: %d\n", result);
    return 0;
}
