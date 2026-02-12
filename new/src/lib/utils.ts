import { Publication } from "@/data/publication";
import React from 'react';

export function sortPublications(items: Publication[]) {
  return [...items].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}