#include <stdio.h>
#include <stdlib.h>

struct Day {
    char *dayName;
    int date;
    char *activity;
};

void create (struct Day *day) {
    day->dayName = (char *)malloc(sizeof(char) *20);
    day->activity =(char*)malloc(sizeof(char)*100);
 
    printf("Enter the day name:");
    scanf("%s", day->dayName);

    printf("enter the date :");
    scanf("%d", date-> date);
    
}
void read (struct Day *calendar, int size) {
    for (int i = 0, i < size; i++) {
        printf("enter the details for Day %d:\n",i+1)
        create(&calendar[i]);
    }
    }
void display (struct Day *calendar, int size) {
    printf("\n Weeks Activity Details:"\n)
    for (int i =0, i < size; i++) {

    }
    prin
}
    



