#include <stdio.h>

int main() {
    int num1, num2;
    printf("Enter two numbers separated by a comma: ");
    scanf("%*[^,]%d", &num2); // Skips characters until comma, then reads an integer
    printf("Second number entered: %d\n", num2);
    return 0;
}


#include <stdio.h>

int main() {
    char input[100]; // Assuming a maximum length of input
    
    printf("Enter input (terminate with comma): ");
    scanf("%[^,]", input); // Scans everything until a comma is encountered
    
    printf("Input: %s\n", input);
    
    return 0;
}
