// Combined JavaScript for the enhanced landing page

// ===== Hero Slideshow =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('heroDots');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

// build dots based on existing slides
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('button');

function showSlide(n) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlideFn() { showSlide(currentSlide - 1); }
function goToSlide(n) { showSlide(n); }

// auto-play every 5s
let timer = setInterval(nextSlide, 5000);
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
}

// event listeners
nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
prevBtn.addEventListener('click', () => { prevSlideFn(); resetTimer(); });

// init
showSlide(0);

// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const siteHeader = document.getElementById('siteHeader');
  
  // Toggle mobile menu
  navToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });
});

// ===== FAQ Accordion Functionality =====
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
});

// ===== Sticky CTA Button Functionality =====
document.addEventListener('DOMContentLoaded', function() {
  const stickyCta = document.getElementById('stickyCta');
  const heroSection = document.getElementById('hero');
  
  // Show sticky CTA after scrolling past hero section
  window.addEventListener('scroll', function() {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (window.scrollY > heroBottom - 100) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
  });
});

// ===== Scroll Animation Functionality =====
document.addEventListener('DOMContentLoaded', function() {
  // Elements to animate
  const animateElements = document.querySelectorAll('.animate-fade, .animate-scale, .animate-slide, .feature-card, .price-card, .testimonial-card, .metric-card, .faq-item');
  
  // Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  // Intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);
  
  // Observe all elements
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add animation classes to elements
  document.querySelectorAll('.feature-card').forEach(card => {
    card.classList.add('animate-fade');
  });
  
  document.querySelectorAll('.price-card').forEach(card => {
    card.classList.add('animate-scale');
  });
  
  document.querySelectorAll('.testimonial-card').forEach(card => {
    card.classList.add('animate-fade');
  });
  
  document.querySelectorAll('.metric-card').forEach(card => {
    card.classList.add('animate-scale');
  });
  
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.add('animate-slide');
  });
});

// ===== Smooth Scrolling for Anchor Links =====
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Get header height for offset
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: 'smooth'
        });
        
        // Update URL without page jump
        history.pushState(null, null, targetId);
      }
    });
  });
});

// ===== Form Submission Handling =====
document.addEventListener('DOMContentLoaded', function() {
  // Demo form
  const demoForm = document.querySelector('.demo-form');
  if (demoForm) {
    demoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(demoForm);
      const name = formData.get('name') || demoForm.querySelector('input[type="text"]').value;
      
      // Show success message
      demoForm.innerHTML = `
        <div class="form-success">
          <h3>Thank you, ${name}!</h3>
          <p>We'll be in touch shortly to schedule your demo.</p>
        </div>
      `;
    });
  }
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      newsletterForm.innerHTML = `
        <div class="form-success">
          <h3>Thank you for subscribing!</h3>
          <p>You'll receive our next newsletter soon.</p>
        </div>
      `;
    });
  }
});