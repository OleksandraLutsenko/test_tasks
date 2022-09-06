class User {
  constructor() {
    this.subscribtions = [];
  }

  subscribe(streamingService) {
    //   const {streamingService: service} = this.subscribtions;
    // console.log(service);
    if (
      this.subscribtions.find(
        (service) => service.name === streamingService.name
      )
    ) {
      console.log("You cannot subscribe twice for the same service");
    } else {
      const newSubscribtion = new Subscribtion(streamingService);
      this.subscribtions.push(new Subscribtion(streamingService));
      return newSubscribtion;
    }
  }
}

class Subscribtion {
  constructor(streamingService) {
    this.streamingService = streamingService;
  }

  watch(showName) {
    const { shows } = this.streamingService;
    const count = {};

    if (shows.find((show) => show.name === showName)) {
      console.log(`You're watching ${showName}`);
      for (let show in count) {
        count[show] === showName
          ? (count[show] = count + 1)
          : (count[show] = 1);
      }

      StreamingService.viewsByShowNames(count);

      console.log(count);
    } else {
      console.log("No such a show on our streaming service");
    }
    // ? `You're watching ${showName}`
    // : "No such a show on our streaming service"
  }

  getRecommendationTrending() {
    // const thisYearMostViewed = Object.create(
    //   StreamingService.prototype.getMostViewedShowsOfYear("2022")
    // );
    // console.log(thisYearMostViewed);
  }

  getRecommendationByGenre(genre) {}
}

class StreamingService {
  constructor(name, shows) {
    (this.name = name), (this.shows = shows);
  }

  static viewsByShowNames(count) {
    console.log(count);
  }

  addShow(show) {
    const createShow = new Show(show);
    return createShow;
  }

  getMostViewedShowsOfYear(year) {
    const sortedNumDesc = new Map(
      [...DUMMY_Popular].sort((a, b) => b[1] - a[1])
    );

    console.log(sortedNumDesc);
    const obj = Object.fromEntries(sortedNumDesc);
    console.log(obj);

    let ShowsMatch = [];
    for (let key of Object.keys(obj)) {
      ShowsMatch.push(this.shows.filter((show) => show.name === key));
    }
    console.log(ShowsMatch);

    const processedArr = ShowsMatch.reduce((a, b) => [...a, ...b], []);
    console.log(processedArr);
    console.log(processedArr[0].releaseDate.split("").slice(-4).join(""));

    const MostViewedShowsOfYear = processedArr
      .filter((show) => show.releaseDate.split("").slice(-4).join("") === year)
      .slice(0, 10);

    // const slicedArray = MostViewedShowsOfYear.slice(0, 10);

    console.log(MostViewedShowsOfYear);
  }

  getMostViewedShowsOfGenre(genre) {
    const sortedNumDesc = new Map(
      [...DUMMY_Popular].sort((a, b) => b[1] - a[1])
    );

    console.log(sortedNumDesc);
    const obj = Object.fromEntries(sortedNumDesc);
    console.log(obj);

    let ShowsMatch = [];
    for (let key of Object.keys(obj)) {
      ShowsMatch.push(this.shows.filter((show) => show.name === key));
    }
    console.log(ShowsMatch);

    const processedArr = ShowsMatch.reduce((a, b) => [...a, ...b], []);
    console.log(processedArr);

    const MostViewedShowsOfGenre = processedArr
      .filter((show) => show.genres.find((gen) => gen === genre))
      .slice(0, 10);
    console.log(MostViewedShowsOfGenre);
  }
}

class Show {
  constructor(name, genres, releaseDate) {
    // if (this.constructor.name === "Show") {
    //   throw new Error(
    //     `${this.constructor.name}: can not create instance of abstract class`
    //   );
    this.name = name;
    this.genres = genres;
    this.releaseDate = releaseDate;
  }

  //abstruct method return duration
  getDuration() {}
}

class Movie extends Show {
  constructor(name, genres, releaseDate) {
    super(name, genres, releaseDate);
  }
}

class Episode extends Show {
  constructor(name, genres, releaseDate) {
    super(name, genres, releaseDate);
  }
}

