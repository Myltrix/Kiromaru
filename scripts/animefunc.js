function openContentDetails(title, imageUrl, contentType) {
  console.log(`Opening ${contentType}:`, title);
  
  try {
    if (!title || !imageUrl || !contentType) {
      throw new Error("Missing required parameters");
    }

    const contentData = {
      title: title,
      image: imageUrl,
      type: contentType
    };

    localStorage.setItem('selectedAnime', JSON.stringify(contentData));
    
    localStorage.removeItem('selectedTitle');
    localStorage.removeItem('selectedImage');
    localStorage.removeItem('contentType');
    
    const page = contentType === 'anime' 
      ? 'anime-details.html' 
      : 'film-details.html';
    
    window.location.href = page;
  } catch (error) {
    console.error('Error in openContentDetails:', error);
    alert('Произошла ошибка при загрузке страницы');
  }
}

function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  if (carousel) {
    carousel.scrollBy({ 
      left: direction * 220, 
      behavior: 'smooth' 
    });
  }
}

function openAnimeDetails(title, imageUrl, contentType) {
  try {
    const animeData = {
      title: title,
      image: imageUrl,
      type: contentType
    };
    
    localStorage.setItem('selectedAnime', JSON.stringify(animeData));
    
    localStorage.removeItem('selectedTitle');
    localStorage.removeItem('selectedImage');
    localStorage.removeItem('contentType');

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

document.addEventListener('DOMContentLoaded', function () {
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('.section');

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

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + 100;
    sections.forEach((section, index) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        navDots.forEach(d => d.classList.remove('active'));
        navDots[index].classList.add('active');
      }
    });
  });
});

window.openContentDetails = openContentDetails;
window.scrollCarousel = scrollCarousel;