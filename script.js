function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Set the default language of your page
        includedLanguages: 'en,es,fr,de,zh,ur,ar', // Added Urdu (ur) and Arabic (ar)
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Load the Google Translate API script and initialize the widget
(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);
})();

document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Populate About Section
        document.querySelector("#about h1").textContent = data.personal.name;
        document.querySelector("#about p:nth-child(2)").textContent = data.personal.title;
        document.querySelector("#about p:nth-child(3)").textContent = data.personal.location;

        // Populate Projects Section
        const projectsList = document.querySelector("#projects ul");
        projectsList.innerHTML = "";
        data.projects.forEach(project => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${project.title}:</strong> ${project.description}`;
            projectsList.appendChild(li);
        });

        // Populate Skills Section
        const technicalSkills = document.querySelector("#skills div:nth-child(1) ul");
        const softSkills = document.querySelector("#soft_skills  ul");

        technicalSkills.innerHTML = "";
        softSkills.innerHTML = "";

        data.skills.technical.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            technicalSkills.appendChild(li);
        });

        data.skills.soft.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            softSkills.appendChild(li);
        });

        // Populate Education Section
        const educationList = document.querySelector("#education ul");
        educationList.innerHTML = "";
        data.education.forEach(edu => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${edu.degree}:</strong> ${edu.institution} (${edu.duration})`;
            educationList.appendChild(li);
        });

        // Populate Certifications Section
        const certList = document.querySelector("#certifications ul");
        certList.innerHTML = "";
        data.certifications.forEach(cert => {
            const li = document.createElement("li");
            li.textContent = cert;
            certList.appendChild(li);
        });

        // Populate Contact Section
        document.querySelector("#contact a[href^='mailto']").textContent = data.personal.email;
        document.querySelector("#contact a[href^='mailto']").href = `mailto:${data.personal.email}`;
        document.querySelector("#contact a[href^='tel']").textContent = data.personal.socialMedia.phone;
        document.querySelector("#contact a[href^='tel']").href = `tel:${data.personal.socialMedia.phone}`;
        document.querySelector("#contact a[href^='https']").href = data.personal.socialMedia.instagram;
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
