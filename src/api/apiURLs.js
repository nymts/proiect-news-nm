const API_KEY = "d8a5e06a-a8fd-452b-bb03-206963435fe1";

export function getNewsCategoriesURL(category, pageNumber = 1, pageSize = 20) {
  
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;
  return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
}
