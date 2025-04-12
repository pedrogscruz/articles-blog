import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, FilterGroup, FilterName, FilterButton } from './styles';
import { Button } from '../common/Button';
import type { Author, Category } from '../../types/article';
import { Select } from '../common/Select';

export interface Filter {
  author: Author[]
  category: Category[]
}

interface FiltersProps {
  filters: Filter;
  onChange: React.Dispatch<React.SetStateAction<Filter>>;
  mobile?: boolean;
}

const fetchAuthors = async (): Promise<Author[]> => {
  const response = await fetch('https://tech-test-backend.dwsbrazil.io/authors');
  if (!response.ok) {
    throw new Error('Failed to fetch authors');
  }
  return response.json();
};

const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch('https://tech-test-backend.dwsbrazil.io/categories');
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

export const Filters: React.FC<FiltersProps> = ({ filters: filtersProp, onChange, mobile = false }) => {
  const [filters, setFilters] = useState<Filter>(filtersProp);

  const { data: authors, isLoading: isLoadingAuthors } = useQuery({
    queryKey: ['authors'],
    queryFn: fetchAuthors,
  });

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const hasChanged = useMemo(() => {
    if (filters.author.length !== filtersProp.author.length) {
      return true;
    }
    if (filters.category.length !== filtersProp.category.length) {
      return true;
    }
    if (JSON.stringify(filters.author) !== JSON.stringify(filtersProp.author)) {
      return true;
    }
    return JSON.stringify(filters.category) !== JSON.stringify(filtersProp.category);
  }, [filters, filtersProp]);

  useEffect(() => {
    setFilters(filtersProp);
  }, [mobile])

  if (mobile) {
    return (
      <>
        <Select
          multiple
          label="Author"
          options={authors ?? []}
          value={filtersProp.author}
          labelAccessor="name"
          valueAccessor="id"
          onChange={(value) => {
            onChange(filters => ({ ...filters, author: value }));
          }}
        />
        <Select
          multiple
          label="Category"
          options={categories ?? []}
          value={filtersProp.category}
          labelAccessor="name"
          valueAccessor="id"
          onChange={(value) => {
            onChange(filters => ({ ...filters, category: value }));
          }}
        />
      </>
    )
  }

  if (isLoadingAuthors || isLoadingCategories) {
    return <div>Loading filters...</div>;
  }

  return (
    <Container>
      <h3>Filters</h3>
      <div>
        <FilterName>Authors</FilterName>
        <FilterGroup>
          {authors?.map((author) => (
            <div key={author.id}>
              <FilterButton
                onClick={() => {
                  setFilters(filters => filters.author.some(a => a.id === author.id) ? {
                    ...filters,
                    author: filters.author.filter(a => a.id !== author.id)
                  } : {
                    ...filters,
                    author: [...filters.author, author].sort()
                  })
                }}
                selected={filters.author.some(a => a.id === author.id)}
              >
                {author.name}
              </FilterButton>
            </div>
          ))}
        </FilterGroup>
      </div>
      <div>
        <FilterName>Categories</FilterName>
        <FilterGroup>
          {categories?.map((category) => (
            <div key={category.id}>
              <FilterButton
                onClick={() => {
                  setFilters(filters => filters.category.some(a => a.id === category.id) ? {
                    ...filters,
                    category: filters.category.filter(a => a.id !== category.id)
                  } : {
                    ...filters,
                    category: [...filters.category, category].sort()
                  })
                }}
                selected={filters.category.some(a => a.id === category.id)}
              >
                {category.name}
              </FilterButton>
            </div>
          ))}
        </FilterGroup>
      </div>
      {hasChanged && <Button onClick={() => onChange(filters)}>Apply filters</Button>}
    </Container>
  );
}; 