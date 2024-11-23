// Elements
const getStartedButton = document.getElementById('getStarted');
const resumeSection = document.getElementById('resumeSection');
const resumeForm = document.getElementById('resumeForm');
const previewButton = document.getElementById('previewButton');
const resumePreview = document.getElementById('resumePreview');
const previewName = document.getElementById('previewName');
const previewEmail = document.getElementById('previewEmail');
const previewSkills = document.getElementById('previewSkills');
const downloadPdfButton = document.getElementById('downloadPdf');

// Preview Resume
previewButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;
  
    if (name && email && skills) {
      previewName.textContent = `Name: ${name}`;
      previewEmail.textContent = `Email: ${email}`;
      previewSkills.textContent = `Skills: ${skills}`;
      resumePreview.classList.remove('hidden');
    } else {
      alert('Please fill all fields');
    }
  });
  
  // Download PDF
  downloadPdfButton.addEventListener('click', () => {
    const element = document.getElementById('resumePreview');
    html2pdf().from(element).save('resume.pdf');
  });
  