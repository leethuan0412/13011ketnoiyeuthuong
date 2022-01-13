from random import randint
print("nhap dam, la,keo : ")
player = input()
computer = randint(0,2)

if computer == 0:
	computer= "la"
if computer == 1:
	computer= "bua"
if computer == 2:
	computer= "keo"

print("you choose: " + player)
print("computer choose: " + computer)
if player == computer:
	print("draw")
else:
	if player =="keo":
		if computer == "dam":
			print("lose")
		else:
			print("win")
	elif player =="dam":
		if computer == "la":
			print("lose")
		else:
			print("win")
	elif player =="la":
		if computer == "keo":
			print("lose")
		else:
			print("win")
	else:
		print("nhap sai vui long nhap lai: ")