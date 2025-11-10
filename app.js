// Typing animation for hero subtitle
const subtitle = document.getElementById('heroSubtitle');
const text = 'Web Developer & Tech Enthusiast';
let index = 0;

function typeWriter() {
  if (index < text.length) {
    subtitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing animation after page load
window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// Sticky navbar on scroll
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScrollTop = scrollTop;
});

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Smooth scroll and active navigation highlighting
const sections = document.querySelectorAll('.section, .hero-section');
const navItems = document.querySelectorAll('.nav-link');

function setActiveNav() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNav);

// Intersection Observer for section animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  if (section.classList.contains('section')) {
    sectionObserver.observe(section);
  }
});

// Skill bar animation
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillItems = entry.target.querySelectorAll('.skill-item');
      skillItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
          const progress = item.querySelector('.skill-progress');
          const progressValue = progress.getAttribute('data-progress');
          progress.style.setProperty('--progress-width', `${progressValue}%`);
          progress.classList.add('animate');
        }, index * 100);
      });
    }
  });
}, { threshold: 0.3 });

const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach(category => {
  skillObserver.observe(category);
});

// Project modal
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

viewDetailsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Basic form validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (name && email && subject && message) {
    // Hide form and show success message
    contactForm.style.display = 'none';
    formSuccess.classList.add('active');
    
    // Reset form
    contactForm.reset();
    
    // Show form again after 5 seconds
    setTimeout(() => {
      contactForm.style.display = 'flex';
      formSuccess.classList.remove('active');
    }, 5000);
  }
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const heroBackground = document.querySelector('.hero-background');
  const scrolled = window.pageYOffset;
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add smooth reveal animation to hobby cards
const hobbyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

const hobbyCards = document.querySelectorAll('.hobby-card');
hobbyCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.6s ease ${index * 0.2}s`;
  hobbyObserver.observe(card);
});

// Add animation to project cards
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.6s ease ${index * 0.2}s`;
  projectObserver.observe(card);
});

// Timeline animation
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, { threshold: 0.2 });

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  item.style.transition = 'all 0.6s ease';
  timelineObserver.observe(item);
});

// Education card animation
const educationCard = document.querySelector('.education-card');
if (educationCard) {
  educationCard.style.opacity = '0';
  educationCard.style.transform = 'translateY(30px)';
  educationCard.style.transition = 'all 0.6s ease';
  
  const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });
  
  educationObserver.observe(educationCard);
}