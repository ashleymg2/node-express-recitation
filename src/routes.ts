import { Router, getExpressRouter } from "./framework/router";

class Routes {
  @Router.get("/joke")
  async getJoke() {
    return { joke: "Why did the chicken cross the road? To get to the other side." };
  }

  @Router.post("/joke")
  async postJoke(content: string) {
    return { msg: "Created a new joke.", joke: content };
  }
}

export default getExpressRouter(new Routes());
