const ResumeDownload = () => {
  return (
    <div className="flex flex-col items-center my-36">
      <h2 className="text-4xl font-bold mb-4"> Resume </h2>
      <iframe
        src="/static/PortfolioResume.pdf" // Path to your PDF file in the public directory
        width="500" // Adjust width as needed
        height="700" // Adjust height as needed
        className="border-2 border-gray-300"
      >
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="/static/AlbanyPatriawan_Resume_Games.pdf">Download PDF</a>
      </iframe>
    </div>
  );
};
