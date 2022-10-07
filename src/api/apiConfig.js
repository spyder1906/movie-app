const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'dcd0457908b3902805744b0c1831a6b2',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;