const express = require("express");
const translate = require("google-translate-api");
const app = express();
const port = 3002;

app.use(express.json());

app.post("/translate", async (req, res) => {
  const { text, language } = req.body;

  if (!text || !language) {
    return res
      .status(400)
      .json({ error: "Пожалуйста, предоставьте текст и язык" });
  }

  try {
    let translations = {
      nameRu: await translateToLanguage(text, "ru"),
      nameEs: await translateToLanguage(text, "es"),
      nameEn: await translateToLanguage(text, "en"),
    };

    res.json(translations);
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    res.status(500).json({ error: "Возникла ошибка при обработке запроса" });
  }
});

async function translateToLanguage(text, targetLanguage) {
  try {
    const translation = await translate(text, {
      to: targetLanguage,
    });
    console.log(translation);
    return translation.text;
  } catch (error) {
    console.error("Ошибка перевода:", error);
    return `Ошибка перевода: ${error}`;
  }
}

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
