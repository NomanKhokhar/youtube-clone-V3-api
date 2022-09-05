import React, { useEffect, useState } from "react";
import { Videos, ChannelCard } from "./";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail, videos);

  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
  <Box minHeight="95vh">
        <Box>
       <div style={{background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%', zIndex:10, height:'300px' }}   
       />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" marginLeft="45%"/>    
      </Box>

      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
  </Box>
  );
};

export default ChannelDetails;
