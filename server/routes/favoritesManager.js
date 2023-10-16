// favoritesManager.js

// Use an in-memory array to store favorites
const favorites = [];

// Export functions to manage favorites
module.exports = {
  addToFavorites: (item) => {
    favorites.push(item);
  },

  removeFromFavorites: (itemId) => {
    const index = favorites.findIndex((item) => item.trackId === itemId);
    if (index !== -1) {
      favorites.splice(index, 1);
    }
  },

  getFavorites: () => {
    return favorites;
  },
};
