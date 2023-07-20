import { Pagination } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    pages: 10,
    currentPage: 2,
  },
};