class Series extends Show {
  constructor(name, genres, releaseDate, episodes) {
    super(name, genres, releaseDate);
    this.episodes = episodes;
  }
}

/// series lists
const HouseOfDragon = new Series(
  "House of Dragon",
  ["fantasy", "drama", "action"],
  "21.03.2022",
  4
);

const TheWalkingDead = new Series(
  "The Walking Dead",
  ["fantasy", "drama", "action"],
  "31.10.2010",
  123
);
const TheLordOfTheRings = new Series(
  "The Lord of the Rings: The Rings of Power",
  ["fantasy", "drama", "advanture"],
  "01.08.2022",
  2
);
const TheSandman = new Series(
  "The Sandman",
  ["fantasy", "drama"],
  "05.08.2022",
  34
);
const StrangerThings = new Series(
  "Stranger Things",
  ["fantasy", "drama", "action"],
  "15.07.2016",
  56
);
const PeakyBlinders = new Series(
  "Peaky Blinders",
  ["drama", "crime"],
  "12.09.2013",
  75
);

// movies list

const JurassicWorldDominion = new Movie(
  "Jurassic World Dominion",
  ["adventure", "action", "science Fiction"],
  "01.06.2022"
);

const DoctorStrange = new Movie(
  "Doctor Strange in the Multiverse of Madness",
  ["adventure", "action", "science Fiction"],
  "04.05.2022"
);

const TheCellar = new Movie("The Cellar", ["horror", "mystery"], "25.03.2022");

const Prey = new Movie("Prey", ["thriller", "action"], "02.08.2022");

const MinionsTheRiseofGru = new Movie(
  "Minions: The Rise of Gru",
  ["animation", "action", "science Fiction"],
  "29.06.2022"
);

const AfterEverHappy = new Movie(
  "After Ever Happy",
  ["romance", "drama"],
  "24.08.2022"
);

const Samaritan = new Movie(
  "Samaritan",
  ["drama", "action", "science Fiction"],
  "01.06.2004"
);

const TheLostCity = new Movie(
  "The Lost City",
  ["adventure", "action", "comedy"],
  "18.02.2020"
);

const TheNorthman = new Movie(
  "The Northman",
  ["adventure", "action", "science Fiction"],
  "07.04.2022"
);

// streaming services

const NetflixSubscribtion = new StreamingService("Netflix", [
  StrangerThings,
  PeakyBlinders,
  JurassicWorldDominion,
  DoctorStrange,
  TheCellar,
]);

const HBOSubscribtion = new StreamingService("HBO", [
  HouseOfDragon,
  TheWalkingDead,
  TheNorthman,
  TheLostCity,
  Prey,
]);

const AmazonPrimeSubscribtion = new StreamingService("Amazon Prime", [
  TheSandman,
  TheLordOfTheRings,
  Samaritan,
  AfterEverHappy,
  MinionsTheRiseofGru,
]);

console.log(HouseOfDragon, HBOSubscribtion, TheNorthman);

// testing subscribe
const Ivan = new User();
const IvanSunbscribtion = Ivan.subscribe(NetflixSubscribtion);
console.log(Ivan);
Ivan.subscribe(NetflixSubscribtion);

//testing watch
console.log(IvanSunbscribtion);
console.log(IvanSunbscribtion.streamingService.name);
IvanSunbscribtion.watch("Stranger Things");
IvanSunbscribtion.watch("The Northman");
IvanSunbscribtion.watch("Jurassic World Dominion");
IvanSunbscribtion.watch("Stranger Things");

const DUMMY_Popular = new Map([
  ["Stranger Things", 150],
  ["Peaky Blinders", 87],
  ["Jurassic World Dominion", 104],
  ["Doctor Strange in the Multiverse of Madness", 56],
  ["The Cellar", 12],
]);

NetflixSubscribtion.getMostViewedShowsOfYear("2022");
NetflixSubscribtion.getMostViewedShowsOfGenre("action");

IvanSunbscribtion.getRecommendationTrending();
console.log(StreamingService.getMostViewedShowsOfYear("2022"));
