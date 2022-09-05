import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const naviagte = useNavigate();

  

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm)
    {
      naviagte(`/search/${searchTerm}`);


      setSearchTerm('');
    }
  }
  return (
    <div>
    
    <Paper sx={{color:'#FC1503',background: "#000", fontFamily:'sans-serif', marginLeft:'30px'}}>
    <h3>Youtube-Clone Created By Noman Ali</h3>
    </Paper>

    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>



      
    </Paper>
    
    </div>
  );
};

export default SearchBar;
