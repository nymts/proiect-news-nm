// Ebben a függvényben alakítsuk át az API választ cikkekké.
export function apiResponseToArt(apiResponse) {
    if (!apiResponse || !apiResponse.response) {
      return [];
    }
  
    const unprocessedArt = apiResponse.response.results;
    const transformedArt = unprocessedArt.map((article) => {
      return {
        id: article.id,
        thumbnail: article.fields.thumbnail,
        title: article.fields.headline,
        description: article.fields.trailText,
      };
    });
  
    return transformedArt;
  }
  
  export function apiResponseToArtDetails(apiResponse) {
    if (!apiResponse || !apiResponse.response) {
      return {};
    }
  
    const unprocessedArtDetails = apiResponse.response.content;
    const transformedArtDetails = {
      title: unprocessedArtDetails.fields.headline,
      date: unprocessedArtDetails.webPublicationDate,
      description: unprocessedArtDetails.fields.trailText,
      image: unprocessedArtDetails.fields.main,
      content: unprocessedArtDetails.fields.body,
      author: unprocessedArtDetails.fields.byline,
      thumbnail: unprocessedArtDetails.fields.thumbnail,
    };
  
    return transformedArtDetails;
  }
  