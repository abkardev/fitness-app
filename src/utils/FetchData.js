export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5e62698e5bmsh09bbf73b87f4991p1a03d2jsnd2078789a6d6',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

   export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5e62698e5bmsh09bbf73b87f4991p1a03d2jsnd2078789a6d6',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchData= async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();
    console.log(data);
    return data;
    
  }