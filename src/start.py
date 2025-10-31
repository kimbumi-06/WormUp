import pygame

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (202, 242, 1)

class StartMenu:
    def __init__(self, screen_width, screen_height):
        self.center_x = screen_width // 2
        self.center_y = screen_height // 2

        self.font_large = pygame.font.Font(None, 100)
        self.font_medium = pygame.font.Font(None, 50)

        def draw(self, screen):
        screen.fill(BLACK) 
        
        # 1. 로고 그리기
        logo_text = self.font_large.render("WORM UP!", True, GREEN)
        logo_rect = logo_text.get_rect(center=(self.center_x, self.center_y - 50))
        screen.blit(logo_text, logo_rect)

class Choose: 
    """
    러닝시작하기
    게임모드선택

    버튼 두개(솔로, 경쟁)
    """


class SoloPlay:
    """
    < solo play > (화살표 누르면 경쟁 화면으로 이동)

    텍스트

    지도(예시)

    색선택
    시작버튼
    거리 선택
    """