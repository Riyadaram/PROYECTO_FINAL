import { useState, useEffect } from "react";
import './ImgUpload.css';

const ImgUpload = () => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const handleChange = e => {
    const file = e.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch(`${import.meta.env.VITE_URL_API}`, {
      method: 'POST',
      body: fd,
      headers: { 'Authorization': 'Client-ID' },
    });
    const data = await res.json();
    console.log(data);
  };

  const handleFormSubmit = (e) => {
    handleSubmit(e);
  };

  useEffect(() => {
    const searchFilesBtn = document.querySelector(".search-files-btn");
    const fileInput = document.querySelector(".imgUpload input[type='file']");

    if (searchFilesBtn && fileInput) {
      const handleBtnClick = () => {
        // Trigger the click event on the file input
        fileInput.click();
      };

      const handleFileChange = () => {
        // You can add additional logic here if needed
        console.log("File selected:", fileInput.files[0]);
      };

      searchFilesBtn.addEventListener("click", handleBtnClick);
      fileInput.addEventListener("change", handleFileChange);

      return () => {
        // Cleanup event listeners when the component is unmounted
        searchFilesBtn.removeEventListener("click", handleBtnClick);
        fileInput.removeEventListener("change", handleFileChange);
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <form onSubmit={handleSubmit} className="imgUpload">
      <label>
        <img src={preview} alt="" />
        <input
          type="file"
          onChange={handleChange}
          accept="file/*"
        />
        <button type="button" className="search-files-btn">
          Search Files
        </button>
      </label>
      <button type="button" className="upload-btn" onClick={handleFormSubmit}>
        Upload
      </button>
    </form>
  );
};

export default ImgUpload;

