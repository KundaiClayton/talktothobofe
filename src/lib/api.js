import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
  const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title, description}, "author": author->{"name": name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllCategoriesWithPosts() {
  const query = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
}
export async function getAllCategories() {
  const query = `*[_type == 'category']{title, slug, description}`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getContactInformation() {
  const query = `*[_type == "contact"]{
    phone,
    address,
    email,
    facebook,
    linkedIn,
    instagram,
    twitter
  }`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAboutInformation() {
  const query = `*[_type == "about"]{
    profileImage,
    description
  }`;
  const data = await useSanityClient().fetch(query);
  return data;
}
