import React from 'react';
import {useAppSelector} from '../hooks/redux';

export function FavoritesPage() {
  const {favorites} = useAppSelector((state) => state.github);

  if (favorites.length === 0) return <h1 className="text-center mt-3 text-lg">No items...</h1>;
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        { favorites.map((fav) => (
          <li key={fav}>
            <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
              <a href={fav} target="_blank" rel="noreferrer">{fav}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
