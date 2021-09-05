import React, { useEffect } from "react";
import useStyles from "./styles";
import {
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  capitalize,
} from "@material-ui/core";
import { fetchCountries, selectCountry } from "Redux/actions/countriesActions";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ text }) => {
  const classes = useStyles();

  const { countries, country, loading } = useSelector(
    (state) => state.countries
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return "";

  return (
    <div className={classes.header}>
      <Typography variant="h4" component="h2">
        {capitalize(text)}
      </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Country</InputLabel>
        <Select
          value={country}
          onChange={(e) => dispatch(selectCountry(e.target.value))}
        >
          {countries.map((country) => (
            <MenuItem value={country.alpha2Code} key={country.alpha2Code}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
