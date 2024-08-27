import React from "react";

function AboutUs(){
    return(
        <div>
<head>
  <title>About Us - Lifestyle Blog</title>
  {/* <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    header {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    .container {
      width: 80%;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1, h2, p {
      text-align: center;
    }
  </style> */}
</head>
<body>

  <header>
    <h1>About Us - Lifestyle Blog</h1>
  </header>

  <div className="container">
    <h2>Welcome to Our Lifestyle Blog!</h2>
    <p>
      At our lifestyle blog, we're dedicated to sharing the latest trends, tips, and insights across various aspects of life – from fashion and beauty to travel and food. Our mission is to inspire and guide you on your journey to a fulfilling lifestyle.
    </p>

    <h2>Our Story</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet posuere sapien id sodales. Morbi cursus augue at ante condimentum, et volutpat sem vehicula. Vivamus commodo purus sit amet lectus euismod, in varius velit scelerisque. Vestibulum consequat velit a libero vehicula.
    </p>

    <h2>What We Offer</h2>
    <p>
      Our blog covers a wide range of topics, including:
      <ul>
        <li>Fashion trends and style advice</li>
        <li>Beauty tips, skincare, and makeup tutorials</li>
        <li>Travel guides, destination reviews, and wanderlust inspiration</li>
        <li>Delicious recipes, culinary adventures, and foodie experiences</li>
      </ul>
    </p>

    <h2>Meet Our Team</h2>
    <p>
      We're a passionate team dedicated to curating engaging and valuable content for our readers. Get to know our team members:
      <ul>
        <li>John Doe - Founder & Editor-in-Chief</li>
        <li>Jane Smith - Fashion Editor</li>
        <li>David Johnson - Travel Contributor</li>
        <li>Emily Brown - Beauty Writer</li>
      </ul>
    </p>
  </div>

</body>

        </div>
    );
}

export default AboutUs;