// Основний файл першої сторінки. Сюди будуть імпортуватися окремі функції з ./js/index
// Додавайте ці окремі файли саме у ту папку і експортуйте сюди.
import {createArrOfGenres} from './js/index/trending-fetch';
import { getMoviesMcp } from './js/index/trending-fetch';

getMoviesMcp();
