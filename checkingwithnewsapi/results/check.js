const express = require('express');
const axios = require('axios');
const readlineSync = require('readline-sync');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function simulateSportsGame(teamPrediction, country, category) {
  try {
    // Make a request to the News API (replace 'YOUR_NEWS_API_KEY' with your actual API key)
    const newsApiKey = 'YOUR_NEWS_API_KEY';
    const newsApiUrl = 'https://newsapi.org/v2/top-headlines';
    const response = await axios.get(newsApiUrl, {
      params: {
        country: country,
        category: category,
        apiKey: newsApiKey,
      },
    });

    // Check if the response contains articles
    if (response.data.articles && response.data.articles.length > 0) {
      // Analyze the content of the articles to determine if the chosen team won
      const articles = response.data.articles;
      const teamWon = checkTeamWonInArticles(articles, teamPrediction);
      console.log(`Did ${teamPrediction} win the match? ${teamWon ? 'Yes' : 'No'}`);
      return teamWon;
    } else {
      console.log('No sports articles found in the response.');
      return false;
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return false;
  }
}

function checkTeamWonInArticles(articles, teamPrediction) {
  const teamKeyword = teamPrediction.toLowerCase();

  for (const article of articles) {
    if (article.title.toLowerCase().includes(teamKeyword) || article.description.toLowerCase().includes(teamKeyword)) {
      return true;
    }
  }

  return false;
}

// Endpoint to simulate the sports game
app.post('/simulate-game', async (req, res) => {
  const { teamPrediction, country, category } = req.body;

  if (!teamPrediction || !country || !category) {
    return res.status(400).json({ error: 'Missing required parameters.' });
  }

  const teamWon = await simulateSportsGame(teamPrediction, country, category);
  res.json({ teamWon });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Simulate the game initially
const initialTeamPrediction = readlineSync.question('Choose the team you think will win (e.g., India): ');
simulateSportsGame(initialTeamPrediction, 'in', 'sports');
