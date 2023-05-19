module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();
    //it would be cool to have a user photo attached to this below. 
    // this should return a photo associated with the user
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};

//for testing purposes below

// module.exports = {
//   format_date: (date) => {
//     // Format date as MM/DD/YYYY
//     return date.toLocaleDateString();
//   },
//   format_amount: (amount) => {
//     // format large numbers with commas
//     return parseInt(amount).toLocaleString();
//   },
//   get_emoji: (photo) => {
//     const randomNum = Math.random();
//     // Check if the user provided a photo and use it if available
//     if (photo) {
//       return `<img src="${photo}" alt="User Photo" />`;
//     }
//     // If no photo is provided, return one of the default emojis
//     if (randomNum > 0.7) {
//       return `<span for="img" aria-label="lightbulb">💡</span>`;
//     } else if (randomNum > 0.4) {
//       return `<span for="img" aria-label="laptop">💻</span>`;
//     } else {
//       return `<span for="img" aria-label="gear">⚙️</span>`;
//     }
//   },
// };
