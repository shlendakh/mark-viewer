import { UPDATE_MARKDOWN } from './actions';

const initialState = {
  markdown: '# Heading\n## Subheading\n[link](https://www.example.com)\n`inline code`\n```\ncode block\n```\n* list item\n> blockquote\n![alt text](https://www.example.com/image.jpg)\n**bolded text**'
};

export function markdownReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MARKDOWN:
      return Object.assign({}, state, {
        markdown: action.text
      });
    default:
      return state;
  }
}