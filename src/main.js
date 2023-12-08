import './style.css';

const OPENAI_API_KEY = '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';

const generateForm = document.querySelector('.generate-form');
const imageGallery = document.querySelector('.image-gallery');
const generateAiImages = async (userPrompt, userImgQuantity) => {
  try {
    const response = await fetch(' https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: userPrompt,
        n: +userImgQuantity,
        size: '512x512',
        response_format: 'b64_json',
      }),
    });

    if (!response.ok) throw new Error('Failed to generate images!');
    const { data } = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const handleFormSubmission = (e) => {
  e.preventDefault();
  const userPrompt = e.target[0].value;
  const userImgQuantity = e.target[1].value;
  // creating HTML markup
  const imgCardMarkup = Array.from({ length: userImgQuantity }, () => `<div class="img-card loading">
      <img src="./images/loader.svg"  alt="image" />
      <a href="#" class="download-button">
        <img src="./images/download.svg" alt="download icon" />
      </a>
    </div>`).join('');

  imageGallery.innerHTML = imgCardMarkup;
  generateAiImages(userPrompt, userImgQuantity);
};
generateForm.addEventListener('submit', handleFormSubmission);
