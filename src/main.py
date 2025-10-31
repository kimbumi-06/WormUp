import pygame
import sys # 시스템 종료를 위해 필요

from player import Player
from src.game_logic import check_collision, update_score, game_over
from start import StartMenu, Choose, SoloPlay
from game import GameMenu

SCREEN_WIDTH = 300
SCREEN_HEIGHT = 800
TITLE = "Worm Up"
FPS = 15

BLACK = (0, 0, 0)
"""
검은배경
currentmenu = startmenu
current page = choose -> soloplay

menu = gamemenu
"""


def main():
    pygame.init()
    
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    #pygame.display.set_caption(TITLE) #글자로 넣을지 이미지로 넣을지 모르겠습니다
    clock = pygame.time.Clock()
    
    running = True
    
    current_menu = StartMenu(SCREEN_WIDTH, SCREEN_HEIGHT)
    current_page = Choose(SCREEN_HEIGHT, SCREEN_WIDTH)
    
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
                
            event_signal = current_menu.handle_input(event)
            
            screen.fill(BLACK)

            "menu부터 확인을 하는게 맞지않나? 나중에 수정하겠습니다"
            if event_signal == "GOTO_SOLO":
                current_page = SoloPlay(SCREEN_WIDTH, SCREEN_HEIGHT)

            elif event_signal == "GOTO_GAMEMENU":
                current_menu = GameMenu(SCREEN_WIDTH, SCREEN_HEIGHT)
        
            
        current_menu.update()
        current_page.update()

        current_menu.draw(screen)
        current_page.draw(screen)
        
        
        pygame.display.flip() 
        clock.tick(FPS)

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    main()