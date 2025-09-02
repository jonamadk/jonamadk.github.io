document.addEventListener('DOMContentLoaded', function () {

    // =================================================================
    // DARK MODE TOGGLE LOGIC
    // =================================================================
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    const darkIcons = document.querySelectorAll('.theme-toggle-dark-icon');
    const lightIcons = document.querySelectorAll('.theme-toggle-light-icon');

    // Function to update the theme icons based on the current mode
    function updateThemeIcons(isDark) {
        if (isDark) {
            lightIcons.forEach(icon => icon.classList.remove('hidden'));
            darkIcons.forEach(icon => icon.classList.add('hidden'));
        } else {
            darkIcons.forEach(icon => icon.classList.remove('hidden'));
            lightIcons.forEach(icon => icon.classList.add('hidden'));
        }
    }

    // Check for saved theme in localStorage or system preference on page load
    const isDarkMode = localStorage.getItem('color-theme') === 'dark' || 
                       (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Apply the initial theme
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }

    // Add click event listener to all theme toggle buttons
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle the 'dark' class on the <html> element
            const isDark = document.documentElement.classList.toggle('dark');
            // Save the user's preference to localStorage
            localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
            // Update the icons on all toggle buttons
            updateThemeIcons(isDark);
        });
    });


    // =================================================================
    // EXISTING MOBILE MENU AND SCROLL LOGIC
    // =================================================================
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.querySelector('header');
    const body = document.querySelector('body');

    // Function to open the menu
    function openMobileMenu() {
        mobileMenu.classList.remove('-translate-y-full');
        body.classList.add('menu-open');
    }

    // Function to close the menu
    function closeMobileMenu() {
        mobileMenu.classList.add('-translate-y-full');
        body.classList.remove('menu-open');
    }

    mobileMenuButton.addEventListener('click', openMobileMenu);
    mobileMenuCloseButton.addEventListener('click', closeMobileMenu);
    
    // Change navbar color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('bg-scrolled-nav-bg', 'shadow-md', 'backdrop-blur-sm');
            header.classList.remove('bg-light-blue-bg');

        } else {
            header.classList.remove('bg-scrolled-nav-bg', 'shadow-md', 'backdrop-blur-sm');
            header.classList.add('bg-light-blue-bg');
        }
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu after a link is clicked, if it's open
            if (!mobileMenu.classList.contains('-translate-y-full')) {
                closeMobileMenu();
            }
        });
    });
});