
import type { APIRoute } from 'astro';
import { STRAPI_API_URL } from '../../config';

const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const since = url.searchParams.get('since');

  if (!since) {
    return new Response(JSON.stringify({ error: 'Missing "since" parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Construct the Strapi API URL
    // We fetch posts that were published AFTER the date of the latest post shown on the page.
    const strapiUrl = new URL(`${STRAPI_API_URL}/api/articles`);
    strapiUrl.searchParams.append('populate', '*');
    strapiUrl.searchParams.append('sort', 'publishedAt:desc');
    strapiUrl.searchParams.append('filters[publishedAt][$gt]', since);

    const response = await fetch(strapiUrl.toString(), {
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Strapi request failed: ${response.statusText}`);
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching latest posts from Strapi:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch latest posts' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
