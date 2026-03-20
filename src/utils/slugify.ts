/**
 * Convert a string to a URL-friendly slug
 * @param text - The text to slugify
 * @returns A lowercase, hyphenated slug
 */
export function slugify(text: string): string {
	return text
		.normalize('NFKD')
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/[^\p{Letter}\p{Number}\-]+/gu, '') // Keep letters/numbers from all languages
		.replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
		.replace(/^-+/, '') // Trim hyphens from start
		.replace(/-+$/, ''); // Trim hyphens from end
}
