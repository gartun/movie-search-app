import React from "react";

import { Movie } from "../components/";

export default {
  title: "Movies/Movie",
  component: Movie,
};

const movieProps = {
  Title: "Dummy Movie",
  Year: 2000,
  imdbID: "dkdkjd",
  Poster: "N/A",
};

const Template = (args) => <Movie {...args} />;

export const Story = Template.bind({});
Story.args = {
  ...movieProps,
};
