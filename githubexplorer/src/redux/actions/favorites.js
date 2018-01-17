export function addFavorite(repositoryName) {
  return {
    type: 'SEARCH_REPOSITORY',
    payload: {
      repositoryName,
    },
  };
}
