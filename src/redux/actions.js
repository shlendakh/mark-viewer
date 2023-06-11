export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

export function updateMarkdown(text) {
  return { type: UPDATE_MARKDOWN, text };
}