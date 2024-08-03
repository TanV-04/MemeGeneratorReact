import React from "react";

export default function DownloadButton({ imgSrc, topText, bottomText }) {
  function download() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imgSrc;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      ctx.font = "bold 4rem Bangers";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.strokeStyle = "white";
      ctx.lineWidth = 5;
      ctx.textBaseline = "middle";

      // Draw top text
      const topTextMargin = 60; // Margin from the top
      const bottomTextMargin = 60; // Margin from the bottom

      // Draw top text with margin
      ctx.strokeText(topText, canvas.width / 2, topTextMargin);
      ctx.fillText(topText, canvas.width / 2, topTextMargin);

      // Draw bottom text with margin
      ctx.strokeText(
        bottomText,
        canvas.width / 2,
        canvas.height - bottomTextMargin
      );
      ctx.fillText(
        bottomText,
        canvas.width / 2,
        canvas.height - bottomTextMargin
      );

      const dataURL = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "meme.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={download}
        className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
      >
        Download Image
      </button>
    </div>
  );
}
