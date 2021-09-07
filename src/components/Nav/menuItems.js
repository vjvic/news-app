import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SportsBaseballOutlinedIcon from "@material-ui/icons/SportsBaseballOutlined";
import MemoryOutlinedIcon from "@material-ui/icons/MemoryOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import GavelOutlinedIcon from "@material-ui/icons/GavelOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import MovieOutlinedIcon from "@material-ui/icons/MovieOutlined";
import FilterVintageOutlinedIcon from "@material-ui/icons/FilterVintageOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import LanguageIcon from "@material-ui/icons/Language";

export const menuItems = [
  {
    text: "Home",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    text: "News",
    icon: <LanguageIcon />,
    path: "/categories/news",
  },
  {
    text: "World",
    icon: <PublicOutlinedIcon />,
    path: "/categories/world",
  },
  {
    text: "Sport",
    icon: <SportsBaseballOutlinedIcon />,
    path: "/categories/sport",
  },
  {
    text: "Tech",
    icon: <MemoryOutlinedIcon />,
    path: "/categories/tech",
  },
  {
    text: "Finance",
    icon: <AttachMoneyOutlinedIcon />,
    path: "/categories/finance",
  },
  {
    text: "Politics",
    icon: <GavelOutlinedIcon />,
    path: "/categories/politics",
  },
  {
    text: "Business",
    icon: <BusinessCenterOutlinedIcon />,
    path: "/categories/business",
  },
  {
    text: "Economics",
    icon: <TrendingUpOutlinedIcon />,
    path: "/categories/economics",
  },
  {
    text: "Entertainment",
    icon: <MovieOutlinedIcon />,
    path: "/categories/entertainment",
  },
  {
    text: "Beauty",
    icon: <FilterVintageOutlinedIcon />,
    path: "/categories/beauty",
  },
  {
    text: "Food",
    icon: <FastfoodOutlinedIcon />,
    path: "/categories/food",
  },
  {
    text: "Gaming",
    icon: <SportsEsportsOutlinedIcon />,
    path: "/categories/gaming",
  },
];
