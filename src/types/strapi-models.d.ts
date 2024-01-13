// Interface for API Models

// Interface para POST - Descreve o objeto que será retornado pela API
export interface Post {
  id: number;
  attributes: PostAttributes;
}

// Interface para os atributos do POST - Complementa a interface Post
interface PostAttributes {
  post_title: string;
  post_description: string;
  post_slug: string;
  featured_media: FeaturedMedia;
  post_content: string;
  featured_post?: boolean | false;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  featured_video?: string | null;
  is_featured_video?: boolean;
  source?: string | null;
  category?: Category | null;
  post_gallery?: PostGallery[] | null;
  author: Author; // talvez author seja um extends de user
}

export interface FeaturedMedia {
  id: number;
  data: {
    attributes: FeaturedMediaAttributes;
  };
}

export interface FeaturedMediaAttributes {
  name: string;
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
}

// Interface para os atributos do USER
interface User {
  id: number;
  username: string;
  name: string;
  lastName: string;
  email: string;
  slug: string;
  isCreator: boolean;
  avatar?: string | null;
}

export interface Category {
  id: number;
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  title: string;
  slug: string;
  description?: string | null;
  posts?: Post[] | null;
}

export interface PostGallery {
  id: number;
  name: string;
  url: string;
  caption?: string | null;
  post?: Post | null;
}

// Interface para o AUTHOR - Extende a interface USER adicionando o atributo posts
export interface Author extends User {
  posts?: Post[] | null;
}

export interface PostsMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
