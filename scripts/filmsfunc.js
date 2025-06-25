// Универсальная функция для открытия деталей
function openContentDetails(title, imageUrl, contentType) {
  console.log(`Opening ${contentType}:`, title);
  
  try {
    // Проверка данных
    if (!title || !imageUrl || !contentType) {
      throw new Error("Missing required parameters");
    }

    // Создаем объект с данными
    const contentData = {
      title: title,
      image: imageUrl,
      type: contentType
    };

    // Сохраняем данные в localStorage в том же формате, что и поиск
    localStorage.setItem('selectedAnime', JSON.stringify(contentData));
    
    // Очищаем старые отдельные ключи для совместимости
    localStorage.removeItem('selectedTitle');
    localStorage.removeItem('selectedImage');
    localStorage.removeItem('contentType');
    
    // Перенаправляем
    const page = contentType === 'anime' 
      ? 'anime-details.html' 
      : 'film-details.html';
    
    window.location.href = page;
  } catch (error) {
    console.error('Error in openContentDetails:', error);
    alert('Произошла ошибка при загрузке страницы');
  }
}

// Прокрутка карусели
function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  if (carousel) {
    carousel.scrollBy({ 
      left: direction * 220, 
      behavior: 'smooth' 
    });
  }

}// Логика фона и навигации по фильмам
const backgrounds = document.querySelectorAll('.site-background');
const filmSections = document.querySelectorAll('.film-section');
const navDots = document.querySelectorAll('.nav-dot');
let currentBackground = backgrounds[0];
let currentFilmIndex = 0;
let isTransitioning = false;

function switchBackground(newBg) {
  if (isTransitioning || currentBackground === newBg) return;
  isTransitioning = true;
  currentBackground.classList.remove('active');

  setTimeout(() => {
    newBg.classList.add('active');
    currentBackground = newBg;
    isTransitioning = false;
  }, 150);
}

function updateBackgroundOnScroll() {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  filmSections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + scrollPosition;
    const sectionBottom = sectionTop + rect.height;

    if (scrollPosition + windowHeight * 0.4 >= sectionTop &&
        scrollPosition <= sectionBottom - windowHeight * 0.4) {
      const newBg = backgrounds[index];
      if (currentBackground !== newBg) switchBackground(newBg);

      navDots.forEach(dot => dot.classList.remove('active'));
      navDots[index].classList.add('active');
      currentFilmIndex = index;
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  navDots.forEach(dot => {
    dot.addEventListener('click', function () {
      const sectionId = this.getAttribute('data-section');
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navDots.forEach(d => d.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    filmSections.forEach((section, index) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        navDots.forEach(dot => dot.classList.remove('active'));
        navDots[index].classList.add('active');
      }
    });
  });

  updateBackgroundOnScroll();
});

window.addEventListener('scroll', () => {
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(updateBackgroundOnScroll, 50);
});

window.addEventListener('resize', updateBackgroundOnScroll);

// Прокрутка карусели
function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  carousel.scrollBy({ left: direction * 220, behavior: 'smooth' });
}

// Открытие страницы фильма
// Открытие страницы с описанием (работает для аниме и фильмов)
function openAnimeDetails(title, imageUrl, contentType) {
  try {
    // Создаем объект с данными аниме
    const animeData = {
      title: title,
      image: imageUrl,
      type: contentType
    };
    
    // Сохраняем данные в localStorage в том же формате, что и поиск
    localStorage.setItem('selectedAnime', JSON.stringify(animeData));
    
    // Очищаем старые отдельные ключи для совместимости
    localStorage.removeItem('selectedTitle');
    localStorage.removeItem('selectedImage');
    localStorage.removeItem('contentType');

    // Перенаправляем на соответствующую страницу
    if (contentType === 'anime') {
      window.location.href = 'anime-details.html';
    } else if (contentType === 'film') {
      window.location.href = 'film-details.html';
    }
  } catch (error) {
    console.error('Error in openAnimeDetails:', error);
    alert('Произошла ошибка при загрузке аниме.');
  }
}

// Делаем функции глобальными
window.openContentDetails = openContentDetails;
window.scrollCarousel = scrollCarousel;
