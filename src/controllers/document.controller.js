import fetch from "node-fetch";

export const getDocuments = async (req, res) => {
  const keywords = req.params.keywords.split(",");
  var q;

  for (var i = 0; i < keywords.length; i++) {
    if (i == 0) {
      q = keywords[i];
    } else {
      q = q + "+OR+" + keywords[i];
    }
  }

  const api_url = `https://api.dp.la/v2/items?api_key=9a0b8fa62079f5bf48fe71454041dd7b&fields=sourceResource.title,sourceResource.creator,isShownAt&q=${q}`;
  console.log(api_url);
  const fetch_response = await fetch(api_url);
  const documents = await fetch_response.json();

  res.status(200).json(documents.docs);
};
