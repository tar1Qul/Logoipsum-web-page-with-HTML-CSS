
    document.addEventListener('DOMContentLoaded', function() {
  const languageSelector = document.querySelector('.language-selector');
    const languageToggle = document.querySelector('.language-toggle');
    const currentLanguage = document.querySelector('.current-language');
    const languageLinks = document.querySelectorAll('.language-dropdown a');

    // Toggle dropdown visibility
    languageToggle.addEventListener('click', function(e) {
        e.stopPropagation();
    const dropdown = this.nextElementSibling;
    const isVisible = dropdown.style.opacity === '1';
    
    document.querySelectorAll('.language-dropdown').forEach(d => {
        d.style.opacity = '0';
    d.style.visibility = 'hidden';
    d.style.transform = 'translateY(10px)';
    });

    if (!isVisible) {
        dropdown.style.opacity = '1';
    dropdown.style.visibility = 'visible';
    dropdown.style.transform = 'translateY(0)';
    }
  });

  // Change language
  languageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            currentLanguage.textContent = lang.toUpperCase();

            // Close dropdown
            this.closest('.language-dropdown').style.opacity = '0';
            this.closest('.language-dropdown').style.visibility = 'hidden';
            this.closest('.language-dropdown').style.transform = 'translateY(10px)';

            // Here you would typically:
            // 1. Save language preference to localStorage
            // 2. Reload page with new language
            // 3. Or make an AJAX call to update content
            localStorage.setItem('preferredLanguage', lang);
            console.log(`Language changed to ${lang}`);

            // For a real implementation, you would need to:
            // - Have translated content ready
            // - Implement language switching logic
        });
  });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        document.querySelectorAll('.language-dropdown').forEach(dropdown => {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(10px)';
        });
  });

    // Load preferred language from storage
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    currentLanguage.textContent = savedLang.toUpperCase();
});
