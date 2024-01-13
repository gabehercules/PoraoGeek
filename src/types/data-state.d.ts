// Interface for application state

import { Post } from "./strapi-models";

export interface PostList {
  posts: Post[];
  // isLoading: boolean;
  // error: string | null;
}

export interface PostCard {
  id: number;
  title: string;
  featuredImage: string;
  slug: string;
  date: any; // arrumar essa porra dps e TIPAR A DATA na função formatDate em functions.ts
}
