document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    // Get all tab content sections
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listener to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove 'active' class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // 2. Add 'active' class to the clicked button
            button.classList.add('active');

            // 3. Hide all tab content
            tabContents.forEach(content => content.classList.remove('active'));

            // 4. Get the ID of the content to show from the data-tab attribute
            const targetTabId = button.dataset.tab; // e.g., 'services', 'about', 'contact'

            // 5. Show the target tab content
            const targetTabContent = document.getElementById(targetTabId);
            if (targetTabContent) {
                targetTabContent.classList.add('active');
            }
        });
    });

    // Optional: If you want a specific tab to be active on page load
    // This is already handled by setting 'active' classes in HTML,
    // but this ensures consistency if the HTML was missing it.
    // Check if any tab is active, if not, activate the first one.
    const initialActiveTabButton = document.querySelector('.tab-button.active');
    if (!initialActiveTabButton && tabButtons.length > 0) {
        tabButtons[0].click(); // Simulate a click on the first button
    } else if (initialActiveTabButton) {
        // Ensure the corresponding content is also active on load
        const initialActiveContentId = initialActiveTabButton.dataset.tab;
        const initialActiveContent = document.getElementById(initialActiveContentId);
        if (initialActiveContent && !initialActiveContent.classList.contains('active')) {
            tabContents.forEach(content => content.classList.remove('active')); // Hide all first
            initialActiveContent.classList.add('active'); // Then show the correct one
        }
    }
});