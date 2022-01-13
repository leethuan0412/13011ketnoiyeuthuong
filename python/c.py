import pygame
pygame.init()
screen = pygame.display.set_mode((500,600))
GREY = (150,150,150)
WHITE =(255,255,255)
BLACK = (0,0,0)
running = True
font = pygame.font.SysFont('sans',50)
text_1=font.render('+',True,BLACK)
text_2 = font.render('Start',True,BLACK)
while running:
	screen.fill(GREY)
	screen.blit(text_1,(100,50))
	screen.blit(text_2,(300,50))

	mouse_x,mouse_y = pygame.mouse.get_pos()
	print(mouse_x)
	#print(mouse_y)

	pygame.draw.rect(screen,WHITE,(50,50,50,50))
	pygame.draw.rect(screen,WHITE,(150,50,50,50))
	#pygame.draw.rect(screen,WHITE,(300,50,100,50))
	pygame.draw.rect(screen,BLACK,(50,520,400,50))
	pygame.draw.rect(screen,WHITE,(60,530,380,30))
	pygame.draw.circle(screen,BLACK,(250,400),100)
	pygame.draw.circle(screen,WHITE,(250,400),95)
	pygame.draw.line(screen,BLACK,(250,400),(250,310))
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			running = False
			if event.type== pygame.MOUSEBUTTONDOWN:
				if(100<mouse_x<150) and (50<mouse_y<100):
					print("press + min")
				if(300<mouse_x<450) and (50<mouse_y<100):
					print("press + min")	
	pygame.display.flip()
pygame.quit()