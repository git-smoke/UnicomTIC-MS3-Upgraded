
export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: "",
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Business Letter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px auto;
      max-width: 700px;
      line-height: 1.6;
    }
    header {
      margin-bottom: 30px;
    }
    .sender-address, .receiver-address, .date, .signature {
      margin-bottom: 20px;
    }
    .body {
      margin-bottom: 30px;
    }
    h1 {
      font-size: 20px;
      margin-bottom: 5px;
    }
    .signature h2 {
      margin-top: 40px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <header>
    <div class="sender-address">
      <strong>Your Name</strong><br>
      Your Address<br>
      City, State, ZIP Code<br>
      Phone Number<br>
      Email Address
    </div>
    <div class="date">
      <strong>Date:</strong> December 14, 2024
    </div>
  </header>

  <section>
    <div class="receiver-address">
      <strong>Recipient Name</strong><br>
      Recipient Title (e.g., Manager)<br>
      Company Name<br>
      Address<br>
      City, State, ZIP Code
    </div>
  </section>

  <section class="body">
    <h1>Subject: Your Subject Line Here</h1>
    <p>Dear [Recipient Name],</p>
    <p>
      I am writing to you regarding [specific topic]. 
      I appreciate your attention to this matter and would like to provide some additional details regarding my concerns. 
      [Explain the purpose of the letter in a concise and professional manner.]
    </p>
    <p>
      Please let me know if further clarification or additional documentation is required. I look forward to your prompt response.
    </p>
    <p>Thank you for your time and consideration.</p>
    <p>Sincerely,</p>
  </section>

  <footer class="signature">
    <h2>Your Name</h2>
    <p>Job Title (if applicable)<br>
       Company (if applicable)</p>
  </footer>
</body>
</html>

        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg"
    },
    {
        id: "software-proposal",
        label: " Software development proposal",
        imageUrl: "/software-proposal.svg"
    },
    {
        id: "project-proposal",
        label: "Project proposal",
        imageUrl: "/project-proposal.svg"
    },
    {
        id: "cover-letter",
        label: "Cover letter",
        imageUrl: "/cover-letter.svg"
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg"
    },
]