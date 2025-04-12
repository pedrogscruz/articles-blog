import { useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { useQuery } from "@tanstack/react-query";
import { SearchInput } from "./common/SearchInput";
import { Container, SearchButton, SearchItem, CloseButton } from "./Header.styles";
import { PostList } from "../types/article";
import { snippetAroundMatch } from "../utils/format";
import ReplaceMatches from "./ReplaceMatches";

const fetchPosts = async (): Promise<PostList> => {
  const response = await fetch('https://tech-test-backend.dwsbrazil.io/posts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json();
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery((width: number) => width <= 768);

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  return (
    <Container>
      {!isOpen && (
        <span className="logo">
          <h2>dentsu</h2>
          <span>world services</span>
        </span>
      )}
      {isMobile && !isOpen ? (
        <SearchButton onClick={() => setIsOpen(true)} />
      ) : (
        <div style={{ position: "relative" }}>
          {isMobile && <CloseButton onClick={() => setIsOpen(false)}>x</CloseButton>}
          <SearchInput
            options={posts ?? []}
            match={(post, searchText) => {
              if (searchText.length === 0) return false;
              return post.content.toLowerCase().includes(searchText.toLowerCase());
            }}
            renderOption={(post, searchText) => {
              const snippet = snippetAroundMatch(post.content, searchText, 40);
              return (
                <SearchItem to={`/article/${post.id}`}>
                  <h3>{post.title}</h3>
                  <div>
                    <ReplaceMatches text={snippet} matches={[searchText]} replace={match => <b>{match}</b>} />
                  </div>
                </SearchItem>
              ) 
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default Header;
