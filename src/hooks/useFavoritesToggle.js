import { useState } from 'react';

export const useFavoritesToggle = () => {
  const [toggled, setIsToggled] = useState(false);
  const onFavoritesToggled = () => setIsToggled(!toggled);
  const isFavoritesToggled = toggled;

  return { onFavoritesToggled, isFavoritesToggled };
};
