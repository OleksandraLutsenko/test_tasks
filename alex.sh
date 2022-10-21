#!/bin/bash
#create 25 empty files with username input

#ls | grep txt > output.txt 

echo "Enter your name"
read USERNAME
SEDTEXT="sed 's/$USERNAME/0/'"
LSCOMMAND="ls | $SEDTEXT | sort -n | tail -1 | cut -c -3 | cut -c 2,3,4"

RES=$(eval "$LSCOMMAND")

#check if we have any files with number > then 0
if (($RES>0))
then
	COUNTER=$RES
	((COUNTER++))
else 
    COUNTER=1
fi

#iterating 25 times creating files
MAX_NUM=$COUNTER+25
while (($COUNTER<$MAX_NUM)); do
        touch $USERNAME$COUNTER.txt
        ((COUNTER++))
done

echo "Files are created succesfully"