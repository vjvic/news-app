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

export const menuItems = [
  {
    text: "Home",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    text: "World",
    icon: <PublicOutlinedIcon />,
    path: "/world",
  },
  {
    text: "Sports",
    icon: <SportsBaseballOutlinedIcon />,
    path: "/sports",
  },
  {
    text: "Tech",
    icon: <MemoryOutlinedIcon />,
    path: "/tech",
  },
  {
    text: "Finance",
    icon: <AttachMoneyOutlinedIcon />,
    path: "/finance",
  },
  {
    text: "Politics",
    icon: <GavelOutlinedIcon />,
    path: "/politics",
  },
  {
    text: "Business",
    icon: <BusinessCenterOutlinedIcon />,
    path: "/business",
  },
  {
    text: "Economics",
    icon: <TrendingUpOutlinedIcon />,
    path: "/economics",
  },
  {
    text: "Entertainment",
    icon: <MovieOutlinedIcon />,
    path: "/entertainment",
  },
  {
    text: "Beauty",
    icon: <FilterVintageOutlinedIcon />,
    path: "/beauty",
  },
  {
    text: "Gaming",
    icon: <SportsEsportsOutlinedIcon />,
    path: "/gaming",
  },
];
