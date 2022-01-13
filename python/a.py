import pyttsx3
import speech_recognition
from datetime import date
from datetime import datetime
robot_ear = speech_recognition.Recognizer()
robot_mouth = pyttsx3.init()
robot_brain=""
with speech_recognition.Microphone() as mic:
	print(" robot: i'm listening")
	audio = robot_ear.listen(mic)
try:
you = robot_ear.recognize_google(audio)
except:
	you== ""
print("you" + you)
if you== "";
robot_brain="i can't hear you,try again"
elif "hello" in you:
	robot_brain = "hello thuan"
elif "today" in you:
	today = date.today()
	robot_brain = today.strftime("%B %d, %Y")
elif "today" in you:
	now = datetime.now()
	robot_brain = now.strftime("%H:%M:%S")
else:
	robot_brain= "thank you"
print("robot: " + robot_brain)
robot_mouth.say(robot_brain)
robot_mouth.runAndWait()
