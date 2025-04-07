import React from "react";
import { useParams, Link } from "react-router-dom";
import collectionData from "../assets/collection.json";

export const Detail = () => {
  const { slug } = useParams();
  const movie = collectionData.find((m) => m.slug === slug);

  if (!movie) return <div>Movie not found.</div>;

  const imageUrl = new URL(`../assets/${movie.cover}`, import.meta.url).href;

  return (
    <div className="detail-container transparent-box">
      <Link to="/">← Back to Collection</Link>
      <h2>{movie.name}</h2>
      <img src={imageUrl} alt={movie.name} className="detail-cover" />
      <p>Year: {movie.year}</p>
      <p>Inspired by: {movie.inspiration}</p>
    </div>
  );
};