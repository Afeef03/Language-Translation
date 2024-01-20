import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [loading, setLoading] = useState(false);
  const randomPrompts = [
    "Design an abstract cityscape with neon lights and futuristic architecture.",
    "Illustrate a dreamlike underwater scene with glowing jellyfish and exotic fish.",
    "Imagine a magical forest with floating lanterns, talking animals, and enchanted trees.",
    "Create a space exploration scene with distant galaxies, planets, and a spacecraft.",
    "Paint a whimsical scene of a hot air balloon festival in a sunset sky.",
    "Design a futuristic vehicle cruising through a bustling cyberpunk city.",
    "Illustrate a tranquil beach sunset with palm trees and gentle waves.",
    "Imagine a steampunk-inspired world with intricate machinery and airships.",
    "Create a fantasy realm with mythical creatures, castles, and ancient ruins.",
    "Paint a celestial landscape with shooting stars and a cosmic aurora.",
  ];


  const handleGenerate = async () => {
    try {

      setLoading(true)
      const response = await axios.post(`http://localhost:3000/api/generate`, {
        prompt: inputText,
      });

      console.log('Response Status:', response.status);

      const newImageData = response.data;
      console.log('Response Data:', newImageData);
      setLoading(false)
      toast.success("Image generated", {
        theme: 'dark'
      })
      setGeneratedImage(newImageData);
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error("An error ocurred while creating image", {
        theme: 'dark'
      })
      setLoading(false)
    }
  };

  const surpriseMeFunc = () => {
    const randomPrompt = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
    setInputText(randomPrompt)
    toast.success("Random prompt created", {
      theme: 'dark'
    })
  }

  return (
    <section className='image-app mt-5'>
      <section className='search-section'>
        <p>Start with a detailed description <span className='surprise' onClick={surpriseMeFunc}>Surprise Me</span></p>
        <div className="input-container">
          <input
            type="text"
            placeholder='An impressionist oil painting of a sunflower in a vessel....'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleGenerate}>Generate</button>
        </div>
      </section>

      {
        loading ? <Loader /> : <section className="image-section">
          {generatedImage ? (
            <img src={generatedImage.url} alt="Generated Image" />
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center "
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="gallery-photo"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center "
                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                    alt="gallery-photo"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center "
                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="gallery-photo"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="gallery-photo"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                    alt="gallery-photo"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      }
      <ToastContainer />
    </section>
  );
};

export default ImageGenerator;
