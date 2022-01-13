import speech_recognition

robot_ear = speech_recognition.Recognizer()
with speech_recognition.Microphone() as mic:
	print(" robot: i'm listening")
	audio = robot_ear.listen(mic)
	
you = robot_ear.recognize_google(audio)

print(you)